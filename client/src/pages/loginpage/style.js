import styled from "styled-components";
import { b1, b2, flexCenter, flexCenterColumn, h1, h2, h3 } from "../../global/common";
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
        width:70%;
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
    position: absolute;
    top:75%;
    cursor: pointer;
    
    img {
        width: 25vw; 
        
        
    }
    
`
//createnickname

S.NickNameComponent=styled.div`
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
`

S.Title=styled.div`
    ${flexCenterColumn};
     div:first-child {
        position: absolute;
        top:10%;
        font-size: ${theme.FONT_SIZE.h1};
        font-weight: 800;
    }
    div:nth-child(2) {
        position: absolute;
        top:18%;
        width:70%;
        height:2px;
        background-color: black;
    }

`
S.NickName=styled.div`
    width:70%;
    display:flex;
    ${b1};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:30%;
    input{
        position:relative;
        left: 4.5%;
        background-color: rgba(233, 232, 228, 0.55);  
        border: none;               
        padding: 2%;              
        width: 40%;                
        /* box-sizing: border-box;       */
        border-radius: 10px;          
        font-size: 1rem;
        outline: none;
    }
    div:nth-child(3) {
        ${b1};
        font-weight: 700;
        border:2px solid ${theme.PALETTE.green};
        color:${theme.PALETTE.green};
        padding:2%;
        border-radius: 10px ;
        cursor: pointer;
    }
        

`
S.Category=styled.div`
    width:70%;
    display:flex;
    ${b1};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:45%;
    
    div:first-child {
        
        
    }
    div:nth-child(2) {
        ${flexCenter};
        justify-content: space-between;
        ${b2};
        background-color: rgba(233, 232, 228, 0.55);  
        border: none;               
        padding: 0.8% 0.8% 0.8% 2%;              
        width: 70%;                
        border-radius: 10px;
        img{
            width:10%;
            cursor: pointer;
        }
    }

`
S.SignUp=styled.div`
    position: absolute;
    bottom:10%;
    width:70%;
    background-color: ${theme.PALETTE.green};
    text-align: center;
    ${h2};
    color:white;
    border-radius: 5px;
    padding: 1.8%;
    cursor: pointer;
`

export default S;