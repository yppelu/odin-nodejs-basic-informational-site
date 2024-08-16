import path from 'path';
import { Request, Response } from "express-serve-static-core";

export function getPageNotFoundErrorPage(req: Request, res: Response) {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'pages', '404.html'));
}
