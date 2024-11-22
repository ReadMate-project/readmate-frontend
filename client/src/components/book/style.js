import styled from "styled-components";
import theme from "../../global/theme";
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h3, logo } from "../../global/common";

const S = {};

S.BookComponent = styled.div`
    ${flexCenterColumn};
    background-color:white;
    padding: 20px;
    ${b2}
    width:10vw;
    height:auto;
    border-radius: 1rem;
    position:absolute;
    img{
        width:100%;
        margin-bottom: 3%;
        object-fit: cover;
    }
    
    @media (max-width: 1024px) {
        padding: 15px;
        
    }

    @media (max-width: 768px) {
        padding: 10px;
         
    }

    @media (max-width: 480px) {
        padding: 5px;
        
    }
`; 

S.TextContianer=styled.div`
    position:relative;
    width:100%;
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