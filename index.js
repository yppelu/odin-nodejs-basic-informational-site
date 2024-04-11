const fs = require('fs');
const http = require('http');
const path = require('path');

const FILENAMES = fs.readdirSync(path.join(__dirname, 'pages'));
const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {
  const filePath = getFilePath(req.url);

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = (path.basename(filePath) === '404.html') ? 404 : 200;
      res.end(data);
    }
  });
}).listen(PORT);

function getFilePath(url) {
  if (url === '/' || url === '/home') {
    return path.join(__dirname, 'pages', 'index.html');
  }

  const filePath = path.join(__dirname, 'pages', url) + '.html';

  if (!FILENAMES.includes(path.basename(filePath))) {
    return path.join(__dirname, 'pages', '404.html');
  } else {
    return filePath;
  }
}
