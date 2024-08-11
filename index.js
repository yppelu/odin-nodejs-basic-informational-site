import http from 'http';
import fs from 'fs/promises';

import getPathToFile from './helpers/getPathToFile.js';

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
  const pathToFile = getPathToFile(req.url);

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
