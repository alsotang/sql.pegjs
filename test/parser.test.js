var should = require('should');
var parser = require('../');


describe('parser.test.js', function () {
  it('should parse `SELECT`', function () {
    var sql = 'SELECT * FROM users;';
    parser.parse(sql)
      .should.eql([{"stmt":"select","select_cores":[{"results":[{"column":"*"}],"from":[{"table":"users"}]}]}]);


    var sql = 'SELECT a.x AS foo, b.y, x.*, * FROM a.x, b.a, d.p, d1.a1 AS b1;';
    parser.parse(sql)
      .should.eql([
        {
          "stmt": "select",
          "select_cores": [
            {
              "results": [
                {
                  "table": "a",
                  "column": "x",
                  "alias": "foo"
                },
                {
                  "table": "b",
                  "column": "y"
                },
                {
                  "table": "x",
                  "column": "*"
                },
                {
                  "column": "*"
                }
              ],
              "from": [
                {
                  "database": "a",
                  "table": "x"
                },
                {
                  "join_constraint": null,
                  "database": "b",
                  "table": "a",
                  "join_op": "JOIN"
                },
                {
                  "join_constraint": null,
                  "database": "d",
                  "table": "p",
                  "join_op": "JOIN"
                },
                {
                  "join_constraint": null,
                  "database": "d1",
                  "table": "a1",
                  "alias": "b1",
                  "join_op": "JOIN"
                }
              ]
            }
          ]
        }
      ]);
  });

  it('should be case-insensitive', function () {
    var sql = 'sElEcT * FroM users;';
    parser.parse(sql)
      .should.eql([{"stmt":"select","select_cores":[{"results":[{"column":"*"}],"from":[{"table":"users"}]}]}]);
  });
});