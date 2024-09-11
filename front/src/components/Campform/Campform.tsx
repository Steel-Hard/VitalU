// interface CampformProps{
//     label: string,
//     state:any,
//     funcState:any
// }


// export default function Campform(props:CampformProps){
//     return(
//         <div>
//             <label>{props.label}</label>
//             <input value= {props.state} onChange={(evt)=>props.funcState(evt.target.value)}/>
            
//         </div>
//     )    
// }

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
        <div>
            <label>{props.label}</label>
            <input 
                type={props.type || 'text'} // Define o tipo de input (number, text, etc.)
                value={props.state}
                onChange={handleChange}
            />
        </div>
    );
}
