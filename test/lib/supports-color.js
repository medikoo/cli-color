"use strict";
var wrapper = require("../_lib/supports-color-wrapper");

module.exports = wrapper(function (t, a) {
	t.enableColor();
	a(t.isColorSupported(), true, "Enable color support NO_COLOR");
	t.disableColor();
	a(t.isColorSupported(), false, "Disable color support NO_COLOR");
	t.autoDetectSupport();
	a(t.isColorSupported(), !process.env.NO_COLOR, "use NO_COLOR env variable");
});
