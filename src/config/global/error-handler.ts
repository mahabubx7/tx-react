import { BaseException } from '@/config/exceptions';
import { NextFunction, Request, Response } from 'express';
import { ValidateError } from 'tsoa';

export const globalErrHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ValidateError) {
    console.error(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: 'Invalid request!',
      error: err?.fields,
    });
  } else if (err instanceof BaseException) {
    return res.status(err.code).json({
      message: err.message,
      error: err.error || null,
    });
  } else {
    res.status(500).json({
      message: 'Something went wrong!',
    });
  }

  next();
};

export const notFound404Handler = (req: Request, res: Response) => {
  return res.status(404).json({
    message: 'Not Found',
    error: {
      path: req.path,
      method: req.method,
    },
  });
};
