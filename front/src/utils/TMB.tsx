// import React, { useState } from "react";

// // Interface para definir a estrutura dos dados do usuário
// interface DadosUsuario {
//   idade: number;
//   altura: number;
//   peso: number;
//   sexo: "masculino" | "feminino";
//   metAtividade: number;
//   tempoAtividade: number;
// }

// const App: React.FC = () => {
//   // Estado para armazenar os dados do usuário
//   const [dadosUsuario, setDadosUsuario] = useState<DadosUsuario>({
//     idade: 0,
//     altura: 0,
//     peso: 0,
//     sexo: "masculino",
//     metAtividade: 0,
//     tempoAtividade: 0,
//   });

//   // Função para calcular a taxa metabólica basal (TMB)
//   const calcularTMB = (): number => {
//     const { idade, altura, peso, sexo } = dadosUsuario;
//     let taxaMetabolica: number;

//     // Fórmula de Mifflin-St Jeor para calcular a TMB
//     if (sexo === "masculino") {
//       taxaMetabolica = 10 * peso + 6.25 * altura - 5 * idade + 5;
//     } else {
//       taxaMetabolica = 10 * peso + 6.25 * altura - 5 * idade - 161;
//     }

//     return taxaMetabolica;
//   };

//   // Função para calcular as calorias gastas durante a atividade
//   const calcularCaloriasGastas = (taxaMetabolica: number): number => {
//     const { metAtividade, peso, tempoAtividade } = dadosUsuario;
//     const caloriasGastas = metAtividade * peso * (tempoAtividade / 60); // Tempo em minutos
//     return caloriasGastas;
//   };

//   // Função para lidar com o envio do formulário
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const taxaMetabolica = calcularTMB();
//     const caloriasGastas = calcularCaloriasGastas(taxaMetabolica);
//     alert(`Taxa Metabólica Basal: ${taxaMetabolica.toFixed(2)} kcal/dia\nCalorias Gastas: ${caloriasGastas.toFixed(2)} kcal`);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Calculadora de TMB e Gasto Calórico</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Campos de entrada para os dados do usuário */}
//         {/* ... (código do formulário já mostrado anteriormente) */}
//       </form>
//       {/* Exibição dos resultados */}
//       {/* ... (código da exibição dos resultados já mostrado anteriormente) */}
//     </div>
//   );
// };

// export default App;