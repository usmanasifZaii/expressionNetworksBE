import { body, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export const createValidator = () => {
  return [
    body("title")
      .exists()
      .withMessage("Title is required")
      .isString()
      .withMessage("Title must be string"),
    body("type")
      .exists()
      .withMessage("Type is required")
      .isString()
      .withMessage("Type must be string"),
    body("description")
      .exists()
      .withMessage("Description is required")
      .isString()
      .withMessage("Description must be string"),
    body("date")
      .exists()
      .withMessage("Date is required")
      .isString()
      .withMessage("Date must be in string"),
  ];
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({
    errors: errors.array(),
  });
};
