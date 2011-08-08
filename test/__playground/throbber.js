#!/usr/bin/env node

'use strict';

var throbber = require('../../lib/throbber')
  , interval = require('clock/lib/interval');

var i = interval(100, true);

throbber(i);
process.stdout.write('START');

setTimeout(i.stop.bind(i), 500);
