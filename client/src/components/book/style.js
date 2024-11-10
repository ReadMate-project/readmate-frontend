import styled from "styled-components";
import theme from "../../global/theme";
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h3, logo } from "../../global/common";

const S = {};

S.BookComponent = styled.div`
    ${flexCenterColumn};
   
    background-color:white;
    padding: 10%;
    ${b2}
    width:12vw;
    height:280px;
    border-radius: 1rem;
    position:absolute;
    img{
        width:80%;
        height:75%;
        margin-bottom: 3%;
        object-fit: cover;
    }
    
    @media (max-width: 1024px) {
        
        height: 180px; 
    }

    @media (max-width: 768px) {
        
        height: 130px; 
    }

    @media (max-width: 480px) {
        
        height: 70px;
        border-radius: 0%;
    }
`; 

S.TextContianer=styled.div`
    position:relative;
    width:80%;
    div:nth-child(1) {
        ${b2}
        margin-bottom: 3%;
        
    }
    div:nth-child(2) {
        ${b4}
        color:#717171;
    }
`
export default S;