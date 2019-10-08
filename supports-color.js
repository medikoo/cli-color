"use strict";

// store whether supports-color mode is enabled or not.
var state = null;

// force supports-color mode
var enable = function () { state = true; };

// disable supports-color mode
var disable = function () { state = false; };

// use the NO_COLOR environment variable (default)
var auto = function () { state = null; };

// determine whether supports-color mode is enabled.
var isColorSupported = function () {
	if (state === null) {
		return !process.env.NO_COLOR;
	}
	return state;
};

module.exports = {
	enable: enable, disable: disable, auto: auto, isColorSupported: isColorSupported
};
