import { Response, NextFunction } from 'express';
import { User, RequestWithUser } from '../types';
import jwt from 'jsonwebtoken';



const jwtSecret = process.env.JWT_SECRET || 'default-secret';

export function authenticateToken(req: RequestWithUser, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return res.sendStatus(403);

        req.user = user as User;
    });
};