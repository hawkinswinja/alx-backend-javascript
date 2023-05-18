const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function () {
  let spy;
  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });
  afterEach(function () {
    spy.restore();
  });
  it('test case 1', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
  it('test case 2', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
