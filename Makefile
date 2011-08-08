SHELL = bash

install:
	npm install

test:
	./node_modules/tad/bin/tad lib

.PHONY: install test
