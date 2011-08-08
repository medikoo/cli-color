'use strict';

var write    = process.stdout.write.bind(process.stdout)
  , sequence = require('es5-ext/lib/Function/sequence').call

  , chars    = '-\\|/'
  , l        = chars.length
  , p;

p = {
	next: 0,
	write: write,
	throbbed: false,
	ontick: function () {
		if (this.throbbed) {
			write('\u0008');
		} else {
			this.throbbed = true;
		}
		this.write(chars[this.next++%l]);
	},
	onstop: function () {
		if (this.throbbed) {
			write('\u0008');
			this.next = 0;
			this.throbbed = false;
		}
	}
};

module.exports = function (interval, formatting) {
	var o = Object.create(p);
	if (formatting) {
		o.write = sequence(formatting, write);
	}
	interval.on('tick', o.ontick.bind(o));
	interval.on('stop', o.onstop.bind(o));
};
