"use strict";

module.exports = function (t, a) {
	try {
		t.enable();
		a(t.isNoColor(), true, "Disable NO_COLOR");
		t.disable();
		a(t.isNoColor(), false, "Disable NO_COLOR");
		t.auto();
		a(t.isNoColor(), Boolean(process.env.NO_COLOR), "use NO_COLOR env variable");
	} finally {
		t.disable();
	}
};
