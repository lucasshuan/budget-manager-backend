import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

function authenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Token não encontrado" });
  }

  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.decode(token, {
    json: true,
  });

  if (!decoded) {
    return res.status(401).json({ error: "Token inválido" });
  }

  req.user = {
    id: decoded.id,
    email: decoded.email,
  };

  next();
}

export default authenticationMiddleware;
