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

	a(t.up(), '\x1b[0A', "Up: No argument");
	a(t.up({}), '\x1b[0A', "Up: Not a number");
	a(t.up(-34), '\x1b[0A', "Up: Negative");
	a(t.up(34), '\x1b[34A', "Up: Positive");

	a(t.down(), '\x1b[0B', "Down: No argument");
	a(t.down({}), '\x1b[0B', "Down: Not a number");
	a(t.down(-34), '\x1b[0B', "Down: Negative");
	a(t.down(34), '\x1b[34B', "Down: Positive");

	a(t.right(), '\x1b[0C', "Right: No argument");
	a(t.right({}), '\x1b[0C', "Right: Not a number");
	a(t.right(-34), '\x1b[0C', "Right: Negative");
	a(t.right(34), '\x1b[34C', "Right: Positive");

	a(t.left(), '\x1b[0D', "Left: No argument");
	a(t.left({}), '\x1b[0D', "Left: Not a number");
	a(t.left(-34), '\x1b[0D', "Left: Negative");
	a(t.left(34), '\x1b[34D', "Left: Positive");

	a(t.move(), '', "Move: No arguments");
	a(t.move({}, {}), '', "Move: Bad arguments");
	a(t.move({}, 12), '\x1b[12B', "Move: One direction");
	a(t.move(0, -12), '\x1b[12A', "Move: One negative direction");
	a(t.move(-42, -2), '\x1b[42D\x1b[2A', "Move: two negatives");
	a(t.move(2, 35), '\x1b[2C\x1b[35B', "Move: two positives");
};
