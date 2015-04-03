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

	a(t.blue.bgYellow('foo', 'bar'), '\x1b[43m\x1b[34mfoo bar\x1b[39m\x1b[49m',
		"Foreground & Background");
	a(t.blue.bgYellow.red.bgMagenta('foo', 'bar'),
		'\x1b[45m\x1b[31mfoo bar\x1b[39m\x1b[49m',
		"Foreground & Background: Overriden");

	a(t.bold('foo', 'bar'), '\x1b[1mfoo bar\x1b[22m', "Format");
	a(t.blink('foobar'), '\x1b[5mfoobar\x1b[25m', "Format: blink");
	a(t.bold.blue('foo', 'bar', 3), '\x1b[1m\x1b[34mfoo bar 3\x1b[39m\x1b[22m',
		"Foreground & Format");

	a(t.redBright('foo', 'bar'), '\x1b[91mfoo bar\x1b[39m', "Bright");
	a(t.bgRedBright('foo', 3), '\x1b[101mfoo 3\x1b[49m', "Bright background");

	a(t.blueBright.bgYellowBright.red.bgMagenta('foo', 'bar'),
		'\x1b[45m\x1b[31mfoo bar\x1b[39m\x1b[49m',
		"Foreground & Background: Bright: Overriden");

	x = t.red;
	y = x.bold;

	a(x('foo', 'red') + ' ' + y('foo', 'boldred'),
		'\x1b[31mfoo red\x1b[39m \x1b[1m\x1b[31mfoo boldred\x1b[39m\x1b[22m',
		"Detached extension");

	if (t.xtermSupported) {
		a(t.xterm(12).bgXterm(67)('foo', 'xterm'),
			'\x1b[48;5;67m\x1b[38;5;12mfoo xterm\x1b[39m\x1b[49m', "Xterm");

		a(t.redBright.bgBlueBright.xterm(12).bgXterm(67)('foo', 'xterm'),
			'\x1b[48;5;67m\x1b[38;5;12mfoo xterm\x1b[39m\x1b[49m',
			"Xterm: Override & Bright");
		a(t.xterm(12).bgXterm(67).redBright.bgMagentaBright('foo', 'xterm'),
			'\x1b[105m\x1b[91mfoo xterm\x1b[39m\x1b[49m',
			"Xterm: Override & Bright #2");
	} else {
		a(t.xterm(12).bgXterm(67)('foo', 'xterm'),
			'\x1b[100m\x1b[94mfoo xterm\x1b[39m\x1b[49m', "Xterm");
	}
};
