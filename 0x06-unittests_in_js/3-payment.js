const Utils = require('./utils');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log('The total is:', new Utils().calculateNumber('SUM', totalAmount, totalShipping));
};
