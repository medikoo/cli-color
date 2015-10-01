'use strict';
/* CSI - control sequence introducer */
/* SGR - set graphic rendition */

var assign   = require('es5-ext/object/assign')
  , includes = require('es5-ext/string/#/contains');

var CSI = '\x1b[';

var sgr = function (code) {
	return CSI + code + 'm';
};

sgr.CSI = CSI;

var mods = assign({
	// Style
	bold:      { _bold: [1, 22] },
	italic:    { _italic: [3, 23] },
	underline: { _underline: [4, 24] },
	blink:     { _blink: [5, 25] },
	inverse:   { _inverse: [7, 27] },
	strike:    { _strike: [9, 29] }

	// Color
}, ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']
	.reduce(function (obj, color, index) {
		// foreground
		obj[color] = { _fg: [30 + index, 39] };
		obj[color + 'Bright'] = { _fg: [90 + index, 39] };

		// background
		obj['bg' + color[0].toUpperCase() + color.slice(1)] = { _bg: [40 + index, 49] };
		obj['bg' + color[0].toUpperCase() + color.slice(1) + 'Bright'] = { _bg: [100 + index, 49] };

		return obj;
	}, {}));

sgr.mods = mods;

(function () {
	var keys = Object.keys
	  , forEach = require('es5-ext/object/for-each')
	  , toArray = require('es5-ext/object/to-array')
	  , onlyKey = require('es5-ext/object/first-key')
	  , filter  = require('es5-ext/object/filter');

	sgr.toModPair = function (mod) {
		return mod[onlyKey(mod)];
	};

	var openers = {}, closers = {};

	forEach(mods, function (mod) {
		var modPair = sgr.toModPair(mod);

		openers[modPair[0]] = mod;
		closers[modPair[1]] = mod;
	});

	sgr.openers = openers;
	sgr.closers = closers;

	sgr.openStyle = function (mods, code) {
		assign(mods, sgr.openers[code]);
	};

	sgr.closeStyle = function (mods, code)
	{
		var complementForCloser = filter(mods, function (modPair, key) {
			return modPair[1] === code;
		});

		keys(complementForCloser).forEach(function (key) {
			delete mods[key];
		});
	}

	sgr.prepend = function (mods) {
		return toArray(mods, function (modPair, key) {
			return sgr(modPair[0]);
		});
	}

	sgr.complete = function (mods, closerCodes) {
		closerCodes.forEach(function (code) {
			sgr.closeStyle(mods, code);
		});

		return toArray(mods, function (modPair, key) {
			return sgr(modPair[1]);
		});
	}
})();

var hasCSI = function (str) {
	return includes.call(str, CSI);
};

sgr.hasCSI = hasCSI;

var extractCode = function (csi) {
	var code = csi.slice(2, -1);
	code = parseInt(code, 10);
	return code;
};

sgr.extractCode = extractCode;

module.exports = sgr;
