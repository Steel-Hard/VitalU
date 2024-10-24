import { Request, Response, NextFunction } from 'express';

// Middleware para validar os parâmetros do body
const validateNutritionalData = (req: Request, res: Response, next: NextFunction) => {
  const {
    nome,
    descricao,
    quantidade_por_porcao,
    unidade_quantidade_por_porcao,
    calorias,
    proteina,
    carboidrato,
    acucares,
    fibras,
    gordura_total,
    gordura_saturada,
    gordura_trans,
    calcio,
    sodio,
  } = req.body;
  

  // Verificar se todos os parâmetros obrigatórios estão presentes
  if (!nome || typeof nome !== 'string' || nome.length > 50) {
    return res.status(400).json({ error: 'O nome é obrigatório e deve ter no máximo 50 caracteres.' });
  }

  if (descricao && (typeof descricao !== 'string' || descricao.length > 50)) {
    return res.status(400).json({ error: 'A descrição, se fornecida, deve ter no máximo 50 caracteres.' });
  }

  if (!quantidade_por_porcao || quantidade_por_porcao < 0 || quantidade_por_porcao.toString().length > 8) {
    return res.status(400).json({ error: 'A quantidade por porção é obrigatória, deve ser um número não negativo e ter até 8 dígitos.' });
  }

  if (!unidade_quantidade_por_porcao || typeof unidade_quantidade_por_porcao !== 'string' || unidade_quantidade_por_porcao.length > 20) {
    return res.status(400).json({ error: 'A unidade de quantidade por porção é obrigatória e deve ter no máximo 20 caracteres.' });
  }

  const requiredFields = [
    { field: calorias, name: 'calorias' },
    { field: proteina, name: 'proteina' },
    { field: carboidrato, name: 'carboidrato' },
    { field: gordura_total, name: 'gordura_total' },
  ];

  for (const { field, name } of requiredFields) {
    if (field < 0 || field.toString().length > 8 || field.toString().includes(',') || field.toString().includes('-')) {
      return res.status(400).json({ error: `O campo ${name} é obrigatório, deve ser um número não negativo, ter até 8 dígitos e não pode conter vírgulas.` });
    }
  }

  // Definindo campos opcionais com valor padrão 0 se não estiverem presentes
  req.body.acucares = (acucares !== undefined) ? acucares : 0;
  req.body.fibras = (fibras !== undefined) ? fibras : 0;
  req.body.gordura_saturada = (gordura_saturada !== undefined) ? gordura_saturada : 0;
  req.body.gordura_trans = (gordura_trans !== undefined) ? gordura_trans : 0;
  req.body.calcio = (calcio !== undefined) ? calcio : 0;
  req.body.sodio = (sodio !== undefined) ? sodio : 0;

  // Verificação para campos opcionais
  const optionalFields = [
    { field: req.body.acucares, name: 'acucares' },
    { field: req.body.fibras, name: 'fibras' },
    { field: req.body.gordura_saturada, name: 'gordura_saturada' },
    { field: req.body.gordura_trans, name: 'gordura_trans' },
    { field: req.body.calcio, name: 'calcio' },
    { field: req.body.sodio, name: 'sodio' },
  ];

  for (const { field, name } of optionalFields) {
    if ( field < 0 || field > 99999 || field.toString().includes(',') || field.toString().includes('-')) {
      return res.status(400).json({ error: `O campo ${name} deve ser um número não negativo e não pode conter vírgulas.` });
    }
  }

  next();
};

export default validateNutritionalData;
