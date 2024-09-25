export interface CadastroProduto {
    usr_id: number;
    nome?: string;
    descricao?: string;
    tamanho_porcao?: number;
    unidade_tamanho_porcao?: string;
    quantidade_por_porcao?: number;
    unidade_quantidade_por_porcao?: string;
    calorias?: number;
    proteina?: number;
    carboidrato?: number;
    acucares?: number;
    fibras?: number;
    gordura_total?: number;
    gordura_saturada?: number;
    gordura_trans?: number;
    calcio?: number;
    sodio?: number;
}
