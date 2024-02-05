import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string,    
}

export function isAuthenticated (req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify( // SUB = id do usuário
            token,
            process.env.JWT_SECRET
        ) as Payload;

         // Recupera o ID do token e colocar dentro de uma variável user_id dentro do request
         req.user_id = sub;
         
         return next();
    } catch (err) {
        return res.status(401).end();
    }

}