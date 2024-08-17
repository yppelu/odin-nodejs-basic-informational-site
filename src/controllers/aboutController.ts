import { Request, Response } from 'express-serve-static-core';

export function getAboutPage(req: Request, res: Response) {
  res.render('./pages/index', { title: 'About' });
}
