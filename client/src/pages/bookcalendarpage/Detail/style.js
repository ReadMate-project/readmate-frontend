import styled from "styled-components";
import { h1 } from "../../../global/common";
import theme from "../../../global/theme";

const S={};

S.Background=styled.div`
    width: 100%;
    /* height:auto; */
    height:100vh;
    background-color:${theme.PALETTE.background};
    /* height:100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    /* overflow-x: hidden; */
    margin:5% 0;
   

`
S.Date=styled.div`
    ${h1};
    color: #717171;
    position: absolute;
    left:10%;
    
    /* padding-left: 10%; */

`
S.EssayContainer=styled.div`
    position: relative;
    top:10vh;
    width:80%;
    height:auto;
    border-radius:0.5rem;
    /* border-radius: 20px; */
    padding:2%;
    background-color: #CFDEC8 ;
`

export default S;