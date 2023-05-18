const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function () {
  const spy = sinon.spy(Utils, 'calculateNumber');
  sendPaymentRequestToApi(100, 20);
  it('validate the Util module is used', function () {
    expect(spy.called).to.be.true;
  });
  it('verify Util.calculateNumber is used', function () {
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
  spy.restore();
});
