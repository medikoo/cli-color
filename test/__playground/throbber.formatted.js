#!/usr/bin/env node

'use strict';

var setupThrobber = require('../../lib/throbber')
  , format       = require('../../lib/index').red

  , throbber = setupThrobber(process.stdout.write.bind(process.stdout), 200, format);

process.stdout.write('START');
throbber.start();
setTimeout(throbber.stop, 1100);
