import { FlexDivLogo } from "../FlexDiv/FlexDIv";

interface LogoProps{
  
    height?: string;
    width?: string;
}

export function Logo(props:LogoProps){
    return(
        <FlexDivLogo>
            <img className="logoapp" height={props.height} width={props.width} src='./logo.png'/>
        </FlexDivLogo>
    )

}