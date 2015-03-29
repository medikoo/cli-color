'use strict';

var clc = require('../');

module.exports = function (t, a) {
	var x = clc.red
	  , y = x.bold;

	a(clc.trim('test'), 'test', "Plain");

	a(clc.trim('\x1bA'), '', "Simple Command Type 1");
	a(clc.trim('\x9bA'), '', "Simple Command Type 2");

	a(clc.trim('\x1b[0A'), '', "Single Command");
	a(clc.trim('\x1b[0;A'), '', "Single Separated Command");
	a(clc.trim('\x1b[0;0A'), '', "Two Commands");
	a(clc.trim('\x1b[0;0;A'), '', "Two Separated Commands");

	// Base on index tests.
	a(clc.trim(clc.red('foo')), 'foo', "Foreground");
	a(clc.trim(clc.red('foo', 'bar', 3)), 'foo bar 3', "Foreground: Many args");
	a(clc.trim(clc.red.yellow('foo', 'bar', 3)), 'foo bar 3', "Foreground: Overriden");
	a(clc.trim(clc.bgRed('foo', 'bar')), 'foo bar', "Background");
	a(clc.trim(clc.bgRed.bgYellow('foo', 'bar', 3)), 'foo bar 3', "Background: Overriden");

	a(clc.trim(clc.blue.bgYellow('foo', 'bar')), 'foo bar', "Foreground & Background");
	a(clc.trim(clc.blue.bgYellow.red.bgMagenta('foo', 'bar')),
		'foo bar',
		"Foreground & Background: Overriden");

	a(clc.trim(clc.bold('foo', 'bar')), 'foo bar', "Format");
	a(clc.trim(clc.blink('foobar')), 'foobar', "Format: blink");
	a(clc.trim(clc.bold.blue('foo', 'bar', 3)), 'foo bar 3', "Foreground & Format");

	a(clc.trim(clc.redBright('foo', 'bar')), 'foo bar', "Bright");
	a(clc.trim(clc.bgRedBright('foo', 3)), 'foo 3', "Bright background");

	a(clc.trim(clc.blueBright.bgYellowBright.red.bgMagenta('foo', 'bar')),
		'foo bar',
		"Foreground & Background: Bright: Overriden");

	a(clc.trim(clc.red.blue('foo')), 'foo', "Prioritize the Last Color: Blue");
	a(clc.trim(clc.blue.red('foo')), 'foo', "Prioritize the Last Color: Red");
	a(clc.trim(clc.bgRed.bgBlue('foo')), 'foo', "Prioritize the Last Background Color: Blue");
	a(clc.trim(clc.bgBlue.bgRed('foo')), 'foo', "Prioritize the Last Background Color: Red");
	a(clc.trim(clc.bgRed.red.bgBlue.blue('foo')), 'foo', "Prioritize the Last Mixed Style: Blue");
	a(clc.trim(clc.bgBlue.blue.bgRed.red('foo')), 'foo', "Prioritize the Last Mixed Style: Red");
	a(clc.trim(clc.bgRed.blue.bgBlue.red('foo')),
		'foo',
		"Prioritize the Last Mixed Style: BG Blue and Red");
	a(clc.trim(clc.bgBlue.red.bgRed.blue('foo')),
		'foo',
		"Prioritize the Last Mixed Style: BG Red and Blue");

	a(clc.trim(x('foo', 'red') + ' ' + y('foo', 'boldred')),
		'foo red foo boldred',
		"Detached extension");

	a(clc.trim(clc.reset).replace(/\n/g, ''), '', "Reset");

	a(clc.trim(clc.up()), '', "Up: No argument");
	a(clc.trim(clc.up({})), '', "Up: Not a number");
	a(clc.trim(clc.up(-34)), '', "Up: Negative");
	a(clc.trim(clc.up(34)), '', "Up: Positive");

	a(clc.trim(clc.down()), '', "Down: No argument");
	a(clc.trim(clc.down({})), '', "Down: Not a number");
	a(clc.trim(clc.down(-34)), '', "Down: Negative");
	a(clc.trim(clc.down(34)), '', "Down: Positive");

	a(clc.trim(clc.right()), '', "Right: No argument");
	a(clc.trim(clc.right({})), '', "Right: Not a number");
	a(clc.trim(clc.right(-34)), '', "Right: Negative");
	a(clc.trim(clc.right(34)), '', "Right: Positive");

	a(clc.trim(clc.left()), '', "Left: No argument");
	a(clc.trim(clc.left({})), '', "Left: Not a number");
	a(clc.trim(clc.left(-34)), '', "Left: Negative");
	a(clc.trim(clc.left(34)), '', "Left: Positive");

	a(clc.trim(clc.move()), '', "Move: No arguments");
	a(clc.trim(clc.move({}, {})), '', "Move: Bad arguments");
	a(clc.trim(clc.move({}, 12)), '', "Move: One direction");
	a(clc.trim(clc.move(0, -12)), '', "Move: One negative direction");
	a(clc.trim(clc.move(-42, -2)), '', "Move: two negatives");
	a(clc.trim(clc.move(2, 35)), '', "Move: two positives");

	a(clc.trim(clc.moveTo()), '', "MoveTo: No arguments");
	a(clc.trim(clc.moveTo({}, {})), '', "MoveTo: Bad arguments");
	a(clc.trim(clc.moveTo({}, 12)), '', "MoveTo: One direction");
	a(clc.trim(clc.moveTo(2, -12)), '', "MoveTo: One negative direction");
	a(clc.trim(clc.moveTo(-42, -2)), '', "MoveTo: two negatives");
	a(clc.trim(clc.moveTo(2, 35)), '', "MoveTo: two positives");

	a(clc.trim(clc.bol()), '', "Bol: No argument");
	a(clc.trim(clc.bol({})), '', "Bol: Not a number");
	a(clc.trim(clc.bol(-34)), '', "Bol: Negative");
	a(clc.trim(clc.bol(34)), '', "Bol: Positive");

	a(clc.trim(clc.bol({}, true)), '', "Bol: Erase: Not a number");
	a(clc.trim(clc.bol(-2, true)), '', "Bol: Erase: Negative");
	a(clc.trim(clc.bol(2, true)), '', "Bol: Erase: Positive");

	a(clc.trim(clc.beep), '', "Beep");

	a(clc.trim('test'), 'test', "Plain");
};
