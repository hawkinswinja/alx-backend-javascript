import readDatabase from './utils.js';

readDatabase(process.argv[2])
.then((val) => {
  console.log(val.CS, val.CS.length);
  console.log(val.SWE, val.SWE.length);
})
.catch((e) => {
  console.log(e);
});

