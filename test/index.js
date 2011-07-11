'use strict';

var msg = 'test test';

module.exports = {
	"Plain": function (t, a) {
		a.equal(t("test"), "test");
	},
	"Foreground": function (t, a) {
		a.equal(t.red(msg), '\x1b[31m' + msg + '\x1b[39m');
	},
	"Background": function (t, a) {
		a.equal(t.bgRed(msg), '\x1b[41m' + msg + '\x1b[49m');
	},
	"Format": function (t, a) {
		a.equal(t.bold(msg), '\x1b[1m' + msg + '\x1b[22m');
	},
	"Foreground & Format": function (t, a) {
		a.equal(t.bold.blue(msg), '\x1b[34m\x1b[1m' + msg + '\x1b[22m\x1b[39m');
	}
};
