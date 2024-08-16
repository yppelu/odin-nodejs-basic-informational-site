import { Router } from 'express';
import { getIndexPage } from '../controllers/indexController';

const indexRouter = Router();

indexRouter.get('/', getIndexPage);
indexRouter.get(['/homepage', '/home'], (req, res) => {
  res.status(301).redirect('/');
});

export default indexRouter;
