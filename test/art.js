'use strict';

var clc = require("../index.js");

module.exports = function (r, a) {
	a(r('ooo', { o: clc.yellow("x") }),
		'\x1b[33mx\x1b[39m\x1b[33mx\x1b[39m\x1b[33mx\x1b[39m',
		"Basic art");

	a(r('oyo', { o: clc.yellow("x") }),
		'\x1b[33mx\x1b[39my\x1b[33mx\x1b[39m',
		"Free text art");
	a(r('o o', { o: clc.yellow("x") }),
		'\x1b[33mx\x1b[39m \x1b[33mx\x1b[39m',
		"Spaced art");

	a(r('<=>', { "<": clc.yellow("<"), ">": clc.yellow(">") }),
		'\x1b[33m<\x1b[39m=\x1b[33m>\x1b[39m',
		"Symbol art");

	a(r('o\no', { o: clc.yellow("x") }),
		'\x1b[33mx\x1b[39m\n\x1b[33mx\x1b[39m',
		"Multiline art");

	a(r('ooo', {}),
		'ooo',
		"Only text art");

	a(r(function () { /**ooo*/ }, { o: clc.yellow("x") }),
		'\x1b[33mx\x1b[39m\x1b[33mx\x1b[39m\x1b[33mx\x1b[39m',
		"Function comment art");
	a(r(function () { /**
		ooo */
	}, { o: clc.yellow("x") }),
		'\t\t\x1b[33mx\x1b[39m\x1b[33mx\x1b[39m\x1b[33mx\x1b[39m ',
		"Function multiline comment art");

	a(r(function () {}, {}),
		'',
		"Empty function");
	a(r(function () { a("invalid"); }, {}),
		'',
		"Invalid function");
};
