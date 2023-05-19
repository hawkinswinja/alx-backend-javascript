const http = require('http');

const data = require('./read_file');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      data.then((val) => {
        res.end(`This is the list of our students\n${val.join('\n')}`);
      }).catch((e) => {
        res.end(`This is the list of our students\n${e}`);
      });
      break;
    default:
      res.end();
  }
});

app.listen(1245, '127.0.0.1');
module.exports = { app, data };
