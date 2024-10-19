import styled from "styled-components";
import { b1, b4, h3,h1,b3, flexCenterColumn } from "../../../global/common";
import theme from "../../../global/theme";

const S={};

S.Component=styled.div`
    font-family: 'Pretandard';
    ${h3};
    position:relative;
    width:600px;
    height:370px;
    margin:auto;
    padding: 3% 5% 2% 5%;
    border-radius: 1rem;
    background-color:white;
    /* background-color: ${({ isOverlay }) => (isOverlay ? 'rgba(0, 0, 0, 0.3)' : 'white')}; */

    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 400px; 
        height: 247px; 
    }

    @media (max-width: 768px) {
        width: 300px; 
        height: 185px; 
    }

    @media (max-width: 480px) {
        width: 270px; 
        height: 166.5px;
    }
`
S.Title=styled.div`
    ${flexCenterColumn};
     div:first-child {
        position: absolute;
        top:10%;
        left:12.5%;
        ${h1};
    }
    div:nth-child(2) {
        position: absolute;
        top:20%;
        width:75%;
        height:2px;
        background-color: black;
      
    }

`

S.Button=styled.div`
    position:absolute;
    top:8%;
    right:12.5%;
    ${b1};
    width:14%;
    padding:2.5%;
    line-height: 25%;
    text-align: center;
    border-radius: 0.5rem;
    color:white;
    background-color:${theme.PALETTE.darkGray};
    cursor: pointer;
`
S.ProfilePicture=styled.div`
    width:70%;
    display:flex;
    ${b1};
    font-weight: 700;
    /* justify-content: space-between; */
    align-items: center;
    position: absolute;
    top:25%;
    white-space: nowrap;
    
`
S.Profile=styled.div`
    width: 60px;  
    height: 60px;  
    overflow: hidden; 
    border-radius: 50%; 
    margin: 0 7.5%;
    img {
        width: 100%;
        height: 100%; 
        object-fit: cover; 
    }
    @media (max-width: 1024px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 480px) {
        width: 20px;
        height: 20px;
    }
`


S.ImageButtonContainer=styled.div`

    @media (max-width: 1024px) {
        img {
            width: 60%;
            
        }
    }

    @media (max-width: 768px) {
        img {
            width: 40%;
            
        }
    }

    @media (max-width: 480px) {
        img {
            width: 20%;
        }
    }
`

S.Introduce=styled.div`
    width:70%;
    display:flex;
    ${b1};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:45%;
    
    input{
        position:relative;
        background-color: rgba(233, 232, 228, 0.55);  
        border: none;               
        padding: 1.5%;
        padding-left: 3%;              
        width: 60%;                
        border-radius: 10px;          
        ${b4}
        outline: none;
        margin-left: 8%;
        
    }
    input::placeholder {
            color: #999999;  
            ${b4}  
        }
    & #count{
        ${b4}
        color: #999999;
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
    top:60%;
    input{
        position:relative;
        left: 5%;
        background-color: rgba(233, 232, 228, 0.55);  
        border: none;               
        padding: 1.5%;              
        width: 40%;                
        /* box-sizing: border-box;       */
        border-radius: 10px;          
        ${b3}
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
    top:75%;
    
    input{
        position:relative;
        background-color: rgba(233, 232, 228, 0.55);  
        border: none;               
        padding: 1.5%;
        padding-left: 3%;              
        width: 60%;                
        border-radius: 10px;          
        ${b4}
        outline: none;
        
    }
    input::placeholder {
            color: #999999;  
            ${b4}  
        }
    img {
        width:7%;
        cursor: pointer;
    }

`

export default S;