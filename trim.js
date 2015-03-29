// Trim formatting from string

'use strict';

var r = /(?:(?:\x1b|\x9b)(?:\[(?:\d+|\d[\d;]*)?)?[a-zA-Z]|\x07)/g;

module.exports = function (str) { return str.replace(r, ''); };
