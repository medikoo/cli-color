'use strict';

var d   = require('d')
  , tty = require('tty');

Object.defineProperties(exports, {
	width: d.gs('ce', process.stdout.getWindowSize ? function () {
		return process.stdout.getWindowSize()[0];
	} : function () {
		return tty.getWindowSize ? tty.getWindowSize()[1] : 0;
	}),
	height: d.gs('ce', process.stdout.getWindowSize ? function () {
		return process.stdout.getWindowSize()[1];
	} : function () {
		return tty.getWindowSize ? tty.getWindowSize()[0] : 0;
	})
});
