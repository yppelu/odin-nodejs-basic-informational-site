import express from 'express';
import indexRouter from './routes/indexRouter';
import aboutRouter from './routes/aboutRouter';
import contactMeRouter from './routes/contactMeRouter';
import pageNotFoundErrorRouter from './routes/pageNotFoundRouter';
import errorHandler from './middleware/errorHandler';

const PORT = 3000;
const app = express();

app.use('^/$|/index(.html)?', indexRouter);
app.use('/about(.html)?', aboutRouter);
app.use('/contact-me(.html)?', contactMeRouter);
app.use('*', pageNotFoundErrorRouter);

app.use(errorHandler);

app.listen(PORT);
