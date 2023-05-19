const token = require('./6-payment_token')(true);
const assert = require('assert');

describe('asynchronous call', function () {
  it('resolves a promise', function (done) {
    token.then((val) => {
      done();
    }).catch ((e) => {
      done(e);
    });
  });
});
