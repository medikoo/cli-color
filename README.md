# cli-color - Yet another console color package.

Colors and formatting for the console. This package won't mess with built-ins and provides neat way to predefine color patterns, see below.

## Installation

	$ npm install cli-color

## Usage

Usage:

	var clc = require('cli-color');

Output colored text:

	console.log(clc.red('Text in red'));

Styles can be mixed:

	console.log(clc.red.bgWhite.underline('Underlined red text on white background.'));

Styled text can be mixed with unstyled:

	console.log(clc.red('red') + ' plain ' + clc.blue('blue'));

__Best way is to predefine needed stylings and then use it__:

	var error = clc.red.bold;
	var warn = clc.yellow;
	var notice = clc.blue;

	console.log(error('Error!'));
	console.log(warn('Warning'));
	console.log(notice('Notice'));


Supported are all ANSI colors and styles:

### Styles

Styles will display correctly if font used in your console supports them.

* bold
* italic
* underline
* inverse
* strike

### Foreground colors

* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white

### Background colors

* bgBlack
* bgRed
* bgGreen
* bgYellow
* bgBlue
* bgMagenta
* bgCyan
* bgWhite
