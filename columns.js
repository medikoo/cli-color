'use strict';

var from          = require('es5-ext/array/from')
  , iterable      = require('es5-ext/iterable/validate-object')
  , stringifiable = require('es5-ext/object/validate-stringifiable')
  , repeat        = require('es5-ext/string/#/repeat')
  , strip         = require('./strip');

module.exports = function (rows/*, options*/) {
	var options = Object(arguments[1]), cols = [];
	return from(iterable(rows), function (row, index) {
		return from(iterable(row), function (str, index) {
			var col = cols[index], strLength;
			if (!col) col = cols[index] = { width: 0 };
			str = stringifiable(str);
			strLength = strip(str).length;
			if (strLength > col.width) col.width = strLength;
			return { str: str, length: strLength };
		});
	}).map(function (row) {
		return row.map(function (item, index) {
			var pad = repeat.call(' ', cols[index].width - item.length);
			return item.str + pad;
		}).join((options.sep == null) ? ' | ' : options.sep);
	}).join('\n') + '\n';
};
