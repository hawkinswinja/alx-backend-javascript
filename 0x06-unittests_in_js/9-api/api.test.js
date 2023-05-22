const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('tests for if id is a number', function (done) {
    request('http://localhost:7865/12', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
    done();
  });
  it('tests for if id is not a number', function (done) {
    request('http://localhost:7865/hell', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
    });
    done();
  });
});
