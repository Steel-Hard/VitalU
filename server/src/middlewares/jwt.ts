import { Request,Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';



const jwtSecret = process.env.JWT_SECRET || 'default-secret';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader:any =  req.headers.authorization;
    
    try{
        const [,token] = authHeader.split(" ");
        const decoded = <any>jwt.verify(token, jwtSecret as string);
        if(!decoded) {
            res.status(401).json({"err":"Não Autorizado"});
        }else{
            res.locals = decoded;
        }

    }catch(err){
        return res.status(401).send({"err":"Não Autorizado"});
    }

    return next();
    
};