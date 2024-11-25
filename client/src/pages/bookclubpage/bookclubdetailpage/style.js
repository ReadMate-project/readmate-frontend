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
    &.BookList {
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
  &.sub2{ 
  display: flex;
  width: 25%;
  background-color: #DCBC9E;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  ${h1};
  padding: 1.5%; /* 사다리꼴 크게하기 */
  }
  &.sub3{
  display: flex;
  width: 25%;
  background-color: #CFDDC8;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  ${h1};
  padding: 1.5%; /* 사다리꼴 크게하기 */
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
        padding: 0% 0% 0% 35%;
        gap: 2%;
        }
    &.Guest{
        width: 70%;
        display: flex;
        justify-content: flex-start;
        padding: 0% 0% 0% 45%;
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
  &.BookClubDetail {
    width: 80%;
    height: auto;
    justify-content: space-between;
    border-radius: 4vw;
    background-color: #FAFEF8;
  }
  &.BookList {
    width: 80%;
    padding: 0.5%;
    border-radius: 4vw;
    background-color: #DED0B6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2%; /* 책 사이 간격 추가 */
  }
  
`;

S.Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2vw;  
  &.BookClubDetail {
  margin: 1% /* 게시글 사이의 간격 */ 
  background-color: #FAFEF8;
  }
  &.BookList {
  margin: 3% 3% 3% 3%; /* 게시글 사이의 간격 */  
  background-color: #FFFFFF;

  }
  
`;

S.Button = styled.button`
  margin: 2%;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  
  &:disabled {
      
      opacity: 0.3; // Makes the button appear faded
      filter: grayscale(0%); // Makes the button grayscale when disabled
    }

    &:not(:disabled):hover {
      transform: scale(1.1); // Slight zoom effect on hover when enabled
    }
  `;
export default S;