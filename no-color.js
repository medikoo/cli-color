/* eslint-disable func-style */
"use strict";

// store whether no-color mode is enabled or not.
var state = null;

// force no-color mode
function enable() { state = true; }

// disable no-color mode
function disable() { state = false; }

// use the NO_COLOR environment variable (default)
function auto() { state = null; }

// determine whether no-color mode is enabled.
function isNoColor() {
	if (state === null) {
		return Boolean(process.env.NO_COLOR);
	}
	return state;
}

module.exports = { enable: enable, disable: disable, auto: auto, isNoColor: isNoColor };
