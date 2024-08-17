import { Request, Response } from "express-serve-static-core";

export function getPageNotFoundErrorPage(req: Request, res: Response) {
  res.render('./404.ejs');
}
