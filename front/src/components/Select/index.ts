import styled from 'styled-components';



export const Select = styled.select`
  padding: 10px 15px;

  font-size: 14px;
  color: white;
  background-color: rgb(67, 170, 132); 
  border: 2px solid #f0f0f0;
  
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #249c65;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(45, 134, 91, 0.4); 
  }
`;

// Estilização das Options
export const Option = styled.option`
  background-color: white;
  color: #2d865b; /* Contraste nas opções */
  font-size: 12px;
  padding: 10px;
`;


