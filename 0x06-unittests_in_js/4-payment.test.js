const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function () {
  it('verify the passed arguments', function () {
    const stub = sinon.stub(Utils, 'calculateNumber');
    const spy = sinon.spy(console, 'log');
    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.withArgs('SUM', 100, 20).called).to.be.true;
    expect(spy.callWith('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });
});
