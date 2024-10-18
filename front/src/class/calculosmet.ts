
import { FatorAtividade } from "../enum/Objetivos";
export class CalculosMetabolicos{
    static nivelImc(IMC:number){
        const tab: { [key: number]: string } = {
            1: "IMC Abaixo do Ideal",
            2: "IMC Ideal",
            3: "IMC Acima do Ideal",
            4: "Obesidade de Grau I",
            5: "Obesidade de Grau II",
            6: "Obesidade de Grau III",
        };

        if (IMC < 18.5) {
            return tab[1];
          } else if (IMC >= 18.5 && IMC <= 24.99) {
            return tab[2];
          } else if (IMC >= 25 && IMC <= 29.99) {
            return tab[3];
          } else if (IMC >= 30 && IMC <= 34.99) {
            return tab[4];
          } else if (IMC >= 35 && IMC <= 39.99) {
            return tab[5];
          } else if (IMC >= 40) {
            return tab[6];
          } else {
            return "IMC não calculado. Exceção lógica.";
          }

    }
    static imc(altura:number,peso:number){
        if (altura > 0) {
            const alturacm = altura / 100; // Converte a altura de centímetros para metros
            const res = (peso / (alturacm * alturacm)).toFixed(2);
            let nivel = this.nivelImc(parseInt(res))
            return res + " " + nivel  // Arredonda o IMC para 2 casas decimais
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