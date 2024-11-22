import styled from "styled-components";
import { b1, flexCenter, flexCenterColumn, h1, h2, h3, logo } from "../../../global/common";
import theme from "../../../global/theme";

const S={};

S.Container=styled.div`
    width: 80%;
    height:auto;
    background-color: ${theme.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-bottom: 10%;
    margin: 0 auto;
`
S.TitleHightlight = styled.div`
    position:relative;
    width:100%;
    height:100%;
    img{
        position:relative;
        /* top:-3vh; */
        width:25%;
        
    }          
`
S.TitleContainer = styled.div`
    
    ${logo};
    width: 100%;
    padding: 7% 10% 0% 10%;
               
`
 
S.TitleText = styled.div`
    position:relative;
    top:7vh;
    padding:1%;
           
`

S.Line=styled.div`
    width:80%;
    height:1px;
    margin-bottom: 2%;
    background-color:black;
    position:relative;
    top:7vh;
`

S.BodyContainer=styled.div`
  
    width: 80%;
    height:600px;
    @media (max-width: 1024px) {
        
        height: 400px; 
    }

    @media (max-width: 768px) {
        height: 300px;  
    }

    @media (max-width: 480px) {
        height: 200px; 
    }
   
    background-color: white;
    margin-bottom: 2%;
    border-radius: 20px;
    padding:2%;
    position:relative;
    top:7vh;
    overflow-y: auto;
    & #title{
        width:100%;
        height:15%;
        border: none; 
        outline: none;
        border-bottom: 1px solid gray;
        font-size:${theme.FONT_SIZE.h1};
        ${h2}
    }

    & #body{
        width:100%;
        height:50%;
        resize: none;
        border: none; 
        border-bottom: 1px solid gray;
        outline: none;
        padding:2% 0px;
        ${b1};
    }
`
S.ImagePreviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
    
`;

S.ImageButtonContainer=styled.div`
    width:100%;
    img{
        width:15%;
    }
`
S.ImagePreview = styled.div`
    position: relative;
    width:140px;
    height:140px;
    @media (max-width: 1024px) {
        
        width: 90px;
        height:90px;
    }

    @media (max-width: 768px) {
        width: 60px;
        height:60px;
    }

    @media (max-width: 480px) {
        width: 40px; 
        height:40px;
    }
    img{
        position:absolute;
        /* top:-100%; */
        width:100%;
        height:100%;
        border-radius: 0.5rem;
    }
`;

S.RemoveButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #717171;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    width: 25px;
    height: 25px;
    font-size: 12px;
`;
S.ButtonContainer = styled.div`
    display: flex;
    width:20%;
    text-align: center;
    position:relative;
    top:7vh;
    left:30%;
`
S.Button=styled.div`
    ${h3};
    width:80%;
    padding:4% 0;
    margin-left: 10%;
    ${flexCenter}
    height:70%;
    text-align: center;
    border-radius: 0.5rem;
    color:white;
    background-color:${theme.PALETTE.darkGray};
    cursor: pointer;
`
export default S;