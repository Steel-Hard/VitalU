/* eslint-disable @typescript-eslint/no-explicit-any */

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';
import { FlexDiv } from '../index';

interface GraphProps {
  caloriesConsumed: number | any;
  basalRate: number | any;
  goal: string | any;
}

function Graph({ caloriesConsumed, basalRate, goal }: GraphProps) {
  let message = '';
  let color = '#4CAF50'; // Default color for meeting goal

  // Lógica para determinar a mensagem e a cor
  if (goal === 'Ganhar Peso') {
    if (caloriesConsumed >= basalRate) {
      message = 'Você comeu mais e está de acordo com a meta para ganhar peso.';
    } else {
      message = 'Você comeu menos que o necessário para ganhar peso.';
      color = '#FF5722'; // Warning color for being below goal
    }
  } else if (goal === 'Perder Peso') {
    if (caloriesConsumed < basalRate) {
      message = 'Você comeu menos e está de acordo com a meta para perder peso.';
    } else {
      message = 'Você comeu mais que o necessário para perder peso.';
      color = '#FF5722'; // Warning color for being above goal
    }
  } else if (goal === 'Manter Peso') {
    const withinMargin = Math.abs(caloriesConsumed - basalRate) < basalRate * 0.1; // 10% margin
    if (withinMargin) {
      message = 'Você está dentro da faixa para manter o peso.';
    } else if (caloriesConsumed > basalRate) {
      message = 'Você comeu mais que o necessário para manter o peso.';
      color = '#FF5722';
    } else {
      message = 'Você comeu menos que o necessário para manter o peso.';
      color = '#FF5722';
    }
  }

  const data = [
    { name: 'Calorias Consumidas', value: caloriesConsumed.toFixed(2) },  // Limitando as calorias consumidas para não ultrapassar a taxa basal
    { name: 'Taxa Basal', value: basalRate },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{goal}</h2>
      <FlexDiv>
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, basalRate]} /> 
          <Tooltip />

          
          {/* Barra para Calorias Consumidas */}
          <Bar dataKey="value" fill={color} name="Consumo" />
        </BarChart>
      </FlexDiv>
      
      <p style={{ fontSize: '1.5em', margin: '20px 0' }}>
        {caloriesConsumed.toFixed(2)} Calorias Consumidas
      </p>
      <p style={{ fontSize: '1.2em', color: '#555' }}>
        Taxa Basal: {basalRate} Calorias
      </p>
      <p>{message}</p>
    </div>
  );
}

export default Graph;
