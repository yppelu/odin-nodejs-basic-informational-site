import path from 'path';
import { Request, Response } from "express-serve-static-core";

export function getIndexPage(req: Request, res: Response) {
  res.sendFile(path.join(__dirname, '..', '..', 'pages', 'index.html'));
}
