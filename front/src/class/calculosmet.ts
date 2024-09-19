
import { FatorAtividade } from "../enum/Objetivos";
export class CalculosMetabolicos{
    static imc(altura:number,peso:number){
        if (altura > 0) {
            const alturacm = altura / 100; // Converte a altura de centímetros para metros
            const res = (peso / (alturacm * alturacm)).toFixed(2);
            return res;  // Arredonda o IMC para 2 casas decimais
        } 
    }
    static casoBasal(Fator:string){
        let res:number = 0;
        switch (Fator){
            case FatorAtividade.sedentario:
                res = 1.2;
                break;
            case FatorAtividade.atividadeLeve:
                res = 1.375;
                break;
            case FatorAtividade.atividadeModerada:
                res = 1.55;
                break;
            case FatorAtividade.atividadeIntensa:
                res = 1.725;
                break;
            case FatorAtividade.atividadeMuitoIntensa:
                res = 1.9;
                break;
          
            default:
                res = 1.1;
                break;

        }
        return res;

    }
    static basal(altura:number,peso:number,idade:number,gen:string,Fator:string){
        const fatorResp = this.casoBasal(Fator);
        if (peso > 0 && altura > 0 && idade > 0) {
            let tmbResult: number;
            console.log(altura,peso,idade,gen,fatorResp)
            if (gen === 'Masculino') {
                tmbResult = (88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade)) * fatorResp;
            } else {
                tmbResult = (447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade)) * fatorResp;
            }
            console.log(tmbResult)
            return tmbResult.toFixed(2)// Arredonda a TMB para 2 casas decimais
        } 
        
    
    }


}