"use strict";

module.exports = function (t, a) {
	var regex = t;

	a(typeof regex, "function");

	var instance = regex();

	a(instance instanceof RegExp, true);

	a(instance.global, true);
};
