import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/index";

const errorHandle = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      code: err.statusCode,
      message: err.message,
    });
  }

  console.log(err.message);
  return res.status(500).json({
    status: "error",
    code: 500,
    message: "Internal server error",
  });
};

export default errorHandle;
