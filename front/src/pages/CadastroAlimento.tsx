import { StlCaixa, BtnStl, StlInput, FlexDiv } from "../components/index";

export function CadastroAlimento() {
  return (
    <>
      <StlCaixa direction="row">
        <h1>Nome alimento</h1>
        <StlInput placeholder="Quantidade" height="30px" width="120px" />
        <StlInput placeholder="Unidade" height="30px" width="120px" />
      </StlCaixa>
      <StlCaixa>
        <FlexDiv>
          <StlInput
            placeholder="Carboidratos"
            height="30px"
            width="120px"
          ></StlInput>
          <StlInput
            placeholder="Proteínas"
            height="30px"
            width="120px"
          ></StlInput>
        </FlexDiv>
        <FlexDiv>
          <StlInput
            placeholder="Calorias"
            height="30px"
            width="120px"
          ></StlInput>
          <StlInput
            placeholder="Açúcares"
            height="30px"
            width="120px"
          ></StlInput>
        </FlexDiv>
        <FlexDiv>
          <StlInput placeholder="Fibras" height="30px" width="120px"></StlInput>
          <StlInput
            placeholder="Gordura total"
            height="30px"
            width="120px"
          ></StlInput>
        </FlexDiv>
        <FlexDiv>
          <StlInput
            placeholder="Gordura saturada"
            height="30px"
            width="120px"
          ></StlInput>
          <StlInput
            placeholder="Gordura trans"
            height="30px"
            width="120px"
          ></StlInput>
        </FlexDiv>
        <FlexDiv>
          <StlInput placeholder="Cálcio" height="30px" width="120px"></StlInput>
          <StlInput placeholder="Sódio" height="30px" width="120px"></StlInput>
        </FlexDiv>
      </StlCaixa>
      <BtnStl>Registrar</BtnStl>
    </>
  );
}
