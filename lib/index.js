'use strict';

var defineProperties = Object.defineProperties
  , floor            = Math.floor
  , max              = Math.max
  , d                = require('es5-ext/lib/Object/descriptor')
  , extend           = require('es5-ext/lib/Object/extend')
  , map              = require('es5-ext/lib/Object/map')
  , repeat           = require('es5-ext/lib/String/prototype/repeat')

  , toString, codes, properties, init, getMove;

toString = function (code, str) {
	return '\x1b[' + code[0] + 'm' + (str || "") + '\x1b[' + code[1] + 'm';
};

codes = {
	// styles
	bold:      [1, 22],
	italic:    [3, 23],
	underline: [4, 24],
	inverse:   [7, 27],
	strike:    [9, 29]
};

['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'].forEach(
	function (color, index) {
		// foreground
		codes[color] = [30 + index, 39];
		// background
		codes['bg' + color[0].toUpperCase() + color.slice(1)] = [40 + index, 49];
	}
);
codes.gray = [90, 39];

properties = map(codes, function (code) {
	return d.gs('ce', function () {
		this.style.push(code);
		return this;
	})
});
properties.bright = d.gs('ce', function () {
	this._bright = true;
	return this;
});
properties.bgBright = d.gs('ce', function () {
	this._bgBright = true;
	return this;
});

init = function () {
	var o = defineProperties(function self(msg) {
		return self.style.reduce(function (msg, code) {
			if ((self._bright && (code[0] >= 30) && (code[0] < 38)) ||
					(self._bgBright && (code[0] >= 40) && (code[0] < 48))) {
				code = [code[0] + 60, code[1]];
			}
			return toString(code, msg);
		}, msg);
	}, properties);
	o.style = [];
	return o[this];
};

getMove = function (control) {
	return function (num) {
		num = isNaN(num) ? 0 : max(floor(num), 0);
		return num ? ('\x1b[' + num + control) : '';
	};
};

module.exports = exports = defineProperties(function (msg) {
	return msg;
}, extend(map(properties, function (code, name) {
	return d.gs('ce', init.bind(name));
}), {
	width: d.gs('ce', process.stdout.getWindowSize ? function () {
		return process.stdout.getWindowSize()[0];
	} : function () {
		return require('tty').getWindowSize()[1];
	}),
	height: d.gs('ce', process.stdout.getWindowSize ? function () {
		return process.stdout.getWindowSize()[1];
	} : function () {
		return require('tty').getWindowSize()[0];
	}),
	reset: d.gs('ce', function () {
		return repeat.call('\n', exports.height - 1) + '\x1bc';
	}),
	up: d('cew', getMove('A')),
	down: d('cew', getMove('B')),
	right: d('cew', getMove('C')),
	left: d('cew', getMove('D')),
	move: d('cew', function (x, y) {
		x = isNaN(x) ? 0 : floor(x);
		y = isNaN(y) ? 0 : floor(y);
		return ((x > 0) ? exports.right(x) : exports.left(-x)) +
			((y > 0) ? exports.down(y) : exports.up(-y));
	}),
	beep: d('cew', '\x07')
}));
