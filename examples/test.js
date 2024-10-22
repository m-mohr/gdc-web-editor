const assert = require('assert');
const PgParser = require('@openeo/js-client/src/ogc/parser');

const tests = ['gnosis', 'whu'];

for(let name of tests) {
  const openeo = require(`./openeo/${name}.json`);
  const expected = require(`./ogcapi/${name}.json`);

  console.group(name);

  const pg = new PgParser(openeo, 'https://example.com');
  const ogcapi = pg.parse();
  const jsonified = JSON.parse(JSON.stringify(ogcapi));

  assert.deepEqual(jsonified, expected);

  console.groupEnd();
}
