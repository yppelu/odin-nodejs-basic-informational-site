import { Router } from 'express';
import { getAboutPage } from '../controllers/aboutController';

const aboutRouter = Router();

aboutRouter.get('/', getAboutPage);

export default aboutRouter;
