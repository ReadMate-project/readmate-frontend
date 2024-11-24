import styled from "styled-components";
import theme from "../../../global/theme";
import { b1, flexCenter, flexCenterColumn, h1 } from "../../../global/common";

const S = {};

S.Container = styled.div`
    &.BookClubDetail {
      width: 100%;
      height: 100%;
      background-color: ${theme.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10%;
    }
    &.BookClubList {
      width: 100%;
      height: 100%;
      background-color: ${theme.PALETTE.background};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 10%;

    }
    &.Notice {
      width: 100%;
      height: 100%;
      background-color: ${theme.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10%;
    }
 
`;

S.TitleHighlight = styled.div`
  &.main{  
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  }
  &.sub{ 
  display: flex;
  width: 25%;
  background-color: #86A789;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  ${h1};
  padding: 2%; /* 사다리꼴 크게하기 */
  }
`;

S.TitleContainer = styled.div`
  &.main{
    width: 80%; 
    display: flex;
    justify-content: flex;
    align-items: center;
    gap: 10%;
    margin-top: 10%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &.sub{
    margin-left:6%;
    width: 80%; 
    display: flex;
    justify-content: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }   
`; 

S.TitleButtonContainer=styled.div`
    &.Host{  
        width: 70%;
        display: flex;
        justify-content: flex-end;
        padding: 0% 0% 0% 30%;
        gap: 2%;
        }
    &.Guest{
        width: 70%;
        display: flex;
        justify-content: flex-start;
        padding: 0% 0% 0% 40%;
        gap: 6%;
        }
`;

S.Button=styled.button`
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: transparent;
`;

S.HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3%;
  width: 100%;
  gap:5%;
`;


S.Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
`;


S.HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  width: 900%;
`;


S.CardSection = styled.div`
  &.HotBookclub {
    width: 80%;
    height: auto;
    justify-content: space-between;
    border-radius: 4vw;
    background-color: #CFDDC8;
  }
  &.BookClubList {
    width: 80%;
    height: auto;
    justify-content: space-between;
    border-radius: 2vw;
    background-color: #D9D9D9;
  }
  
`;

S.Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2vw;
  padding: 1%;
  background-color: #FFFFFF;
  
  &.HotBookclub {
  margin: 3% 3% 3% 3%; /* 게시글 사이의 간격 */  
  }
  &.BookClubList {
  margin: 3% 3% 6% 3%; /* 게시글 사이의 간격 */  
  }
  
`;

export default S;