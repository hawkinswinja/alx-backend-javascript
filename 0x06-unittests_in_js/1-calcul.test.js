const assert  = require('assert');
const calculate = require('./1-calcul');
describe('calculateNumber',function() {
  describe('type SUM', function() {
    it('checks the sum function', function () {
      assert.equal(calculate('SUM', 1.5, 1), 3);
    });
  });
  describe('type SUBTRACT', function() {
    it('checks the SUBTRACT value', function () {
      assert.equal(calculate('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe('type DIVIDE', function() {
    it('checks the divide call', function () {
      assert.equal(calculate('DIVIDE', 1.4, 4.5), 0.2);
    });
  });
  describe('type DIVIDE and Zero error', function() {
    it('checks the zero error in DIVIDE', function () {
      assert.equal(calculate('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
