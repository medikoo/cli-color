SHELL = bash

install:
	npm install

# lint:
# 	find lib -name "*.js" -print0 | xargs -0 ./node_modules/jslint/bin/jslint.js -confusion -predef exports,module,require,process -white

# lint-tests:
# 	find test -name "*.js" -print0 | xargs -0 ./node_modules/jslint/bin/jslint.js -nomen -predef __dirname,exports,module,require,process -white

# test:
# 	npm test

# test-cov:
# 	./node_modules/expresso/bin/expresso -c -q test/expresso.js

.PHONY: install lint lint-tests test test-cov
