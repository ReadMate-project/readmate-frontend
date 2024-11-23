import styled from "styled-components";
import { h1 } from "../../../global/common";
import theme from "../../../global/theme";

const S={};

S.Background=styled.div`
    width: 100%;
    height:auto;
    position: relative;
    background-color:${theme.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin:5% 0;
   padding:0 10%;

`
S.TitleHightLight=styled.div`
    
    align-self: flex-start;
    margin-bottom: 3%;
        width:28%;
        img{
            width:100%
        }
`

S.Date=styled.div`
    align-self: flex-start;
    ${h1};
    color: #717171;
    margin-bottom: 3%;
    

`
S.EssayContainer=styled.div`
    width:100%;
    height:auto;
    border-radius:0.5rem;
    padding:2%;
    background-color: #CFDEC8 ;
`

export default S;