// Função que calcula a idade a partir da data de nascimento
export function calcularIdade(dataNascimento: Date | string): number {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);  
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
  
    // Se o mês atual é menor ou se estamos no mês de aniversário mas o dia ainda não passou, decrementa a idade
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
  
    return idade;
  }
// Exemplo de saída: 34 (depende da data atual)

