/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  StlCaixa,
  BtnStl,
  StlInput,
  FlexDiv,
  SelectInBox,
  Option,
  Navegacao,
  LinhaSld,
  Tip,
  Message,
} from "../components/index";
import { useLoadingButton } from "../hooks/useLoadingButton";
import { dicas } from "../enum/dicas";
import foods from "../services/foods";
import { IoMdReturnLeft } from "react-icons/io";
import { Link } from "react-router-dom";
import { useReducer, useState } from "react";
import { LoadingSpinner } from "../components/Loading/index";

const states = {
  foodNome: "",
  foodDesc: "",
  foodQunt: 0,
  foodUnid: "kg",
  foodKcal: 0,
  foodCarb: 0,
  foodProt: 0,
  foodAcuc: 0,
  foodFibr: 0,
  foodGdTt: 0,
  foodGdTr: 0,
  foodGdSt: 0,
  foodCalc: 0,
  foodSodi: 0,
};

function reducer(state: typeof states, action: { type: string; payload: any }) {
  switch (action.type) {
    case "setNome":
      return { ...state, foodNome: action.payload };
    case "setDesc":
      return { ...state, foodDesc: action.payload };
    case "setQunt":
      return { ...state, foodQunt: action.payload };
    case "setUnid":
      return { ...state, foodUnid: action.payload };
    case "setKcal":
      return { ...state, foodKcal: action.payload };
    case "setCarb":
      return { ...state, foodCarb: action.payload };
    case "setProt":
      return { ...state, foodProt: action.payload };
    case "setAcuc":
      return { ...state, foodAcuc: action.payload };
    case "setFibr":
      return { ...state, foodFibr: action.payload };
    case "setGdTt":
      return { ...state, foodGdTt: action.payload };
    case "setGdTr":
      return { ...state, foodGdTr: action.payload };
    case "setGdSt":
      return { ...state, foodGdSt: action.payload };
    case "setCalc":
      return { ...state, foodCalc: action.payload };
    case "setSodi":
      return { ...state, foodSodi: action.payload };
    default:
      return state;
  }
}

