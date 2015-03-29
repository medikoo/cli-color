'use strict';

var d              = require('d')
  , assign         = require('es5-ext/object/assign')
  , map            = require('es5-ext/object/map')
  , repeat         = require('es5-ext/string/#/repeat')
  , memoize        = require('memoizee')
  , memoizeMethods = require('memoizee/methods')

  , trim           = require('./trim.js')
  , throbber       = require('./throbber.js')

  , join = Array.prototype.join, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties, abs = Math.abs
  , floor = Math.floor, max = Math.max, min = Math.min

  , styleTester = /(?:\x1b|\x9b)\[(?:\d[\d;]*)m/
  , styleEndTester = new RegExp('(?:\\x1b|\\x9b)\\[(?:(?:39|49|22|23|24|25|27|29)[;m])+')
  , styleSplitter = new RegExp(styleTester.source + '|(?:(?!' + styleTester.source + ').)+', 'g')

  , mods, proto, getFn, getMove, xtermMatch
  , up, down, right, left, memoized;

mods = assign({
	// Style
	bold:      { _bold: [1, 22] },
	italic:    { _italic: [3, 23] },
	underline: { _underline: [4, 24] },
	blink:     { _blink: [5, 25] },
	inverse:   { _inverse: [7, 27] },
	strike:    { _strike: [9, 29] }
},

	// Color
	['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']
		.reduce(function (obj, color, index) {
		// foreground
		obj[color] = { _fg: [30 + index, 39] };
		obj[color + 'Bright'] = { _fg: [90 + index, 39] };

		// background
		obj['bg' + color[0].toUpperCase() + color.slice(1)] =
			{ _bg: [40 + index, 49] };
		obj['bg' + color[0].toUpperCase() + color.slice(1) + 'Bright'] =
			{ _bg: [100 + index, 49] };

		return obj;
	}, {}));

// Some use cli-color as: console.log(clc.red('Error!'));
// Which is inefficient as on each call it configures new clc object
// with memoization we reuse once created object
memoized = memoize(function (scope, mod) {
	return defineProperty(getFn(), '_cliColorData',
		d(assign({}, scope._cliColorData, mod)));
});

proto = Object.create(Function.prototype, assign(map(mods, function (mod) {
	return d.gs(function () { return memoized(this, mod); });
}), memoizeMethods({
	// xterm (255) color
	xterm: d(function (code) {
		code = isNaN(code) ? 255 : min(max(code, 0), 255);
		return defineProperty(getFn(), '_cliColorData',
			d(assign({}, this._cliColorData, {
				_fg: [xtermMatch ? xtermMatch[code] : ('38;5;' + code), 39]
			})));
	}),
	bgXterm: d(function (code) {
		code = isNaN(code) ? 255 : min(max(code, 0), 255);
		return defineProperty(getFn(), '_cliColorData',
			d(assign({}, this._cliColorData, {
				_bg: [xtermMatch ? (xtermMatch[code] + 10) : ('48;5;' + code), 49]
			})));
	})
})));

if (process.platform === 'win32') {
	xtermMatch = require('./lib/xterm-match');
}

getFn = function () {
	var fn = function (/*…msg*/) {
		var start = ''
		  , end   = ''
		  , keys  = Object.keys(fn._cliColorData)
		  , msg   = join.call(arguments, ' ')

		  , i, result, parts, index
		  , length, depth, ending;

		if (keys.length) {
			for (i = 0; i < keys.length; i++) {
				start += '\x1b[' + fn._cliColorData[keys[i]][0] + 'm';
				end   += '\x1b[' + fn._cliColorData[keys[i]][1] + 'm';
			}

			// Nested style.
			if (styleTester.test(msg)) {
				result = '';
				parts  = msg.match(styleSplitter);
				index  = 0;
				length = parts.length;
				depth  = [];
				ending = false;

				while (index < length) {
					// When depth is empty, we can match a plain text.
					// To it, we need check if current part is not a style.
					// We encapsulate the text, but not end it, because
					// next parts can use current style.
					// We set ending to true that mean that we need end this style.
					if (depth.length === 0 && !styleTester.test(parts[index])) {
						ending = true;
						result += start + parts[index];
						index++;

						// If no more parts, we can break looping.
						if (index === length) {
							break;
						}
					}

					// If current part is a nested end style, we pop depth.
					if (styleEndTester.test(parts[index])) {
						depth.pop();
					} else if (styleTester.test(parts[index]) && parts[index] !== depth[depth.length - 1]) {
						// If current part is a nested start style, we increase depth.
						// Except if is the same that the previous depth.
						// It mean that is a continuation of nested color.
						depth.push(parts[index]);
					}

					// Basically, we copy all next parts.
					result += parts[index];
					index++;
				}

				// If result has length, so we need ending it.
				// Else, just return empty.
				if (result.length) {
					if (ending) {
						return result + end;
					}

					return result;
				}

				return '';
			}
		}

		return start + msg + end;
	};

	fn.__proto__ = proto;
	return fn;
};

getMove = function (control) {
	return function (num) {
		num = isNaN(num) ? 0 : max(floor(num), 0);
		return num ? ('\x1b[' + num + control) : '';
	};
};

module.exports = defineProperties(getFn(), {
	trim: d(trim),
	throbber: d(throbber),
	width: d.gs(function () { return process.stdout.columns || 0; }),
	height: d.gs(function () { return process.stdout.rows || 0; }),
	reset: d.gs(function () { return '\n\x1bc'; }),
	up: d(up = getMove('A')),
	down: d(down = getMove('B')),
	right: d(right = getMove('C')),
	left: d(left = getMove('D')),
	move: d(function (x, y) {
		x = isNaN(x) ? 0 : floor(x);
		y = isNaN(y) ? 0 : floor(y);
		return ((x > 0) ? right(x) : left(-x)) + ((y > 0) ? down(y) : up(-y));
	}),
	moveTo: d(function (x, y) {
		x = isNaN(x) ? 1 : (max(floor(x), 0) + 1);
		y = isNaN(y) ? 1 : (max(floor(y), 0) + 1);
		return '\x1b[' + y + ';' + x + 'H';
	}),
	bol: d(function (n/*, erase*/) {
		var dir;
		n = isNaN(n) ? 0 : Number(n);
		dir = (n >= 0) ? 'E' : 'F';
		n = floor(abs(n));
		return arguments[1] ?
				(((!n || (dir === 'F')) ? '\x1b[0E\x1bK' : '') +
					repeat.call('\x1b[1' + dir + '\x1b[K', n)) : '\x1b[' + n + dir;
	}),
	beep: d('\x07'),
	xtermSupported: d(!xtermMatch),
	_cliColorData: d({})
});
