import { Response, NextFunction } from "express";
import { ExtendedRequest } from "../interfaces/general";

class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: CustomError,
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 505;
  const error = {
    request_id: req.id,
    message: err.message,
  };

  console.error(error);
  res.status(statusCode).json({ error });
};
