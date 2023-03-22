import divideFunction from './8-try.js';

console.log(divideFunction(10, 2));
try {
  divideFunction(10, 0);
} catch (res) {
  console.log(res.message);
};
