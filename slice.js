'use strict';

var stringSlice = ''.slice
  , stringifiable = require('es5-ext/object/validate-stringifiable')
  , ReAnsi        = require('ansi-regex');

module.exports = function (str, begin, end) {
	str = stringifiable(str);

	var seq = tokenize(str);
	return str;
};

function tokenize(str) {
	var reAnsi = ReAnsi()
	var match = reAnsi.exec(str);

	if (! match)
	{
		return [ str ]
	}
	else
	{
		var index = match.index
		if (index === 0)
		{
			var head = match[0]
			var tail = str.slice(head.length)

			return [ new Token(head) ].concat(tokenize(tail))
		}
		else
		{
			var prehead = str.slice(0, index)
			var head = match[0]
			var tail = str.slice(index + head.length)

			return [ prehead, new Token(head) ].concat(tokenize(tail))
		}
	}
}

function Token (token)
{
	this.token = token;
}
