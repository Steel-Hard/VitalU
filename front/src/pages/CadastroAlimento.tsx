import {
  StlCaixa,
  BtnStl,
  StlInput,
  FlexDiv,
  SelectInBox,
  Option,
} from "../components/index";

export function CadastroAlimento() {
  return (
    <>
      <StlCaixa direction="row" width="50%" jcont="center">
        <StlInput
          placeholder="Nome do alimento"
          height="30px"
          width="70%"
          marginL="0.5%"
          marginR="0.5%"
        ></StlInput>
        <StlInput
          placeholder="Qtd"
          height="30px"
          width="20%"
          marginL="0.5%"
          marginR="0.5%"
        />

        <SelectInBox name="Unidade">
          <Option value="">Unidade (un)</Option>
          <Option value="kg">Quilograma (kg)</Option>
          <Option value="grama">Grama (g)</Option>
          <Option value="litro">Litro (l)</Option>
          <Option value="ml">Milititro (ml)</Option>
        </SelectInBox>
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
