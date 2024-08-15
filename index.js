import express from 'express';

import middleware from './helpers/middleware.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.get(['/', '/home', '/about', '/contact-me'], middleware);
app.get('*', (req, res) => {
  res.statusCode = 404;
  middleware(req, res);
});

app.listen(PORT);
