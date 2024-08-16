import { Router } from 'express';
import { getPageNotFoundErrorPage } from '../controllers/pageNotFoundErrorController';

const pageNotFoundErrorRouter = Router();

pageNotFoundErrorRouter.get('/', getPageNotFoundErrorPage);

export default pageNotFoundErrorRouter;
