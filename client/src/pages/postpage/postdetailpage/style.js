import styled from "styled-components";
import { b1, b2, b4, flexCenter, flexCenterColumn, h1, h2, h3, logo } from "../../../global/common";
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
S.UserInfo=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    line-height: 1.3;
`

S.UserName=styled.div`
    ${b2}
`

S.CreatedAt=styled.div`
    ${b4}
    color:#717171;
`

S.TitleHeader = styled.div`
    position:relative;
    top:7vh;
    padding:1%;
    display: flex;
    align-items: center;
    gap:1%;
    span{
        width:7%;
        img{
            width:100%;
        }
    }
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
    height:120vh;
    height: auto;
    background-color: white;
    margin-bottom: 2%;
    border-radius: 1rem;
    padding:2%;
    position:relative;
    top:7vh;
    
    
`
S.PostTitle=styled.div`
    ${h1}
    padding-top: 1%;
    padding-bottom: 4%;
`
S.PostContent=styled.div`
    ${b1}
    padding-bottom: 4%;
`
S.ImageContainer=styled.div`
    width:100%;
    
    img{
        width:100%;
        padding-bottom: 1%;
    }
`

S.ButtonContainer = styled.div`
    display: flex;
    width:25%;
    text-align: center;
    position:absolute;
    /* top:15%; */
    right:0%;
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

S.DeleteAccountContainer=styled.div`
    position:absolute;
    z-index: 999;
    width:50%;
    height:20%;
    background-color:#E9E8E4 ;
    left:25%;
    /* bottom:5%; */
    ${flexCenterColumn}
    border-radius: 1rem;

` 
S.DeleteText=styled.div`
    position:absolute;
    top:30%;
    ${h3}
    text-align: center;
`
S.DeleteButtonContainer=styled.div`
    position:absolute;
    top:65%;    
    display: flex;
    justify-content: center;
    width:50%;
    position: absolute;

    /* right:10%; */
`
S.CancelButton=styled.div`
    ${flexCenter}
    ${h3};
    width:30%;
    padding: 2%;
    margin:3%;
    border-radius: 0.5rem;
    background-color: white;
    color:#2AA871;
    border:2px solid ${theme.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`
S.DeleteButton=styled.div`
    ${flexCenter}
    ${h3};
    width:30%;
    padding: 2%;
    margin:3%;
    border-radius: 0.5rem;
    color:white;
    background-color:#2AA871;
    border:2px solid ${theme.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`
export default S;