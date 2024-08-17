import { Request, Response } from "express-serve-static-core";

export function getPageNotFoundErrorPage(req: Request, res: Response) {
  res.render('./pages/404', { title: '404 | Not Found' });
}
