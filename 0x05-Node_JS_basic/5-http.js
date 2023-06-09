const http = require('http');

const data = require('./read_file');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break;
    case '/students':
      data.then((val) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${val.join('\n')}`);
      }).catch(() => {
        res.writeHead(500);
        res.end(`This is the list of our students
Cannot load the database`);
      });
      break;
    default:
      res.end();
  }
});

app.listen(1245, '127.0.0.1');
module.exports = app;
