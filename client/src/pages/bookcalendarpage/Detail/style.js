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
S.TitleHightLight=styled.div`
        /* position: absolute; */
        position:relative;
        /* top:15%; */
        /* top:110px; */
        /* top:10vh; */
        /* top:13%;
        left:10%;
        width:28%;
        img{
            width:100%
        } */
        position: absolute;
        top:18%;
        left:10%;
        width:28%;
        img{
            width:100%
        }
`

S.Date=styled.div`
    ${h1};
    color: #717171;
    position: absolute;
    /* position:relative; */
    left:10%;
    top:33%;
    /* padding-left: 10%; */

`
S.EssayContainer=styled.div`
    position: relative;
    top:27%;
    width:80%;
    height:auto;
    border-radius:0.5rem;
    /* border-radius: 20px; */
    padding:2%;
    background-color: #CFDEC8 ;
`

export default S;