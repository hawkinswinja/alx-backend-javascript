const assert  = require('assert');
const add = require('./0-calcul');
describe('calculateNumber',function() {
  it('checks the sum of non-decimal and decimal', function () {
    assert.equal(add(1.5, 1), 3);
  });
  it('checks the sum value of decimals to whole number', function () {
    assert.equal(add(2.8, 3.2), 6);
  });
  it('checks the sum value of decimal and non decimal to whole number', function () {
    assert.equal(add(0.35, 10), 10);
  });
  it('checks the sum value of non-decimals to whole number', function () {
    assert.equal(add(4, 3), 7);
  });
});
