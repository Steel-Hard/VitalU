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

// Função que calcula a data de nascimento a partir da idade
export function obterDataNascimento(idade: number): Date {
    const hoje = new Date();
    const anoNascimento = hoje.getFullYear() - idade;
  
    // Retorna a data de nascimento assumindo que o aniversário já ocorreu este ano
    return new Date(anoNascimento, hoje.getMonth(), hoje.getDate());
  }
  
//(dataNascimento.toISOString()) Exemplo de saída: "1990-10-08T00:00:00.000Z"
  