'use strict';

var clc = require('../');

module.exports = function (t, a) {
	a(clc.trim(clc.red('raz') + 'dwa' + clc.bold('trzy')), 'razdwatrzy', "Colors");
	a(clc.trim(clc.xterm(202)('raz') + clc.bgXterm(230)('dwa')), "razdwa", "xTerm");
	a(clc.trim(clc.reset).trim(), '', "Reset");
	a(clc.trim(clc.moveTo(1, 32) + 'raz' + clc.bol(1) + 'dwa'), 'razdwa', "Move around");
};
