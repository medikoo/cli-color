'use strict';

var clc = require("../index.js");

module.exports = function (c, a) {
	a(c([]), '\n', "Empty #1");
	a(c([ [], [], [] ]), '\n\n\n', "Empty #2");

	a(c([ [ "A", "BC", "DEF" ] ]),
		'A | BC | DEF\n',
		"Header Only");

	a(c([ [ "A", "BC", "DEF" ], [ 1, 23, 456 ] ]),
		'A | BC | DEF\n1 | 23 | 456\n',
		"Small items");
	a(c([ [ "A", "BC", "DEF" ], [ 12, 234, 4567 ] ]),
		'A  | BC  | DEF \n12 | 234 | 4567\n',
		"Large items");
	a(c([ [ "A", "BC", "DEF" ], [ 1234, 23456, 456789 ] ]),
		'A    | BC    | DEF   \n1234 | 23456 | 456789\n',
		"Very large items");

	a(c([ [ "A" ], [ 1 ], [ 23 ], [ 456 ] ]),
		'A  \n1  \n23 \n456\n',
		"Single column");

	a(c([ [ "ID" ], [ 1 ], [ 1, 23 ], [ 1, 23, 456 ] ]),
		'ID\n1 \n1  | 23\n1  | 23 | 456\n',
		"Force columns");

	a(c([ [ "ID" ], [ "", "" ], [ 123, 123 ] ]),
		'ID \n    |    \n123 | 123\n',
		"Empty cells");
}