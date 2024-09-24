import { useState } from "react";
import { StlCaixa,BtnStl,StlformReverse } from "../index";


export default function FoodCard(){
    const [count,setCount] = useState(0);
    return(
        <StlCaixa direction="row">
            <div>

                <h1>Arroz</h1>
                <p>300kcal, doce</p>
            </div>
            <StlformReverse>
                {count > 0 ? <BtnStl onClick={()=> {setCount(prev => prev-=1)}}>-</BtnStl>:<></>}
                
                {count}
                <BtnStl onClick={()=>{ 
                    setCount(prev => prev+=1)
                }}>
                    +
                </BtnStl>

            </StlformReverse>
            <BtnStl>Adicionar</BtnStl>

        </StlCaixa>
    )

}