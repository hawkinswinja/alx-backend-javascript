const app = require('express')();
const data = require('./read_file');

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  data.then((val) => {
    res.end(`This is the list of our students\n${val.join('\n')}`);
  }).catch(() => {
    res.writeHead(500);
    res.end(`This is the list of our students
Cannot load the database`);
  });
});
app.listen(1245, () => {});
module.exports = app;
