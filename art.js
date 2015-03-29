'use strict';

var commentMatch = /\/\*\*?\r?\n?([\s\S]+?)\*\//
  , functionExtract = function (/*func*/) {
	var functionComment = arguments[0].toString().match(commentMatch);
	return functionComment ? functionComment[1] : '';
};

module.exports = function (/*text, style*/) {
	var text = typeof arguments[0] === 'function' ? functionExtract(arguments[0]) : arguments[0]
	  , style = arguments[1] || {};
	return text.replace(/\S/g, function (match) {
		return style[match[0]] || match[0];
	});
};
