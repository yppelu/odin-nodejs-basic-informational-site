import express from 'express';

import getPathToPageFile from './helpers/getPathToPageFile.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.get(['/', '/home'], middleware);

app.get('/about', middleware);

app.get('/contact-me', middleware);

app.get('*', (req, res) => {
  res.statusCode = 404;
  middleware(req, res);
});

app.listen(PORT);

function middleware(req, res) {
  const pathToPageFile = getPathToPageFile(req.url);

  res.sendFile(pathToPageFile, (error) => {
    if (error) res.send('Sorry, an error has occurred.');
  });
}
