# sql.pegjs

This project is a SQL parser based on PEG([parsing expression grammar](http://en.wikipedia.org/wiki/Parsing_expression_grammar)).

And the `sql.pegjs` file is modified from [https://github.com/steveyen/sqld3](https://github.com/steveyen/sqld3).

Thanks for the effort of @steveyen.

## Usage

```js
var parser = require('sql.pegjs');
var sql = 'select * from users;';
parser.parse(sql)
// => [{"stmt":"select","select_cores":[{"results":[{"column":"*"}],"from":[{"table":"users"}]}]}]);

```


## How to contribute

1. modify `lib/sql.pegjs` and add tests.

1. run `make build`

1. then run `make test`

## License

MIT