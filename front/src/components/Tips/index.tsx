import React, { useState } from "react";
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
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

interface PopProps {
  message: string;
  onClose: () => void;
}

function Tips({ message, onClose }:PopProps)  {
  return (
    <Overlay>
      <PopupContainer>
        <PopupMessage>{message}</PopupMessage>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </PopupContainer>
    </Overlay>
  );
};

function Tip(){
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
    
    
    
    
    
    
      <button onClick={openPopup}>Abrir Popup</button>
      {isOpen && <Tips message="Olá! Este é um pop-up." onClose={closePopup} />}
    </div>
  );
};

export default Tip;
