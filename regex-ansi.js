"use strict";

module.exports = function () {
	// ANSI Codes - borrowed from ansi-regex package
	var ansiPattern =
		"[\\u001B\\u009B][[\\]()#;?]" +
		"*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]" +
		"+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)" +
		"|" +
		"(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))";

	return new RegExp(ansiPattern, "g");
};
