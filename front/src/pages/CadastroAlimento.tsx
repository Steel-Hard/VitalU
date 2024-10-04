import { StlCaixa, BtnStl, StlInput, FlexDiv } from "../components/index";

export function CadastroAlimento() {
  return (
    <>
      <StlCaixa direction="row" width="50%" jcont="center">
        <StlInput
          placeholder="Alimento"
          height="30px"
          width="70%"
          marginL="1%"
          marginR="1%"
        ></StlInput>
        <StlInput
          placeholder="Qtd"
          height="30px"
          width="20%"
          marginL="1%"
          marginR="1%"
        />

        <select
          name="Unidade"
          margin-top="10px"
          margin-bottom="10px"
          border-radius="5px"
        >
          <option value="">Unidade (un)</option>
          <option value="kg">Quilograma (kg)</option>
          <option value="grama">Grama (g)</option>
          <option value="litro">Litro (l)</option>
          <option value="ml">Milititro (ml)</option>
        </select>
        <StlInput
          placeholder="Uni p/ porção"
          height="30px"
          width="60%"
          marginL="1%"
          marginR="1%"
        />
      </StlCaixa>
      <StlCaixa direction="row" width="50%" jcont="center">
        <FlexDiv direction="column" margin="15px">
          <StlInput
            placeholder="Carboidratos"
            height="30px"
            width="100%"
          ></StlInput>
          <StlInput
            placeholder="Proteínas"
            height="30px"
            width="100%"
          ></StlInput>
          <StlInput
            placeholder="Calorias"
            height="30px"
            width="100%"
          ></StlInput>
          <StlInput
            placeholder="Açúcares"
            height="30px"
            width="100%"
          ></StlInput>
          <StlInput placeholder="Fibras" height="30px" width="100%"></StlInput>
        </FlexDiv>

        <FlexDiv direction="column" margin="15px">
          <StlInput
            placeholder="Gordura total"
            height="30px"
            width="100%"
          ></StlInput>
          <StlInput
            placeholder="Gordura saturada"
            height="30px"
            width="100%"
          ></StlInput>
          <StlInput
            placeholder="Gordura trans"
            height="30px"
            width="100%"
          ></StlInput>
          <StlInput placeholder="Cálcio" height="30px" width="100%"></StlInput>
          <StlInput placeholder="Sódio" height="30px" width="100%"></StlInput>
        </FlexDiv>
      </StlCaixa>
      <BtnStl>Registrar</BtnStl>
    </>
  );
}
