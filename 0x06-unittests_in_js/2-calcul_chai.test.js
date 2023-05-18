const expect  = require('chai').expect;
const calculate = require('./2-calcul_chai');
describe('calculateNumber',function() {
  describe('type SUM', function() {
    it('checks the sum function', function () {
      expect(calculate('SUM', 1.5, 1)).to.equal(3);
    });
  });
  describe('type SUBTRACT', function() {
    it('checks the SUBTRACT value', function () {
      expect(calculate('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });
  describe('type DIVIDE', function() {
    it('checks the divide call', function () {
      expect(calculate('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
  describe('type DIVIDE and Zero error', function() {
    it('checks the zero error in DIVIDE', function () {
      expect(calculate('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
