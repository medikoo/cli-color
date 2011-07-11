# cli-color - Yet another color package for console output.

What's wrong with the others ? Awesome ones mess with built-ins, less awesome seem too verbose in use. This one aims to be both safe and neat.

## Installation

	$ npm install cli-color

## Usage

Usage:

	var ccolor = require('cli-color');

Output colored text:

	color.log(ccolor.red('Text in red'));

Styles can be mixed:

	color.log(ccolor.red.bgWhite.underline('Underlined red text on white background.'));

Best way is to preset needed stylings and then use it:

	var error = ccolor.red.bold;
	var warn = ccolor.yellow;
	var notice = ccolor.blue;

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
