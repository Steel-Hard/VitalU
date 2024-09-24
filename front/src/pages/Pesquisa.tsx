import { LinhaSld, StlInput, Nav,FlexDivCo,FlexDiv, StlCaixa,FoodCard} from "../components/index"



export function Pesquisa(){
    return(
        <>
            <LinhaSld/>
            <FlexDivCo>
        <FlexDivCo>


            <Nav>
                <StlCaixa>10/10/1999</StlCaixa>
            </Nav>
                <FlexDiv>
                    <StlInput bcolor='#ffffff' width='60%' height='40px' placeholder='Pesquisa Alimento' />
                    <button>Pesquisa</button>
                </FlexDiv>
                
            </FlexDivCo>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
        </FlexDivCo>
        </>
    )
}