export function CadastroAlimento() {
  const [state, dispatch] = useReducer(reducer, states);
  const [mensagem, setMensagem] = useState("");
  const { setLoading, loading } = useLoadingButton();

  const verificarCamposNulos = () => {
    const {
      foodNome,
      foodDesc,
      foodQunt,
      foodKcal,
      foodProt,
      foodCarb,
      foodGdTt,
    } = state;
    //verificação
    return !(
      !foodQunt ||
      !foodNome ||
      !foodDesc ||
      foodProt === ""||
      foodCarb === ""||
      foodGdTt === ""||
      foodKcal === ""||
      foodNome === "" ||
      foodDesc === "" ||
      foodKcal === 0
    );
  };

  const enviarDados = async () => {
    setLoading(true);
    const {
      foodNome,
      foodDesc,
      foodQunt,
      foodUnid,
      foodKcal,
      foodCarb,
      foodProt,
      foodAcuc,
      foodFibr,
      foodGdTt,
      foodGdTr,
      foodGdSt,
      foodCalc,
      foodSodi,
    } = state;
    try{
   
        await foods.cadastrarProduto(
          foodNome,
          foodDesc,
          foodQunt,
          foodUnid,
          foodKcal,
          foodCarb,
          foodProt,
          foodAcuc,
          foodFibr,
          foodGdTt,
          foodGdTr,
          foodGdSt,
          foodCalc,
          foodSodi,
          setMensagem
        )
      
    }catch{
      setMensagem("Erro ao cadastrar alimento")
    }finally{
      setLoading(false);
    }
  }

  return (
    <>
      <LinhaSld>
        <Tip message={dicas.cadastroAlimento} />
      </LinhaSld>
      <Navegacao>
        <Link to="/pesquisa">
          <IoMdReturnLeft size={70} />
        </Link>
      </Navegacao>
      <StlCaixa width="50%">
        <FlexDiv direction="row" jContent="space-between" gap="20px">
          <FlexDiv align="baseline" direction="column">
            <label>Nome Alimento*</label>
            <StlInput
              placeholder="Nome do alimento*"
              maxLength={30}
              height="50px"
              onChange={(e) =>
                dispatch({ type: "setNome", payload: e.target.value })
              }
            />
          </FlexDiv>
          <FlexDiv align="baseline" direction="column">
            <label>Descrição*</label>
            <StlInput
              maxLength={30}
              placeholder="Uma breve descrição*"
              height="50px"
              onChange={(e) =>
                dispatch({ type: "setDesc", payload: e.target.value })
              }
            />
          </FlexDiv>
          <FlexDiv align="baseline" direction="column">
            <label>Quantidade*</label>
            <StlInput
              height="50px"
              placeholder="Insira a quantidade*"
              maxLength={10}
              type="number"
              onChange={(e) =>
                dispatch({ type: "setQunt", payload: e.target.value })
              }
            />
          </FlexDiv>
          <FlexDiv>
            <SelectInBox
              name="Unidade"
              onChange={(e) =>
                dispatch({ type: "setUnid", payload: e.target.value })
              }
            >
              <Option value="kg">Quilograma (kg)</Option>
              <Option value="g">Grama (g)</Option>
              <Option value="l">Litro (l)</Option>
              <Option value="ml">Milititro (ml)</Option>
            </SelectInBox>
          </FlexDiv>
        </FlexDiv>
      </StlCaixa>
      <StlCaixa direction="row" width="50%" jcont="center" smlDir="column">
        <FlexDiv direction="column" margin="15px" jContent="space-between">
          <label>Calorias*</label>
          <StlInput
            placeholder="*Campo Obrigatório*"
            height="50px"
            width="100%"
            type="number"
            onChange={(e) =>
              dispatch({ type: "setKcal", payload: e.target.value })
            }
            maxLength={6}
          />
          <label>Carboidratos*</label>
          <StlInput
            placeholder="*Campo Obrigatório*"
            height="50px"
            width="100%"
            type="number"
            onChange={(e) =>
              dispatch({ type: "setCarb", payload: e.target.value })
            }
            maxLength={6}
          />
          <label>Proteínas*</label>
          <StlInput
            placeholder="*Campo Obrigatório*"
            height="50px"
            width="100%"
            type="number"
            onChange={(e) =>
              dispatch({ type: "setProt", payload: e.target.value })
            }
            maxLength={6}
          />
          <label>Açúcares</label>
          <StlInput
            placeholder="Campo não obrigatorio"
            height="50px"
            width="100%"
            type="number"
            onChange={(e) =>
              dispatch({ type: "setAcuc", payload: e.target.value })
            }
            maxLength={6}
          />
          <label>Fibras</label>
          <StlInput
            placeholder="Campo não obrigatorio"
            height="50px"
            width="100%"
            type="number"
            onChange={(e) =>
              dispatch({ type: "setFibr", payload: e.target.value })
            }
            maxLength={6}
          />
        </FlexDiv>

        <FlexDiv direction="column" margin="15px">
          <label>Gorduras totais*</label>
          <StlInput
            placeholder="*Campo Obrigatório*"
            height="50px"
            width="100%"
            type="number"
            onChange={(e) =>
              dispatch({ type: "seGdTt", payload: e.target.value })
            }
            maxLength={6}
          />
          <label>Gorduras saturadas</label>
          <StlInput
            placeholder="Campo não obrigatorio"
            height="50px"
            width="100%"
            type="number"
            onChange={(e) =>
              dispatch({ type: "setGdTr", payload: e.target.value })
            }
            maxLength={6}
          />
          <label>Gorduras trans</label>
          <StlInput
            placeholder="Campo não obrigatorio"
            height="50px"
            width="100%"
            type="number"
            onChange={(e) =>
              dispatch({ type: "setGdSt", payload: e.target.value })
            }
            maxLength={6}
          />
          <label>Cálcio</label>
          <StlInput
            placeholder="Campo não obrigatorio"
            height="50px"
            width="100%"
            type="number"
            onChange={(e) =>
              dispatch({ type: "setCalc", payload: e.target.value })
            }
            maxLength={6}
          />
          <label>Sódio</label>
          <StlInput
            placeholder="Campo não obrigatorio"
            height="50px"
            width="100%"
            type="number"
            onChange={(e) =>
              dispatch({ type: "setSodi", payload: e.target.value })
            }
            maxLength={6}
          />
        </FlexDiv>
      </StlCaixa>
      <BtnStl height="60px"
      width="200px"
        onClick={() => {
          if (!verificarCamposNulos()) {
            setMensagem("Existem campos obrigatórios vazios.");
            return;
          }

          enviarDados();
          
        }}
      >
        {loading ? (
          <FlexDiv>
            <LoadingSpinner />
          </FlexDiv>
        ) : (
          "Registrar novo alimento"
        )}
      </BtnStl>
      <Message
        visible={mensagem ? true : false}
        height="30px"
        style={{
          color: mensagem.includes("obrigatório")
            ? "#f54242"
            : mensagem.includes("negativo")
            ? "#f54242"
            : mensagem.includes("Erro")
            ? "#f54242"
            : "green",
        }}
      >
        {mensagem}
      </Message>
    </>
  );
}
