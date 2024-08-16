import { Router } from 'express';
import { getContactMePage } from '../controllers/contactMeController';

const contactMeRouter = Router();

contactMeRouter.get('/', getContactMePage);

export default contactMeRouter;
