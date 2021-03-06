import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors";

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new AppError("Token is missing.", 401);
  }

  verify(
    token as string,
    process.env.JWT_SECRET as string,
    (err: any, decoded: any) => {
      if (err) {
        throw new AppError("Invalid Token", 401);
      }

      const { sub, isAdmin, cpf } = decoded;

      req.user = { id: sub, cpf, isAdmin };

      next();
    }
  );
};

export default ensureAuthMiddleware;
