import { Request, Response } from 'express-serve-static-core';

export function getContactMePage(req: Request, res: Response) {
  res.render('./pages/index', { title: 'Contact Me' });
}
