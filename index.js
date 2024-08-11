import http from 'http';
import fs from 'fs/promises';
import path from 'path';

function middleware(req, res) {
  if (req.method !== 'GET') {
    handleUnauthorized(req, res);
  } else {
    handleSendData(req, res);
  }
}

function handleUnauthorized(req, res) {
  res.writeHead(401, { 'Content-Type': 'text/html' });
  res.write('<h1>Method not allowed</h1>');
  res.end();
}

function handleSendData(req, res) {
  let pathToFile = path.join(import.meta.dirname, 'pages');
  switch (req.url) {
    case '/':
      pathToFile = path.join(pathToFile, 'index.html');
      break;
    case '/about':
      pathToFile = path.join(pathToFile, 'about.html');
      break;
    case '/contact-me':
      pathToFile = path.join(pathToFile, 'contact-me.html');
      break;
    default:
      pathToFile = path.join(pathToFile, '404.html');
      break;
  }

  fs.readFile(pathToFile)
    .then((data) => {
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = (pathToFile.slice(-8) === '404.html') ? 404 : 200;
      res.end(data);
    })
    .catch((error) => {
      res.writeHead(500, { 'Content-type': 'text/plain' });
      res.end('Server error');
    });
}

http.createServer(middleware).listen(8080);
