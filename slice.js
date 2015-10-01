'use strict';

var reAnsi        = require('ansi-regex')
  , stringifiable = require('es5-ext/object/validate-stringifiable')
  , length        = require('./get-stripped-length')
  , assign        = require('es5-ext/object/assign')
  , sgr           = require('./lib/sgr');

var Token = function Token(token) {
	this.token = token;
};

var tokenize = function (str) {
	var match = reAnsi().exec(str);

	if (!match) {
		return [ str ];
	}

	var index = match.index
	  , head, prehead, tail;

	if (index === 0) {
		head = match[0];
		tail = str.slice(head.length);

		return [ new Token(head) ].concat(tokenize(tail));
	}

	prehead = str.slice(0, index);
	head = match[0];
	tail = str.slice(index + head.length);

	return [ prehead, new Token(head) ].concat(tokenize(tail));
};

var isChunkInSlice = function (chunk, index, begin, end) {
	var endIndex = chunk.length + index;

	if (begin > endIndex) return false;
	if (end < index) return false;
	return true;
};

var sliceSeq = function (seq, begin, end) {
	var sliced = seq.reduce(function (state, chunk) {
		var index = state.index;

		if (!(chunk instanceof Token)) {
			var nextChunk = '';

			if (isChunkInSlice(chunk, index, begin, end)) {
				var relBegin = Math.max(begin - index, 0)
				  , relEnd   = Math.min(end - index, chunk.length);

				nextChunk = chunk.slice(relBegin, relEnd);
			}

			state.seq.push(nextChunk);
			state.index = index + chunk.length;
		} else {
			var code = sgr.extractCode(chunk.token);

			if (index < begin) {
				if (code in sgr.openers) {
					sgr.openStyle(state.preOpeners, code);
				}
				if (code in sgr.closers) {
					sgr.closeStyle(state.preOpeners, code);
				}
			} else if (index <= end) {
				if (code in sgr.openers) {
					sgr.openStyle(state.inOpeners, code);
					state.seq.push(chunk);
				} else if (code in sgr.closers) {
					state.inClosers.push(code);
					state.seq.push(chunk);
				}
			}
		}

		return state;
	}, {
		index: 0,
		seq: [],

		// preOpeners -> { mod }
		// inOpeners  -> { mod }
		// closers    -> [ code ]
		preOpeners: {}, // opener CSI before slice begin
		inOpeners:  {}, // opener CSI inside slice
		inClosers:  []
	});

	sliced.seq = [].concat(
		sgr.prepend(sliced.preOpeners),
		sliced.seq,
		sgr.complete(assign({}, sliced.preOpeners, sliced.inOpeners), sliced.inClosers)
	);

	return sliced.seq;
};

module.exports = function (str, begin, end) {
	var seq, len;

	str = stringifiable(str);
	len = length(str);

	if (begin == null) {
		begin = 0;
	}
	if (end == null) {
		end = len;
	}
	if (begin < 0) {
		begin = len + begin;
	}
	if (end < 0) {
		end = len + end;
	}

	seq = tokenize(str);
	seq = sliceSeq(seq, begin, end);
	return seq.map(function (chunk) {
		if (chunk instanceof Token) {
			return chunk.token;
		}

		return chunk;
	}).join('');
};
