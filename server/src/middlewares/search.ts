import { Request,Response, NextFunction } from 'express';
export const validateNumber = (req:Request, res:Response, next:NextFunction) => {
    const {  n_categoria} = req.body;
  
    // Verifica se o número está definido e é um número
    if (typeof n_categoria !== 'number' || n_categoria < 1 || n_categoria > 19) {
      return res.status(401).json({ error: 'Número deve estar entre 1 e 19.' });
    }
  
    next();
  };
  
  
  
export const validateQuery = (req:Request, res:Response, next:NextFunction) => {
    const {user_query} = req.body; 
  
    // Verifica se o parâmetro está definido e se o seu comprimento está dentro do limite
    if (!user_query|| typeof user_query!== 'string' || user_query.length > 50) {
      return res.status(401).json({ error: 'A query deve ter até 50 caracteres.' });
    }
  
    next();
  };
  
  
  