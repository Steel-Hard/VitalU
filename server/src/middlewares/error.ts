import { Request, Response, NextFunction } from 'express';


export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err); // Registra o erro no console
    res.status(500).json({ message: 'Ocorreu um erro interno.' }); // Resposta genérica
  };