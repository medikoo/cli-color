"use strict";

module.exports = function (t, a) {
	try {
		t.enable();
		a(t.isColorSupported(), true, "Enable color support NO_COLOR");
		t.disable();
		a(t.isColorSupported(), false, "Disable color support NO_COLOR");
		t.auto();
		a(t.isColorSupported(), !process.env.NO_COLOR, "use NO_COLOR env variable");
	} finally {
		t.auto();
	}
};
