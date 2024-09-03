import styled from "styled-components";

const BtnStl = styled.button`
  background-color: rgb(171, 53, 224);
  height: 30px;
  width: 60px;
`;
function Btn() {
  return (
    <div>
      <BtnStl />
    </div>
  );
}

export default Btn;
