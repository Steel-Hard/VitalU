

export class CalculosMetabolicos{
    static imc(altura:number,peso:number){
        if (altura > 0) {
            const alturacm = altura / 100; // Converte a altura de centímetros para metros
            const res = (peso / (alturacm * alturacm)).toFixed(2);
            return res;  // Arredonda o IMC para 2 casas decimais
        } 
    }
    static casoBasal(FatorAtividade:string){
        let res:number = 0;
        switch (FatorAtividade){
            case 'Pouco ou nenhum exercício':
                res = 1.2;
                break;
            case 'Exercício leve (1 A 3 dias por semana)':
                res = 1.375;
                break;
            case 'Exercício moderado (3 a 5 dias por semana)':
                res = 1.55;
                break;
            case 'Exercício intenso (6 a 7 dias por semna)':
                res = 1.725;
                break;
            case 'Exercício muito intenso ( 2 vezes por dia treinos pesados)':
                res = 1.9;
                break;
          
            default:
                break;

        }
        return res;

    }
    static basal(altura:number,peso:number,idade:number,gen:string,FatorAtividade:string){
        const fatorResp = this.casoBasal(FatorAtividade);
        if (peso > 0 && altura > 0 && idade > 0) {
            let tmbResult: number;
            console.log(altura,peso,idade,gen,fatorResp)
            if (gen === 'masculino') {
                tmbResult = (88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade)) * fatorResp;
            } else {
                tmbResult = (447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade)) * fatorResp;
            }
            console.log(tmbResult)
            return tmbResult.toFixed(2)// Arredonda a TMB para 2 casas decimais
        } 
        
    
    }


}