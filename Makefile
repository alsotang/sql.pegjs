build: lib/sql.pegjs
	@pegjs lib/sql.pegjs lib/sqlparser.js

test:
	@./node_modules/.bin/mocha

.PHONY: build test