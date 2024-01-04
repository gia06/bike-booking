import { NextFunction, RequestHandler, Response } from "express";
import { ExtendedRequest } from "../../interfaces/general";
import { validationResult } from "express-validator";

export const handleValidations: RequestHandler = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return next();
  }

  return res.status(400).json({ errors: result.array() });
};
