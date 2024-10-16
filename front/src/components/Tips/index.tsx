import { useState } from "react";
import { MdTipsAndUpdates } from "react-icons/md";
import styled from "styled-components";

// Estilos para o popup
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 300px;
  width: 100%;
`;

const PopupMessage = styled.p`
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background-color: #ff5137;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #fc482c;
  }
`;

interface PopProps {
  message: string;
}



function Tip({ message }:PopProps){
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>  
      <button style={{borderColor: 'white',backgroundColor: '#ff3700'}} title="Exibir Informações utilitárias da página" onClick={openPopup}><MdTipsAndUpdates color="white"/></button>
      {isOpen && <Overlay>
      <PopupContainer>
        <PopupMessage>{message}</PopupMessage>
        <CloseButton onClick={closePopup}>Fechar</CloseButton>
      </PopupContainer>
    </Overlay>}
    </div>
  );
};

export default Tip;
