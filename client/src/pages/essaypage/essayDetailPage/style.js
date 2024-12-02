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
        width: 45px;  
        height: 45px;  
        overflow: hidden; 
        border-radius: 50%; 
        border: 1px solid #717171;
        img {
            width: 100%;
            height: 100%; 
            object-fit: cover; 
        }
        @media (max-width: 1024px) {
            width: 30px;
            height: 30px;
        }

        @media (max-width: 768px) {
            width: 20px;
            height: 20px;
        }

        @media (max-width: 480px) {
            width: 15px;
            height: 15px;
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
    &.line2{
        top:8vh;
    }
`
S.BookContainer=styled.div`
    /* position: absolute;
    top:30vh;
    left:-7%; */
    position: relative;
    left:-55%;
    top:7.3vh;
`
S.BodyContainer=styled.div`
    width: 80%;
    /* height:120vh; */
    height: auto;
    min-height: 300px;
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
    word-wrap: break-word; /* 텍스트가 박스를 벗어나지 않게 함 */
    word-break: break-word; /* 긴 단어가 있을 경우 자동으로 줄바꿈 */
    overflow-wrap: break-word;
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
S.IconContainer=styled.div`
    display: flex;
    align-self: flex-start;
    position:relative;
    top:7vh;
    left:10%;
    gap:8px;
`
S.LikeContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 3px; 
    cursor: pointer;
    font-size: ${b2};
    svg {
    font-size: ${h2};
    }
    svg path {
        fill: red ;
    }
    span {
        color: ${theme.PALETTE.gray};
        font-size: 1rem;
        font-weight: bold;
    }
    
`;

S.CommentContainer = styled.div`
  
  display: flex;
  align-items: center;
  margin-left: 7px;
  gap: 3px; 
  font-size: ${b2};
  color: ${theme.PALETTE.gray};
  svg {
    font-size: ${h2};
  }

`;

// delete
S.DeleteAccountContainer=styled.div`
    position:absolute;
    z-index: 999;
    width:50%;
    height:20%;
    min-height: 200px;
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