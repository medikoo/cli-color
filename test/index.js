'use strict';

module.exports = function (t, a) {
	var x, y;

	a(t('test'), 'test', "Plain");
	a(t('test', 'foo', 3, { toString: function () { return 'bar'; } }),
		'test foo 3 bar', "Plain: Many args");

	a(t.red('foo'), '\x1b[31;mfoo\x1b[39;m', "Foreground");
	a(t.red('foo', 'bar', 3), '\x1b[31;mfoo bar 3\x1b[39;m',
		"Foreground: Many args");
	a(t.red.yellow('foo', 'bar', 3), '\x1b[33;mfoo bar 3\x1b[39;m',
		"Foreground: Overriden");
	a(t.bgRed('foo', 'bar'), '\x1b[41;mfoo bar\x1b[49;m', "Background");
	a(t.bgRed.bgYellow('foo', 'bar', 3), '\x1b[43;mfoo bar 3\x1b[49;m',
		"Background: Overriden");

	a(t.blue.bgYellow('foo', 'bar'), '\x1b[34;43;mfoo bar\x1b[39;49;m',
		"Foreground & Background");
	a(t.blue.bgYellow.red.bgMagenta('foo', 'bar'),
		'\x1b[31;45;mfoo bar\x1b[39;49;m',
		"Foreground & Background: Overriden");

	a(t.bold('foo', 'bar'), '\x1b[1;mfoo bar\x1b[22;m', "Format");
	a(t.blink('foobar'), '\x1b[5;mfoobar\x1b[25;m', "Format: blink");
	a(t.bold.blue('foo', 'bar', 3), '\x1b[1;34;mfoo bar 3\x1b[22;39;m',
		"Foreground & Format");

	a(t.redBright('foo', 'bar'), '\x1b[91;mfoo bar\x1b[39;m', "Bright");
	a(t.bgRedBright('foo', 3), '\x1b[101;mfoo 3\x1b[49;m', "Bright background");

	a(t.blueBright.bgYellowBright.red.bgMagenta('foo', 'bar'),
		'\x1b[31;45;mfoo bar\x1b[39;49;m',
		"Foreground & Background: Bright: Overriden");

    a(t.red.blue('foo'), '\x1b[34;mfoo\x1b[39;m', "Prioritize the Last Color: Blue");
    a(t.blue.red('foo'), '\x1b[31;mfoo\x1b[39;m', "Prioritize the Last Color: Red");
    a(t.bgRed.bgBlue('foo'), '\x1b[44;mfoo\x1b[49;m', "Prioritize the Last Background Color: Blue");
    a(t.bgBlue.bgRed('foo'), '\x1b[41;mfoo\x1b[49;m', "Prioritize the Last Background Color: Red");
    a(t.bgRed.red.bgBlue.blue('foo'), '\x1b[44;34;mfoo\x1b[49;39;m', "Prioritize the Last Mixed Style: Blue");
    a(t.bgBlue.blue.bgRed.red('foo'), '\x1b[41;31;mfoo\x1b[49;39;m', "Prioritize the Last Mixed Style: Red");
    a(t.bgRed.blue.bgBlue.red('foo'), '\x1b[44;31;mfoo\x1b[49;39;m', "Prioritize the Last Mixed Style: BG Blue and Red");
    a(t.bgBlue.red.bgRed.blue('foo'), '\x1b[41;34;mfoo\x1b[49;39;m', "Prioritize the Last Mixed Style: BG Red and Blue");

    a(t.red(t.blue('blue ') + 'red'),
        '\x1b[34;mblue \x1b[31;mred\x1b[39;49;m',
        "Nested Foreground: Two Levels Type 1");
    a(t.red('red ' + t.blue('blue ')),
        '\x1b[31;mred \x1b[34;mblue \x1b[39;49;m',
        "Nested Foreground: Two Levels Type 2");
    a(t.red('red ' + t.blue('blue ') + 'red'),
        '\x1b[31;mred \x1b[34;mblue \x1b[31;mred\x1b[39;49;m',
        "Nested Foreground: Two Levels Type 3");

    a(t.red('red ' + t.blue('blue ' + t.green('green ')) + 'red'),
        '\x1b[31;mred \x1b[34;mblue \x1b[32;mgreen \x1b[31;mred\x1b[39;49;m',
        "Nested Foreground: Three Levels Type 1");
    a(t.red('red ' + t.blue('blue ' + t.green('green ') + 'blue ') + 'red'),
        '\x1b[31;mred \x1b[34;mblue \x1b[32;mgreen \x1b[34;mblue \x1b[31;mred\x1b[39;49;m',
        "Nested Foreground: Three Levels Type 2");
    a(t.red('red ' + t.blue('blue ' + t.green('green ')) + t.green('green ') + 'red'),
        '\x1b[31;mred \x1b[34;mblue \x1b[32;mgreen \x1b[32;mgreen \x1b[31;mred\x1b[39;49;m',
        "Nested Foreground: Three Levels Type 3");
    a(t.red('red ' + t.blue('blue ' + t.green('green ') + t.yellow('yellow ')) + 'red'),
        '\x1b[31;mred \x1b[34;mblue \x1b[32;mgreen \x1b[33;myellow \x1b[31;mred\x1b[39;49;m',
        "Nested Foreground: Three Levels Type 4");
    a(t.red('red ' + t.blue('blue ' + t.green('green ') + "blue " + t.yellow('yellow ')) + 'red'),
        '\x1b[31;mred \x1b[34;mblue \x1b[32;mgreen \x1b[34;mblue \x1b[33;myellow \x1b[31;mred\x1b[39;49;m',
        "Nested Foreground: Three Levels Type 5");

    a(t.red('red ' + t.blue('blue ' + t.green('green ' + t.yellow('yellow ') + "green ")) + 'red'),
        '\x1b[31;mred \x1b[34;mblue \x1b[32;mgreen \x1b[33;myellow \x1b[32;mgreen \x1b[31;mred\x1b[39;49;m',
        "Nested Foreground: Four Levels");

    a(t.red('\x1bAred'),
        '\x1b[31;m\x1bAred\x1b[39;m',
        "Nested Foreground: Trap Type 1 - Not a Style Before");
    a(t.red('red\x1bA'),
        '\x1b[31;mred\x1bA\x1b[39;m',
        "Nested Foreground: Trap Type 2 - Not a Style After");
    a(t.red('\x1bAred\x1bA'),
        '\x1b[31;m\x1bAred\x1bA\x1b[39;m',
        "Nested Foreground: Trap Type 3 - Not a Style Around");
    a(t.red('\x1b34;m\x1b39;m'),
        '\x1b[31;m\x1b34;m\x1b39;m\x1b[39;m',
        "Nested Foreground: Trap Type 4 - Not a Valid Style");
    a(t.red('\x1b[34;m\x1b[39;49;m'),
        '',
        "Nested Foreground: Trap Type 5 - No Message Style");
    a(t.red('\x1b[34;m\x1b[39;49;m\x1b[34;mblue\x1b[39;49;m'),
        '\x1b[34;mblue\x1b[39;49;m',
        "Nested Foreground: Trap Type 6 - No Message Style Before");
    a(t.red('\x1b[34;mblue\x1b[39;49;m\x1b[34;m\x1b[39;49;m'),
        '\x1b[34;mblue\x1b[39;49;m',
        "Nested Foreground: Trap Type 7 - No Message Style After");
    a(t.red('\x1b[34;m\x1b[39;49;m\x1b[34;mblue\x1b[39;49;m\x1b[34;m\x1b[39;49;m'),
        '\x1b[34;mblue\x1b[39;49;m',
        "Nested Foreground: Trap Type 8 - No Message Style Around");
    a(t.red('\x1b[34;mblue'),
        '\x1b[34;mblue\x1b[39;49;m',
        "Nested Foreground: Trap Type 9 - Bad-formatted Before");
    a(t.red('red\x1b[39;49;m'),
        '\x1b[31;mred\x1b[39;49;m',
        "Nested Foreground: Trap Type 10 - Bad-formatted After");

    a(t.bgRed(t.bgBlue('blue ') + 'red'),
        '\x1b[44;mblue \x1b[41;mred\x1b[39;49;m',
        "Nested Background: Two Levels Type 1");
    a(t.bgRed('red ' + t.bgBlue('blue ')),
        '\x1b[41;mred \x1b[44;mblue \x1b[39;49;m',
        "Nested Background: Two Levels Type 2");
    a(t.bgRed('red ' + t.bgBlue('blue ') + 'red'),
        '\x1b[41;mred \x1b[44;mblue \x1b[41;mred\x1b[39;49;m',
        "Nested Background: Two Levels Type 3");

    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ')) + 'red'),
        '\x1b[41;mred \x1b[44;mblue \x1b[42;mgreen \x1b[41;mred\x1b[39;49;m',
        "Nested Background: Three Levels Type 1");
    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ') + 'blue ') + 'red'),
        '\x1b[41;mred \x1b[44;mblue \x1b[42;mgreen \x1b[44;mblue \x1b[41;mred\x1b[39;49;m',
        "Nested Background: Three Levels Type 2");
    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ')) + t.bgGreen('green ') + 'red'),
        '\x1b[41;mred \x1b[44;mblue \x1b[42;mgreen \x1b[42;mgreen \x1b[41;mred\x1b[39;49;m',
        "Nested Background: Three Levels Type 3");
    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ') + t.bgYellow('yellow ')) + 'red'),
        '\x1b[41;mred \x1b[44;mblue \x1b[42;mgreen \x1b[43;myellow \x1b[41;mred\x1b[39;49;m',
        "Nested Background: Three Levels Type 4");
    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ') + "blue " + t.bgYellow('yellow ')) + 'red'),
        '\x1b[41;mred \x1b[44;mblue \x1b[42;mgreen \x1b[44;mblue \x1b[43;myellow \x1b[41;mred\x1b[39;49;m',
        "Nested Background: Three Levels Type 5");

    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ' + t.bgYellow('yellow ') + "green ")) + 'red'),
        '\x1b[41;mred \x1b[44;mblue \x1b[42;mgreen \x1b[43;myellow \x1b[42;mgreen \x1b[41;mred\x1b[39;49;m',
        "Nested Background: Four Levels");

    a(t.bgRed('\x1bAred'),
        '\x1b[41;m\x1bAred\x1b[49;m',
        "Nested Background: Trap Type 1 - Not a Style Before");
    a(t.bgRed('red\x1bA'),
        '\x1b[41;mred\x1bA\x1b[49;m',
        "Nested Background: Trap Type 2 - Not a Style After");
    a(t.bgRed('\x1bAred\x1bA'),
        '\x1b[41;m\x1bAred\x1bA\x1b[49;m',
        "Nested Background: Trap Type 3 - Not a Style Around");
    a(t.bgRed('\x1b44;m\x1b39;m'),
        '\x1b[41;m\x1b44;m\x1b39;m\x1b[49;m',
        "Nested Background: Trap Type 4 - Not a Valid Style");
    a(t.bgRed('\x1b[44;m\x1b[39;49;m'),
        '',
        "Nested Background: Trap Type 5 - No Message Style");
    a(t.bgRed('\x1b[44;m\x1b[39;49;m\x1b[44;mblue\x1b[39;49;m'),
        '\x1b[44;mblue\x1b[39;49;m',
        "Nested Background: Trap Type 6 - No Message Style Before");
    a(t.bgRed('\x1b[44;mblue\x1b[39;49;m\x1b[44;m\x1b[39;49;m'),
        '\x1b[44;mblue\x1b[39;49;m',
        "Nested Background: Trap Type 7 - No Message Style After");
    a(t.bgRed('\x1b[44;m\x1b[39;49;m\x1b[44;mblue\x1b[39;49;m\x1b[44;m\x1b[39;49;m'),
        '\x1b[44;mblue\x1b[39;49;m',
        "Nested Background: Trap Type 8 - No Message Style Around");
    a(t.bgRed('\x1b[44;mblue'),
        '\x1b[44;mblue\x1b[39;49;m',
        "Nested Background: Trap Type 9 - Bad-formatted Before");
    a(t.bgRed('red\x1b[39;49;m'),
        '\x1b[41;mred\x1b[39;49;m',
        "Nested Background: Trap Type 10 - Bad-formatted After");

    a(t.red('red ' + t.bgBlue('blue ')),
        '\x1b[31;mred \x1b[44;mblue \x1b[39;49;m',
        "Nested Foreground and Background: Two Levels Type 1");
    a(t.red('red ' + t.bgBlue('blue ') + 'red'),
        '\x1b[31;mred \x1b[44;mblue \x1b[31;mred\x1b[39;49;m',
        "Nested Foreground and Background: Two Levels Type 2");
    a(t.bgBlue('blue ' + t.bgRed('red ' + t.whiteBright('white ') + 'red ') + 'blue'),
        '\x1b[44;mblue \x1b[41;mred \x1b[97;mwhite \x1b[41;mred \x1b[44;mblue\x1b[39;49;m',
        "Nested Foreground and Background: Two Levels Type 3");

	x = t.red;
	y = x.bold;

	a(x('foo', 'red') + ' ' + y('foo', 'boldred'),
		'\x1b[31;mfoo red\x1b[39;m \x1b[31;1;mfoo boldred\x1b[39;22;m',
		"Detached extension");

	a(t.xterm(12).bgXterm(67)('foo', 'xterm'),
		'\x1b[94;100;mfoo xterm\x1b[39;49;m', "Xterm");
    a(t.redBright.bgBlueBright.xterm(12).bgXterm(67)('foo', 'xterm'),
        '\x1b[94;100;mfoo xterm\x1b[39;49;m',
        "Xterm: Override & Bright");
    a(t.xterm(12).bgXterm(67).redBright.bgMagentaBright('foo', 'xterm'),
        '\x1b[91;105;mfoo xterm\x1b[39;49;m',
        "Xterm: Override & Bright #2");

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

	a(t.moveTo(), '\x1b[1;1H', "MoveTo: No arguments");
	a(t.moveTo({}, {}), '\x1b[1;1H', "MoveTo: Bad arguments");
	a(t.moveTo({}, 12), '\x1b[13;1H', "MoveTo: One direction");
	a(t.moveTo(2, -12), '\x1b[1;3H', "MoveTo: One negative direction");
	a(t.moveTo(-42, -2), '\x1b[1;1H', "MoveTo: two negatives");
	a(t.moveTo(2, 35), '\x1b[36;3H', "MoveTo: two positives");

	a(t.bol(), '\x1b[0E', "Bol: No argument");
	a(t.bol({}), '\x1b[0E', "Bol: Not a number");
	a(t.bol(-34), '\x1b[34F', "Bol: Negative");
	a(t.bol(34), '\x1b[34E', "Bol: Positive");

	a(t.bol({}, true), '\x1b[0E\x1bK', "Bol: Erase: Not a number");
	a(t.bol(-2, true), '\x1b[0E\x1bK\x1b[1F\x1b[K\x1b[1F\x1b[K',
		"Bol: Erase: Negative");
	a(t.bol(2, true), '\x1b[1E\x1b[K\x1b[1E\x1b[K',
		"Bol: Erase: Positive");

	a(t.beep, '\x07', "Beep");
};
