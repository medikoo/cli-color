'use strict';

var d = require('d');

module.exports = Object.defineProperties(require('./bare'), {
	windowSize: d(require('./window-size')),
	erase: d(require('./erase')),
	move: d(require('./move')),
	beep: d(require('./beep')),
	columns: d(require('./columns')),
	trim: d(require('./trim')),
	throbber: d(require('./throbber'))
});
