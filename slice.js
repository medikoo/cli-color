'use strict';

var stringSlice = ''.slice
  , stringifiable = require('es5-ext/object/validate-stringifiable');

module.exports = function (str, begin, end) {
	str = stringifiable(str);

	/* naive */
	return stringSlice.call(str, begin, end);
};
