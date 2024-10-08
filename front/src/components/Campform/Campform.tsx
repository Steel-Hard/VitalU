import { FlexDiv } from "../FlexDiv/FlexDIv";
import { StlInput } from "../Inputs/Input";



interface CampformProps { 
    label: string;
    state: number; // Pode ser um número ou uma string
    funcState: (value: number) => void; // Função que recebe um número ou string
    type?: string; // Tipo do input (pode ser 'number' ou 'text')
}

export default function Campform(props: CampformProps) {
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value === '' ? 0 : parseFloat(evt.target.value);
        props.funcState(value);
    };

    return (
        <FlexDiv>
            <label>{props.label}</label>
            <StlInput height="50px"
                type={props.type || 'text'} // Define o tipo de input (number, text, etc.)
                value={props.state}
                onChange={handleChange}
            />
        </FlexDiv>
    );
}
