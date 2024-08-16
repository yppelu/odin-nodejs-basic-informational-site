import path from 'path';
import { Request, Response } from 'express-serve-static-core';

export function getContactMePage(req: Request, res: Response) {
  res.sendFile(path.join(__dirname, '..', '..', 'pages', 'contact-me.html'));
}
