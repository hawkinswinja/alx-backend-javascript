const request = require('request');
const assert = require('assert');

describe('Index page', () => {
  it('tests for the accuracy of the page', function () {
    request('http://localhost:7865', (err, resp, body) => {
      assert.equal(resp.statusCode, 200);
      assert.equal(body, 'Welcome to the payment system');
    });
  });
});
