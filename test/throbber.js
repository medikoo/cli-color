'use strict';

var spawn = require('child_process').spawn
  , pg = __dirname + '/__playground'
  , initChars = '-\\|/';

module.exports = {
	"": function (a, d) {
		var t = spawn(pg + '/throbber.js')
		  , out = ""
		  , err = ""
		  , chars = initChars
		  , i, wrote = false
		  , watch = function () {
				setTimeout(function () {
					i = setInterval(function () {
						var expected = "";
						if (wrote) {
							expected += '\u0008';
						}
						wrote = true;
						expected += chars[0];
						chars = chars.slice(1);
						a(out, expected);
						out = "";
					}, 100);
				}, 50);
			},
		initialized = false;

		t.stdout.on('data', function (data) {
			if (!initialized) {
				initialized = true;
				watch();
			} else {
				out += data;
			}
		});
		t.stderr.on('data', function (data) {
			err += data;
		});
		t.on('exit', function () {
			clearInterval(i);
			a(err, "", "No stderr output"); d();
		});
	},
	"Formatted": function (a, d) {
		var t = spawn(pg + '/throbber.formatted.js')
		  , out = ""
		  , err = ""
		  , chars = initChars
		  , i, wrote = false
		  , watch = function () {
				setTimeout(function () {
					i = setInterval(function () {
						var expected = "";
						if (wrote) {
							expected += '\u0008';
						}
						wrote = true;
						expected += '\x1b[31m' + chars[0] + '\x1b[39m';
						chars = chars.slice(1);
						a(out, expected);
						out = "";
					}, 100);
				}, 50);
			},
		initialized = false;

		t.stdout.on('data', function (data) {
			if (!initialized) {
				initialized = true;
				watch();
			} else {
				out += data;
			}
		});
		t.stderr.on('data', function (data) {
			err += data;
		});
		t.on('exit', function () {
			clearInterval(i);
			a(err, "", "No stderr output"); d();
		});
	}
};
