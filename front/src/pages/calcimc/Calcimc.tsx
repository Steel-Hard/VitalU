import { useState } from "react"
import Campform from "../../components/Campform/Campform"


// export default function Calcimc(){
//     const [peso,setPeso]=useState<number>(0)
//     const [altura,setAltura]=useState<number>(0)
//     const [imc,setImc] = useState<number>(0)

//     function calcular(){
//         let res=peso/(altura*altura)
//         setImc (res)
//     }
//     return(
//         <div>
//             <p>Cálculo do IMC</p>
//             <Campform label="peso" state={peso} funcState={setPeso}/>
//             <Campform label="altura" state={altura} funcState={setAltura}/>
//             <button onClick={calcular}>Calcular</button>
//             <p> resultado : {imc}</p>
//         </div>
//     )
// }



// import React, { useState } from 'react';
// import Campform from './Campform'; // Certifique-se de que o componente Campform esteja importado corretamente.

export default function Calcimc() {
    const [peso, setPeso] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0); // altura em metros
    const [idade, setIdade] = useState<number>(0);
    const [sexo, setSexo] = useState<string>('masculino'); // 'masculino' ou 'feminino'
    const [imc, setImc] = useState<number | null>(null);
    const [tmb, setTmb] = useState<number | null>(null);

    function calcularIMC() {
        if (altura > 0) {
            const alturacm = altura / 100; // Converte a altura de centímetros para metros
            let res = peso / (alturacm * alturacm);
            setImc(parseFloat(res.toFixed(2))); // Arredonda o IMC para 2 casas decimais
        } else {
            alert("Altura deve ser maior que zero!");
        }
    }

    function calcularTMB() {
        if (peso > 0 && altura > 0 && idade > 0) {
            let tmbResult: number;
            if (sexo === 'masculino') {
                tmbResult = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
            } else {
                tmbResult = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
            }
            setTmb(parseFloat(tmbResult.toFixed(2))); // Arredonda a TMB para 2 casas decimais
        } else {
            alert("Preencha todos os campos corretamente!");
        }
    }

    function calcular() {
        calcularIMC();
        calcularTMB();
    }

    return (
        <div>
            <p>Cálculo do IMC e TMB</p>
            <Campform label="Peso (kg)" state={peso} funcState={setPeso} />
            <Campform label="Altura (cm)" state={altura} funcState={setAltura} />
            <Campform label="Idade (anos)" state={idade} funcState={setIdade} />

            <div>
                <label>Sexo:</label>
                <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
            </div>

            <button onClick={calcular}>Calcular</button>

            {imc !== null && <p>Resultado do IMC: {imc}</p>}
            {tmb !== null && <p>Taxa Metabólica Basal (TMB): {tmb} kcal/dia</p>}
        </div>
    );
}
