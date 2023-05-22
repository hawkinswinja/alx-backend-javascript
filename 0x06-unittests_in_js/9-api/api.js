const app = require('express')();

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  if (req.params.id !== /\d+/) res.status(404);
  res.end('Welcome to the payment system');
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
