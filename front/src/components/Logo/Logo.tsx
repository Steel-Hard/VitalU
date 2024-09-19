import { FlexDivLogo } from "../FlexDiv/FlexDIv";
import logo from '../../assets/logor.svg'

export function Logo(){
    return(
        <FlexDivLogo>
            <img className="logoapp" src={logo}/>
        </FlexDivLogo>
    )

}