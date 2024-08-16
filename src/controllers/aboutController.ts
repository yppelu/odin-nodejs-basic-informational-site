import path from 'path';
import { Request, Response } from 'express-serve-static-core';

export function getAboutPage(req: Request, res: Response) {
  res.sendFile(path.join(__dirname, '..', '..', 'pages', 'about.html'));
}
