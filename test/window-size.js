'use strict';

module.exports = function (t, a) {
	a(typeof t.width, 'number', "Width");
	a(typeof t.height, 'number', "Height");
};
