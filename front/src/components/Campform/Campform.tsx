import { FlexDiv } from "../index";
import { StlInput } from "../Inputs/Input";



interface CampformProps { 
    label?:string;
    placeholder: string;
    funcState: (value: number) => void; // Função que recebe um número ou string
    type?: string; // Tipo do input (pode ser 'number' ou 'text')
}

export default function Campform(props: CampformProps) {

    return (
        <>
            <FlexDiv direction="column">

                <label>{props.label}</label>
                <StlInput
                    placeholder={props.placeholder}
                    height="50px"
                    type={props.type || 'text'} // Define o tipo de input (number, text, etc.)
                    onChange={(e) => props.funcState(parseInt(e.target.value))}
                    
                />

            </FlexDiv>
            
        
        </>
    );
}
