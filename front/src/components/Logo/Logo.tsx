import { FlexDiv } from "../FlexDiv/FlexDiv";

interface LogoProps{
 
    height?: string;
    width?: string;
}

export function Logo(props:LogoProps){
    return(
        <FlexDiv margin="20px">
            <img className="logoapp" height={props.height} width={props.width} src='./logo.png'/>
        </FlexDiv>
    )

}