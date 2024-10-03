import styled from "styled-components";
import { FlexDiv } from "../index";



interface MessageProps{
    visible?:boolean;

}




export const Message = styled(FlexDiv)<MessageProps>`
   visibility: ${({visible}) => visible ? 'visible': 'hidden'}
`