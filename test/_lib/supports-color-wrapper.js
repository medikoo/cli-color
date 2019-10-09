"use strict";
var supportsColor = require("../../lib/supports-color");

// a wrapper function which automatically forces color mode to enabled during the tests.
module.exports = function (fn) {
	return function (t, a) {
		supportsColor.enableColor();
		try { return fn(t, a); }
		finally { supportsColor.autoDetectSupport(); }
	};
};
