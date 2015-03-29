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

// Colors test.
w('  COLORS TESTS\n');
printColors('FOREGROUNDS (DEFAULT)', 'foreground');
printColors('FOREGROUNDS (BRIGHT) ', 'foregroundBright');
printColors('BACKGROUNDS (DEFAULT)', 'background');
printColors('BACKGROUNDS (BRIGHT) ', 'backgroundBright');
w('\n');
