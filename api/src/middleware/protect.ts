import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import error from "../utils/error.ts";

type ExtendedPayload = { id: string; isSeller: boolean } & JwtPayload;


const protect = (req: Request, res: Response, next: NextFunction) => {

  const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;


  if (!token) return next(error(403, "Yetkiniz yok (Token bulunamadı)"));


  jwt.verify(token, process.env.JWT_KEY as string, (err: any, payload: any) => {

    if (err) return next(error(403, "Tokeniniz geçersiz veya süresi dolmuş"));


    req.userId = (payload as ExtendedPayload).id;
    req.isSeller = (payload as ExtendedPayload).isSeller;
  });


  next();
};

export default protect;
