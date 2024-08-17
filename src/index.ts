import path from 'node:path';
import express from 'express';

import indexRouter from './routes/indexRouter';
import aboutRouter from './routes/aboutRouter';
import contactMeRouter from './routes/contactMeRouter';
import pageNotFoundErrorRouter from './routes/pageNotFoundRouter';
import errorHandler from './middleware/errorHandler';
import { footerData } from './consts/html-template-data';

const PORT = 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.locals.footerData = footerData;

app.use('^/$|/index(.html)?', indexRouter);
app.get(['/homepage', '/home'], (req, res) => {
  res.status(301).redirect('/');
});

app.use('/about(.html)?', aboutRouter);
app.use('/contact-me(.html)?', contactMeRouter);
app.use('*', pageNotFoundErrorRouter);

app.use(errorHandler);

app.listen(PORT);
