'use strict';

var clc = require('../../index.js')

  , colors = [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white' ];

// Write some message.
function w(message) {
	process.stdout.write(message);
}

// Print colors.
function printColors(title, style) {
	var j = colors.length
	  , color
	  , colorText
	  , tint
	  , i;

	w('  > ' + clc.whiteBright(title) + ' ');
	for (i = 0; i < j; i++) {
		tint = clc;
		color = colors[i];
		colorText = color.toUpperCase();

		if (style === 'foreground') {
			tint = tint[color];

			if (color === 'black') {
				tint = tint.bgBlackBright;
			}
		}

		if (style === 'foregroundBright') {
			tint = tint[color + 'Bright'];
		}

		if (style === 'background') {
			tint = tint['bg' + color.slice(0, 1).toUpperCase() + color.slice(1)];

			if (color === 'white') {
				tint = tint.whiteBright;
			}
		}

		if (style === 'backgroundBright') {
			tint = tint['bg' + color.slice(0, 1).toUpperCase() + color.slice(1) + 'Bright'];
		}

		w(tint(colorText) + ' ');
	}
	w('\n');
}

// Smile test.
w(clc.reset);
w('\n  SMILE TEST\n\n');

// Yellow face.
w(clc("      "));
w(clc.bgYellowBright("     "));
w(clc("\n"));
w(clc("     "));
w(clc.bgYellowBright("       "));
w(clc("\n"));
w(clc("    "));
w(clc.bgYellowBright("         "));
w(clc("\n"));
w(clc("    "));
w(clc.bgYellowBright("         "));
w(clc("\n"));
w(clc("     "));
w(clc.bgYellowBright("       "));
w(clc("\n"));
w(clc("      "));
w(clc.bgYellowBright("     "));
w(clc("\n"));

// Move blue eyes.
w(clc.move(7, -5));
w(clc.blueBright.bgYellowBright("O"));
w(clc.move(1, 0));
w(clc.blueBright.bgYellowBright("O"));

// Red nose.
w(clc.moveTo(8, 5));
w(clc.redBright.bgYellowBright("\u25A0"));

// Red mouth.
w(clc.down(2));
w(clc.left(2));
w(clc.red.bgYellowBright("\u2588\u2584\u2588"));

// Move back.
w(clc.moveTo(0, 8));

// Colors test.
w('\n\n  COLORS TESTS\n');
printColors('FOREGROUNDS (DEFAULT)', 'foreground');
printColors('FOREGROUNDS (BRIGHT) ', 'foregroundBright');
printColors('BACKGROUNDS (DEFAULT)', 'background');
printColors('BACKGROUNDS (BRIGHT) ', 'backgroundBright');
w('\n');
