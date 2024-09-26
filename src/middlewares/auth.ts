import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload extends jwt.JwtPayload {
  id: number;
  email: string;
}

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Token não encontrado" });
  }

  const secret = process.env.JWT_SECRET || "secret";
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, secret) as TokenPayload;

  if (!decoded || !decoded.id || !decoded.email) {
    return res.status(401).json({ error: "Token inválido" });
  }

  if (decoded.exp && decoded.exp < Date.now() / 1000) {
    return res.status(401).json({ error: "Token expirado" });
  }

  req.user = {
    id: decoded.id,
    email: decoded.email,
  };

  next();
}

export default authMiddleware;
