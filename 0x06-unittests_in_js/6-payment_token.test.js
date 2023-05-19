const token = require('./6-payment_token')(true);
const assert = require('assert');

describe('asynchronous call', function () {
  it('resolves a promise', function (done) {
    token.then((val) => {
      assert.equal(val.get('data'), 'Successful response from the API');
    });
    done();
  });
});
