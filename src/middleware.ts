import type { Request } from "express";
import type { Response } from "express";
import type { NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "123123";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(403).json({
      message: "You are not logged in",
    });
  }

  try {
    const decoded = jwt.verify(header, JWT_SECRET) as { _id: string };

    // @ts-ignore
    req.userId = decoded._id;

    next();
  } catch (error) {
    return res.status(403).json({
      message: "Invalid token",
    });
  }
};