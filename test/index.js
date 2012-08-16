'use strict';

var msg = 'test test';

module.exports = function (t, a) {
	a(t("test"), "test", "Plain");
	a(t.red(msg), '\x1b[31m' + msg + '\x1b[39m', "Foreground");
	a(t.bgRed(msg), '\x1b[41m' + msg + '\x1b[49m', "Background");
	a(t.bold(msg), '\x1b[1m' + msg + '\x1b[22m', "Format");
	a(t.bold.blue(msg), '\x1b[34m\x1b[1m' + msg + '\x1b[22m\x1b[39m',
		"Foreground & Format");
	a(t.red.bright(msg), '\x1b[91m' + msg + '\x1b[39m', "Bright");
	a(t.bgRed.bgBright(msg), '\x1b[101m' + msg + '\x1b[49m', "Bright background");

	a(typeof t.width, 'number', "Width");
	a(typeof t.height, 'number', "Height");

	a(/\n*\x1bc/.test(t.reset), true, "Reset");

	a(t.up(), '', "Up: No argument");
	a(t.up({}), '', "Up: Not a number");
	a(t.up(-34), '', "Up: Negative");
	a(t.up(34), '\x1b[34A', "Up: Positive");

	a(t.down(), '', "Down: No argument");
	a(t.down({}), '', "Down: Not a number");
	a(t.down(-34), '', "Down: Negative");
	a(t.down(34), '\x1b[34B', "Down: Positive");

	a(t.right(), '', "Right: No argument");
	a(t.right({}), '', "Right: Not a number");
	a(t.right(-34), '', "Right: Negative");
	a(t.right(34), '\x1b[34C', "Right: Positive");

	a(t.left(), '', "Left: No argument");
	a(t.left({}), '', "Left: Not a number");
	a(t.left(-34), '', "Left: Negative");
	a(t.left(34), '\x1b[34D', "Left: Positive");

	a(t.move(), '', "Move: No arguments");
	a(t.move({}, {}), '', "Move: Bad arguments");
	a(t.move({}, 12), '\x1b[12B', "Move: One direction");
	a(t.move(0, -12), '\x1b[12A', "Move: One negative direction");
	a(t.move(-42, -2), '\x1b[42D\x1b[2A', "Move: two negatives");
	a(t.move(2, 35), '\x1b[2C\x1b[35B', "Move: two positives");
};
