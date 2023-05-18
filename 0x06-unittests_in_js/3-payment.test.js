const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function () {
  const object =  new utils();
  const spy = sinon.spy(object, 'calculateNumber');
  sendPaymentRequestToApi(100, 20);
  it('validate the Util module is used', function () {
    expect(spy.called);
  });
  it('verify Util.calculateNumber is used', function () {
    expect(spy.withArgs('SUM', 100, 20).called);
  });
  spy.restore();
});
