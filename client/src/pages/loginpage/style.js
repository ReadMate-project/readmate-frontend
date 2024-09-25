import styled from "styled-components";
import { flexCenter, flexCenterColumn, h1, h3 } from "../../global/common";
import theme from "../../global/theme";

const S={};
S.Background=styled.div`
    width:100vw;
    height:100vh;
`
S.LoginComponent=styled.div`
    ${flexCenterColumn};
    font-family: 'Pretandard';
    ${h3};
    position:relative;
    width:50%;
    height:70%;
    margin:auto;
    transform: translate(0, 30%);
    border-radius: 20px;
    background-color:white;  
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

    div:first-child {
        position: absolute;
        top:10%;
        font-size: ${theme.FONT_SIZE.h1};
        font-weight: 800;
        
    }
    div:nth-child(2) {
        position: absolute;
        top:18%;
        width:60%;
        height:2px;
        background-color: black;
    }
    div:nth-child(3) {
        position: absolute;
        top:40%;
        
    }
    div:nth-child(4) {
        position: absolute;
        top:50%;
        
    }
    span{
        font-family: 'TransformaScript';
    }
`

S.kakaoLoginButton=styled.div`
    /* width:100%; */
    position: absolute;
    top:80%;
    cursor: pointer;
    img {
        width: 100%; 
        /* height: auto;  */
        /* object-fit: cover;  */
    }
    
`

export default S;