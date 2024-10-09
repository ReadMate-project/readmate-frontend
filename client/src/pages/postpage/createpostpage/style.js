import styled from "styled-components";
import { b1, flexCenter, flexCenterColumn, h1, h2, h3, logo } from "../../../global/common";
import theme from "../../../global/theme";

const S={};

S.Container=styled.div`
    width: 100%;
    height:auto;
    background-color: ${theme.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
`

S.TitleContainer = styled.div`
    ${logo};
    width: 100%;
    padding: 7% 10% 0% 10%;
    display: flex;
    justify-content: space-between;
               
`
 
S.TitleText = styled.div`
    padding:1%;
           
`
S.ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:20%;
    text-align: center;
`
S.Button=styled.div`
    ${h3};
    width:80%;
    margin-left: 10%;
    ${flexCenter}
    height:70%;
    text-align: center;
    border-radius: 8px;
    color:white;
    background-color:${theme.PALETTE.darkGray};
    cursor: pointer;
`
S.Line=styled.div`
    width:80%;
    height:1px;
    margin-bottom: 2%;
    background-color:black;
`

S.BodyContainer=styled.div`
    width: 80%;
    height:120vh;
    background-color: white;
    margin-bottom: 2%;
    border-radius: 20px;
    padding:2%;
    
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
        height:65%;
        resize: none;
        border: none; 
        border-bottom: 1px solid gray;
        outline: none;
        padding:2%;
        ${b1};
    }
`
S.ImagePreviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
`;

S.ImagePreview = styled.div`
    position: relative;
    /* width: 7vw;
    height: 10vh; */
    width:100px;
    height:100px;
    img{
        position:absolute;
        /* top:-100%; */
        width:100%;
        height:100%;
        border-radius: 10px;
    }
`;

S.RemoveButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    width: 20px;
    height: 20px;
    font-size: 12px;
`;

export default S;