'use strict';

var d      = require('es5-ext/lib/Object/descriptor')
  , extend = require('es5-ext/lib/Object/extend')
  , map    = require('es5-ext/lib/Object/map')
  , repeat = require('es5-ext/lib/String/prototype/repeat')

  , defineProperties = Object.defineProperties
  , abs = Math.abs, floor = Math.floor, max = Math.max, min = Math.min
  , round = Math.round

  , toString, codes, properties, init, color, getMove, rgb, hex;

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

color = function (n) {
	return round((isNaN(n) ? 0 : max(min(n, 255), 0)) / 255 * 5);
};
rgb = function (base) {
	return function (r, g, b) {
		this.style.push([base + ';5;' +
			(16 + color(r) * 36 + color(g) * 6 + color(b)), base + 1]);
		return this;
	};
};
hex = function (base) {
	return function (col) {
		col = String(col);
		if (col[0] === '#') col = col.slice(1);
		this.style.push([base + ';5;' + (16
			+ color(parseInt(col.slice(0,2), 16)) * 36
			+ color(parseInt(col.slice(2, 4), 16)) * 6
			+ color(parseInt(col.slice(4, 6), 16))), base + 1]);
		return this;
	};
};
properties.rgb = d('cew', rgb(38));
properties.bgRgb = d('cew', rgb(48));
properties.hex = d('cew', hex(38));
properties.bgHex = d('cew', hex(48));
properties.xterm = d('cew', function (code) {
	code = isNaN(code) ? 255 : min(max(code, 0), 255);
	this.style.push(['38;5;' + code, 39]);
	return this;
});
properties.bgXterm = d('cew', function (code) {
	code = isNaN(code) ? 255 : min(max(code, 0), 255);
	this.style.push(['48;5;' + code, 49]);
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
	return (o[this] === o) ? o : o[this].bind(o);
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
	beep: d('cew', '\x07'),
	bol: d('cew', function (n, erase) {
		var dir;
		n = isNaN(n) ? 0 : Number(n);
		dir = (n >= 0) ? 'E' : 'F';
		n = floor(abs(n));
		return erase ? '\x1b[0E\x1bK' + repeat.call('\x1b[1' + dir + '\x1b[K', n) :
			'\x1b[' + n + dir;
	})
}));
