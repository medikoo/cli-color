'use strict';

module.exports = function (t, a) {
	var x, y;

	a(t('test'), 'test', "Plain");
	a(t('test', 'foo', 3, { toString: function () { return 'bar'; } }),
		'test foo 3 bar', "Plain: Many args");

	a(t.red('foo'), '\x1b[31mfoo\x1b[39m', "Foreground");
	a(t.red('foo', 'bar', 3), '\x1b[31mfoo bar 3\x1b[39m',
		"Foreground: Many args");
	a(t.red.yellow('foo', 'bar', 3), '\x1b[33mfoo bar 3\x1b[39m',
		"Foreground: Overriden");
	a(t.bgRed('foo', 'bar'), '\x1b[41mfoo bar\x1b[49m', "Background");
	a(t.bgRed.bgYellow('foo', 'bar', 3), '\x1b[43mfoo bar 3\x1b[49m',
		"Background: Overriden");

	a(t.blue.bgYellow('foo', 'bar'), '\x1b[34;43mfoo bar\x1b[39;49m',
		"Foreground & Background");
	a(t.blue.bgYellow.red.bgMagenta('foo', 'bar'),
		'\x1b[31;45mfoo bar\x1b[39;49m',
		"Foreground & Background: Overriden");

	a(t.bold('foo', 'bar'), '\x1b[1mfoo bar\x1b[22m', "Format");
	a(t.blink('foobar'), '\x1b[5mfoobar\x1b[25m', "Format: blink");
	a(t.bold.blue('foo', 'bar', 3), '\x1b[1;34mfoo bar 3\x1b[22;39m',
		"Foreground & Format");

	a(t.redBright('foo', 'bar'), '\x1b[91mfoo bar\x1b[39m', "Bright");
	a(t.bgRedBright('foo', 3), '\x1b[101mfoo 3\x1b[49m', "Bright background");

	a(t.blueBright.bgYellowBright.red.bgMagenta('foo', 'bar'),
		'\x1b[31;45mfoo bar\x1b[39;49m',
		"Foreground & Background: Bright: Overriden");

    a(t.red.blue('foo'), '\x1b[34mfoo\x1b[39m', "Prioritize the Last Color: Blue");
    a(t.blue.red('foo'), '\x1b[31mfoo\x1b[39m', "Prioritize the Last Color: Red");
    a(t.bgRed.bgBlue('foo'), '\x1b[44mfoo\x1b[49m', "Prioritize the Last Background Color: Blue");
    a(t.bgBlue.bgRed('foo'), '\x1b[41mfoo\x1b[49m', "Prioritize the Last Background Color: Red");
    a(t.bgRed.red.bgBlue.blue('foo'), '\x1b[44;34mfoo\x1b[49;39m', "Prioritize the Last Mixed Style: Blue");
    a(t.bgBlue.blue.bgRed.red('foo'), '\x1b[41;31mfoo\x1b[49;39m', "Prioritize the Last Mixed Style: Red");
    a(t.bgRed.blue.bgBlue.red('foo'), '\x1b[44;31mfoo\x1b[49;39m', "Prioritize the Last Mixed Style: BG Blue and Red");
    a(t.bgBlue.red.bgRed.blue('foo'), '\x1b[41;34mfoo\x1b[49;39m', "Prioritize the Last Mixed Style: BG Red and Blue");

    a(t.bold('bold ' + t.whiteBright('whiteBright ') + 'bold'),
        '\x1b[1mbold \x1b[97mwhiteBright \x1b[39m\x1b[1mbold\x1b[22m',
        "Nested Format: Bold Type 1");
    a(t.white('white ' + t.bold('bold ') + 'white'),
        '\x1b[37mwhite \x1b[1mbold \x1b[22m\x1b[37mwhite\x1b[39m',
        "Nested Format: Bold Type 2");

    a(t.italic('italic ' + t.whiteBright('whiteBright ') + 'italic'),
        '\x1b[3mitalic \x1b[97mwhiteBright \x1b[39m\x1b[3mitalic\x1b[23m',
        "Nested Format: Italic");
    a(t.white('white ' + t.italic('italic ') + 'white'),
        '\x1b[37mwhite \x1b[3mitalic \x1b[23m\x1b[37mwhite\x1b[39m',
        "Nested Format: Italic Type 2");

    a(t.underline('underline ' + t.whiteBright('whiteBright ') + 'underline'),
        '\x1b[4munderline \x1b[97mwhiteBright \x1b[39m\x1b[4munderline\x1b[24m',
        "Nested Format: Underline");
    a(t.white('white ' + t.underline('underline ') + 'white'),
        '\x1b[37mwhite \x1b[4munderline \x1b[24m\x1b[37mwhite\x1b[39m',
        "Nested Format: Underline Type 2");

    a(t.blink('blink ' + t.whiteBright('whiteBright ') + 'blink'),
        '\x1b[5mblink \x1b[97mwhiteBright \x1b[39m\x1b[5mblink\x1b[25m',
        "Nested Format: Blink");
    a(t.white('white ' + t.blink('blink ') + 'white'),
        '\x1b[37mwhite \x1b[5mblink \x1b[25m\x1b[37mwhite\x1b[39m',
        "Nested Format: Blink Type 2");

    a(t.inverse('inverse ' + t.whiteBright('whiteBright ') + 'inverse'),
        '\x1b[7minverse \x1b[97mwhiteBright \x1b[39m\x1b[7minverse\x1b[27m',
        "Nested Format: Inverse");
    a(t.white('white ' + t.inverse('inverse ') + 'white'),
        '\x1b[37mwhite \x1b[7minverse \x1b[27m\x1b[37mwhite\x1b[39m',
        "Nested Format: Inverse Type 2");

    a(t.strike('strike ' + t.whiteBright('whiteBright ') + 'strike'),
        '\x1b[9mstrike \x1b[97mwhiteBright \x1b[39m\x1b[9mstrike\x1b[29m',
        "Nested Format: Strike");
    a(t.white('white ' + t.strike('strike ') + 'white'),
        '\x1b[37mwhite \x1b[9mstrike \x1b[29m\x1b[37mwhite\x1b[39m',
        "Nested Format: Strike Type 2");

    a(t.red('red ' + t.blue('blue ')),
        '\x1b[31mred \x1b[34mblue \x1b[39m\x1b[39m',
        "Nested Foreground: Two Levels Type 1");
    a(t.red(t.blue('blue ') + 'red'),
        '\x1b[34mblue \x1b[39m\x1b[31mred\x1b[39m',
        "Nested Foreground: Two Levels Type 2");
    a(t.red('red ' + t.blue('blue ') + 'red'),
        '\x1b[31mred \x1b[34mblue \x1b[39m\x1b[31mred\x1b[39m',
        "Nested Foreground: Two Levels Type 3");

    a(t.red('red ' + t.blue('blue ' + t.green('green ')) + 'red'),
        '\x1b[31mred \x1b[34mblue \x1b[32mgreen \x1b[39m\x1b[39m\x1b[31mred\x1b[39m',
        "Nested Foreground: Three Levels Type 1");
    a(t.red('red ' + t.blue('blue ' + t.green('green ') + 'blue ') + 'red'),
        '\x1b[31mred \x1b[34mblue \x1b[32mgreen \x1b[39m\x1b[34mblue \x1b[39m\x1b[31mred\x1b[39m',
        "Nested Foreground: Three Levels Type 2");
    a(t.red('red ' + t.blue('blue ' + t.green('green ')) + t.green('green ') + 'red'),
        '\x1b[31mred \x1b[34mblue \x1b[32mgreen \x1b[39m\x1b[39m\x1b[32mgreen \x1b[39m\x1b[31mred\x1b[39m',
        "Nested Foreground: Three Levels Type 3");
    a(t.red('red ' + t.blue('blue ' + t.green('green ') + t.yellow('yellow ')) + 'red'),
        '\x1b[31mred \x1b[34mblue \x1b[32mgreen \x1b[39m\x1b[33myellow \x1b[39m\x1b[39m\x1b[31mred\x1b[39m',
        "Nested Foreground: Three Levels Type 4");
    a(t.red('red ' + t.blue('blue ' + t.green('green ') + "blue " + t.yellow('yellow ')) + 'red'),
        '\x1b[31mred \x1b[34mblue \x1b[32mgreen \x1b[39m\x1b[34mblue \x1b[33myellow \x1b[39m\x1b[39m\x1b[31mred\x1b[39m',
        "Nested Foreground: Three Levels Type 5");

    a(t.red('red ' + t.blue('blue ' + t.green('green ' + t.yellow('yellow ') + "green ")) + 'red'),
        '\x1b[31mred \x1b[34mblue \x1b[32mgreen \x1b[33myellow \x1b[39m\x1b[32mgreen \x1b[39m\x1b[39m\x1b[31mred\x1b[39m',
        "Nested Foreground: Four Levels");

    a(t.red('\x1bAred'),
        '\x1b[31m\x1bAred\x1b[39m',
        "Nested Foreground: Trap Type 1 - Not a Style Before");
    a(t.red('red\x1bA'),
        '\x1b[31mred\x1bA\x1b[39m',
        "Nested Foreground: Trap Type 2 - Not a Style After");
    a(t.red('\x1bAred\x1bA'),
        '\x1b[31m\x1bAred\x1bA\x1b[39m',
        "Nested Foreground: Trap Type 3 - Not a Style Around");
    a(t.red('\x1b34m\x1b39m'),
        '\x1b[31m\x1b34m\x1b39m\x1b[39m',
        "Nested Foreground: Trap Type 4 - Not a Valid Style");
    a(t.red('\x1b[34m\x1b[39m'),
        '\x1b[34m\x1b[39m',
        "Nested Foreground: Trap Type 5 - No Message Style");
    a(t.red('\x1b[34m\x1b[39m\x1b[34mblue\x1b[39m'),
        '\x1b[34m\x1b[39m\x1b[34mblue\x1b[39m',
        "Nested Foreground: Trap Type 6 - No Message Style Before");
    a(t.red('\x1b[34mblue\x1b[39m\x1b[34m\x1b[39m'),
        '\x1b[34mblue\x1b[39m\x1b[34m\x1b[39m',
        "Nested Foreground: Trap Type 7 - No Message Style After");
    a(t.red('\x1b[34m\x1b[39m\x1b[34mblue\x1b[39m\x1b[34m\x1b[39m'),
        '\x1b[34m\x1b[39m\x1b[34mblue\x1b[39m\x1b[34m\x1b[39m',
        "Nested Foreground: Trap Type 8 - No Message Style Around");

    a(t.bgRed('red ' + t.bgBlue('blue ')),
        '\x1b[41mred \x1b[44mblue \x1b[49m\x1b[49m',
        "Nested Background: Two Levels Type 1");
    a(t.bgRed(t.bgBlue('blue ') + 'red'),
        '\x1b[44mblue \x1b[49m\x1b[41mred\x1b[49m',
        "Nested Background: Two Levels Type 2");
    a(t.bgRed('red ' + t.bgBlue('blue ') + 'red'),
        '\x1b[41mred \x1b[44mblue \x1b[49m\x1b[41mred\x1b[49m',
        "Nested Background: Two Levels Type 3");

    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ')) + 'red'),
        '\x1b[41mred \x1b[44mblue \x1b[42mgreen \x1b[49m\x1b[49m\x1b[41mred\x1b[49m',
        "Nested Background: Three Levels Type 1");
    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ') + 'blue ') + 'red'),
        '\x1b[41mred \x1b[44mblue \x1b[42mgreen \x1b[49m\x1b[44mblue \x1b[49m\x1b[41mred\x1b[49m',
        "Nested Background: Three Levels Type 2");
    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ')) + t.bgGreen('green ') + 'red'),
        '\x1b[41mred \x1b[44mblue \x1b[42mgreen \x1b[49m\x1b[49m\x1b[42mgreen \x1b[49m\x1b[41mred\x1b[49m',
        "Nested Background: Three Levels Type 3");
    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ') + t.bgYellow('yellow ')) + 'red'),
        '\x1b[41mred \x1b[44mblue \x1b[42mgreen \x1b[49m\x1b[43myellow \x1b[49m\x1b[49m\x1b[41mred\x1b[49m',
        "Nested Background: Three Levels Type 4");
    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ') + "blue " + t.bgYellow('yellow ')) + 'red'),
        '\x1b[41mred \x1b[44mblue \x1b[42mgreen \x1b[49m\x1b[44mblue \x1b[43myellow \x1b[49m\x1b[49m\x1b[41mred\x1b[49m',
        "Nested Background: Three Levels Type 5");

    a(t.bgRed('red ' + t.bgBlue('blue ' + t.bgGreen('green ' + t.bgYellow('yellow ') + "green ")) + 'red'),
        '\x1b[41mred \x1b[44mblue \x1b[42mgreen \x1b[43myellow \x1b[49m\x1b[42mgreen \x1b[49m\x1b[49m\x1b[41mred\x1b[49m',
        "Nested Background: Four Levels");

    a(t.bgRed('\x1bAred'),
        '\x1b[41m\x1bAred\x1b[49m',
        "Nested Background: Trap Type 1 - Not a Style Before");
    a(t.bgRed('red\x1bA'),
        '\x1b[41mred\x1bA\x1b[49m',
        "Nested Background: Trap Type 2 - Not a Style After");
    a(t.bgRed('\x1bAred\x1bA'),
        '\x1b[41m\x1bAred\x1bA\x1b[49m',
        "Nested Background: Trap Type 3 - Not a Style Around");
    a(t.bgRed('\x1b44m\x1b39m'),
        '\x1b[41m\x1b44m\x1b39m\x1b[49m',
        "Nested Background: Trap Type 4 - Not a Valid Style");
    a(t.bgRed('\x1b[44m\x1b[49m'),
        '\x1b[44m\x1b[49m',
        "Nested Background: Trap Type 5 - No Message Style");
    a(t.bgRed('\x1b[44m\x1b[49m\x1b[44mblue\x1b[49m'),
        '\x1b[44m\x1b[49m\x1b[44mblue\x1b[49m',
        "Nested Background: Trap Type 6 - No Message Style Before");
    a(t.bgRed('\x1b[44mblue\x1b[49m\x1b[44m\x1b[49m'),
        '\x1b[44mblue\x1b[49m\x1b[44m\x1b[49m',
        "Nested Background: Trap Type 7 - No Message Style After");
    a(t.bgRed('\x1b[44m\x1b[49m\x1b[44mblue\x1b[49m\x1b[44m\x1b[49m'),
        '\x1b[44m\x1b[49m\x1b[44mblue\x1b[49m\x1b[44m\x1b[49m',
        "Nested Background: Trap Type 8 - No Message Style Around");

    a(t.red('red ' + t.bgBlue('blue ')),
        '\x1b[31mred \x1b[44mblue \x1b[49m\x1b[39m',
        "Nested Foreground and Background: Two Levels Type 1");
    a(t.red('red ' + t.bgBlue('blue ') + t.white('white')),
        '\x1b[31mred \x1b[44mblue \x1b[49m\x1b[37mwhite\x1b[39m\x1b[39m',
        "Nested Foreground and Background: Two Levels Type 2");
    a(t.red('red ' + t.bgBlue('blue ') + 'red'),
        '\x1b[31mred \x1b[44mblue \x1b[49m\x1b[31mred\x1b[39m',
        "Nested Foreground and Background: Two Levels Type 3");
    a(t.bgBlue('blue ' + t.bgRed('red ' + t.whiteBright('white ') + 'red ') + 'blue'),
        '\x1b[44mblue \x1b[41mred \x1b[97mwhite \x1b[39m\x1b[41mred \x1b[49m\x1b[44mblue\x1b[49m',
        "Nested Foreground and Background: Two Levels Type 3");

    a(t.red.bgWhite('white ' + t.bgBlue('blue')),
        '\x1b[31;47mwhite \x1b[44mblue\x1b[49m\x1b[39;49m',
        "Nested Foreground and Background: Mixed Type 1");
    a(t.red.bgWhite('white ' + t.blue('blue')),
        '\x1b[31;47mwhite \x1b[34mblue\x1b[39m\x1b[39;49m',
        "Nested Foreground and Background: Mixed Type 2");
    a(t.red.bgWhite('white ' + t.blue('blue ') + 'white'),
        '\x1b[31;47mwhite \x1b[34mblue \x1b[39m\x1b[31;47mwhite\x1b[39;49m',
        "Nested Foreground and Background: Mixed Type 3");

    a(t.red.bgWhite('\x1bAred'),
        '\x1b[31;47m\x1bAred\x1b[39;49m',
        "Nested Foreground and Background: Trap Type 1 - Not a Style Before");
    a(t.red.bgWhite('red\x1bA'),
        '\x1b[31;47mred\x1bA\x1b[39;49m',
        "Nested Foreground and Background: Trap Type 2 - Not a Style After");
    a(t.red.bgWhite('\x1bAred\x1bA'),
        '\x1b[31;47m\x1bAred\x1bA\x1b[39;49m',
        "Nested Foreground and Background: Trap Type 3 - Not a Style Around");
    a(t.red.bgWhite('\x1b34m\x1b39m'),
        '\x1b[31;47m\x1b34m\x1b39m\x1b[39;49m',
        "Nested Foreground and Background: Trap Type 4 - Not a Valid Style");
    a(t.red.bgWhite('\x1b[34m\x1b[39m'),
        '\x1b[34m\x1b[39m',
        "Nested Foreground and Background: Trap Type 5 - No Message Style");
    a(t.red.bgWhite('\x1b[44m\x1b[49m'),
        '\x1b[44m\x1b[49m',
        "Nested Foreground and Background: Trap Type 6 - No Message Style");
    a(t.red.bgWhite('\x1b[44m\x1b[49m\x1b[44mblue\x1b[49m'),
        '\x1b[44m\x1b[49m\x1b[44mblue\x1b[49m',
        "Nested Foreground and Background: Trap Type 7 - No Message Style Before");
    a(t.red.bgWhite('\x1b[44mblue\x1b[49m\x1b[44m\x1b[49m'),
        '\x1b[44mblue\x1b[49m\x1b[44m\x1b[49m',
        "Nested Foreground and Background: Trap Type 8 - No Message Style After");
    a(t.red.bgWhite('\x1b[44m\x1b[49m\x1b[44mblue\x1b[49m\x1b[44m\x1b[49m'),
        '\x1b[44m\x1b[49m\x1b[44mblue\x1b[49m\x1b[44m\x1b[49m',
        "Nested Foreground and Background: Trap Type 9 - No Message Style Around");

	x = t.red;
	y = x.bold;

	a(x('foo', 'red') + ' ' + y('foo', 'boldred'),
		'\x1b[31mfoo red\x1b[39m \x1b[31;1mfoo boldred\x1b[39;22m',
		"Detached extension");

    if (t.xtermSupported) {
        a(t.xterm(12).bgXterm(67)('foo', 'xterm'),
            '\x1b[94;38;5;12;100;48;5;67mfoo xterm\x1b[39;49m', "Xterm");
        a(t.redBright.bgBlueBright.xterm(12).bgXterm(67)('foo', 'xterm'),
            '\x1b[94;38;5;12;100;48;5;67mfoo xterm\x1b[39;49m',
            "Xterm: Override & Bright");
        a(t.xterm(12).bgXterm(67).redBright.bgMagentaBright('foo', 'xterm'),
            '\x1b[91;105mfoo xterm\x1b[39;49m',
            "Xterm: Override & Bright #2");
    }
    else {
        a(t.xterm(12).bgXterm(67)('foo', 'xterm'),
            '\x1b[94;100mfoo xterm\x1b[39;49m', "Xterm");
        a(t.redBright.bgBlueBright.xterm(12).bgXterm(67)('foo', 'xterm'),
            '\x1b[94;100mfoo xterm\x1b[39;49m',
            "Xterm: Override & Bright");
        a(t.xterm(12).bgXterm(67).redBright.bgMagentaBright('foo', 'xterm'),
            '\x1b[91;105mfoo xterm\x1b[39;49m',
            "Xterm: Override & Bright #2");
    }

	a(typeof t.width, 'number', "Width");
	a(typeof t.height, 'number', "Height");

    a(typeof t.reset, 'string', "Reset");

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
