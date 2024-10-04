import {useState} from 'react'
import styled from 'styled-components';
import { Genero } from '../../enum/Objetivos';


interface GenderProps{
  setGen: (value:string) => void
}

export const GenderSelector = ({setGen}:GenderProps) => {
  const [selectedGender, setSelectedGender] = useState<Genero.M | Genero.F | null>(null);

  const handleGenderSelect = (gender: Genero.M| Genero.F) => {
    setSelectedGender(gender);
    setGen(gender);
  };

  return (
    <Container>
      <Button value={Genero.M}
        isSelected={selectedGender === Genero.M}
        onClick={() => handleGenderSelect(Genero.M)}
      >
        M
      </Button>
      <Button value={Genero.F}
        isSelected={selectedGender === Genero.F}
        onClick={() => handleGenderSelect(Genero.F)}
      >
        F
      </Button>
    </Container>
  );
};

// Estilos usando styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

interface ButtonProps {
  isSelected: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  background-color: ${({ isSelected }) => (isSelected ? '#007bff' : '#f0f0f0')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  border: 2px solid ${({ isSelected }) => (isSelected ? '#007bff' : '#ccc')};
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? '#0056b3' : '#e0e0e0'};
  }
`;




