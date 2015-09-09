'use strict';

var reAnsi        = require('ansi-regex')
  , stringifiable = require('es5-ext/object/validate-stringifiable')
  , length        = require('./get-stripped-length');

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

function tokenize(str) {
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
}

function Token(token) {
	this.token = token;
}

function sliceSeq(seq, begin, end) {
	return seq.reduce(function (state, chunk) {
		if (!(chunk instanceof Token)) {
			var index = state.index
			  , nextChunk = '';

			if (isChunkInSlice(chunk, index, begin, end)) {
				var relBegin = Math.max(begin - index, 0)
				  , relEnd   = Math.min(end - index, chunk.length);

				nextChunk = chunk.slice(relBegin, relEnd);
			}

			state.seq.push(nextChunk);
			state.index = index + chunk.length;
		} else {
			state.seq.push(chunk);
		}

		return state;
	}, {
		index: 0,
		seq: []
	}).seq;
}

function isChunkInSlice(chunk, index, begin, end) {
	var endIndex = chunk.length + index;

	if (begin > endIndex) return false;
	if (end < index) return false;
	return true;
}