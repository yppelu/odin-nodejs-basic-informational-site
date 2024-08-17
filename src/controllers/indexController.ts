import { Request, Response } from "express-serve-static-core";

export function getIndexPage(req: Request, res: Response) {
  res.render('./pages/index', { title: 'Homepage' });
}
