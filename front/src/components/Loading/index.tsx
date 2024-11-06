import styled from "styled-components";


export const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.6);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;




