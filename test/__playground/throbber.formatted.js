#!/usr/bin/env node

'use strict';

var throbber = require('../../lib/throbber')
  , interval = require('clock/lib/interval')
  , format   = require('../../lib/index').red;

var i = interval(100, true);

throbber(i, format);
process.stdout.write('START');

setTimeout(i.stop.bind(i), 500);
