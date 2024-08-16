import { ErrorRequestHandler, Request, Response, NextFunction } from 'express-serve-static-core';

export default function errorHandler(
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).send('500 | Internal Server Error');
}
