import { Request, Response, NextFunction } from 'express';

// Middleware para validar os parâmetros do body

const validateCad = (req: Request, res: Response, next: NextFunction) => {
  const { mail, passwd, nome } = req.body;

  // Validações
  if (typeof mail !== 'string' || mail.length > 255 || !mail.includes('@')) {
    return res.status(400).json({ error: 'O e-mail deve ser uma string com no máximo 255 caracteres e deve conter "@" .' });
  }

  if (typeof passwd !== 'string' || passwd.length < 6 || passwd.length > 12) {
    return res.status(400).json({ error: 'A senha deve ter entre 6 e 12 caracteres.' });
  }

  if (typeof nome !== 'string' || nome.length > 255) {
    return res.status(400).json({ error: 'O nome deve ser uma string com no máximo 255 caracteres.' });
  }

  next();
};



const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { mail, passwd } = req.body;

  // Validações
  if (typeof mail !== 'string' || mail.length > 255 || !mail.includes('@')) {
    return res.status(400).json({ error: 'O e-mail deve ser uma string com no máximo 255 caracteres e deve conter "@" .' });
  }

  if (typeof passwd !== 'string' || passwd.length < 6 || passwd.length > 12) {
    return res.status(400).json({ error: 'A senha deve ter entre 6 e 12 caracteres.' });
  }

  next();
};

export default validateLogin;








const validateDadosUser = (req: Request, res: Response, next: NextFunction) => {
  const { altura, peso, genero, objetivos, data_nasc } = req.body;


  if (typeof altura !== 'number' || altura < 0) {
    return res.status(400).json({ error: 'A altura deve ser um número não negativo.' });
  }

  if (typeof peso !== 'number' || peso < 0) {
    return res.status(400).json({ error: 'O peso deve ser um número não negativo.' });
  }

  if (genero !== 'Masculino' && genero !== 'Feminino') {
    return res.status(400).json({ error: 'O gênero deve ser "Masculino" ou "Feminino".' });
  }

  if (!['Manter Peso', 'Ganhar Peso', 'Perder Peso'].includes(objetivos)) {
    return res.status(400).json({ error: 'Os objetivos devem ser "Manter Peso", "Ganhar Peso" ou "Perder Peso".' });
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (typeof data_nasc !== 'string' || !dateRegex.test(data_nasc)) {
    return res.status(400).json({ error: 'A data de nascimento deve estar no formato YYYY-MM-DD.' });
  }

  

  // Se todas as validações passarem, chame o próximo middleware
  next();
};



export {validateCad,validateLogin,validateDadosUser};
