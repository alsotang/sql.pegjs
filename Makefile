build: lib/sql.pegjs
	@./node_modules/.bin/pegjs lib/sql.pegjs lib/sqlparser.js

test:
	@./node_modules/.bin/mocha

.PHONY: build test