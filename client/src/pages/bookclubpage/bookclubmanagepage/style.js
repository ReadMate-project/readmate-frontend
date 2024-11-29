import styled from 'styled-components';
import theme from '../../../global/theme';
import { b1, b2, b3, flexCenter, flexCenterColumn, h1, h2, h3 } from '../../../global/common';

const S = {};

S.Container = styled.div`
  &.BookClubCU {
    width: 100%;
    height: 100%;
    background-color: ${theme.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5%;
  }
  &.BookList {
    width: 100%;
    height: 100%;
    background-color: ${theme.PALETTE.background};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5%;
  }
  
`;

S.TitleHighlight = styled.div`
  &.main {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
  }
  &.sub {
    display: flex;
    width: 25%;
    background-color: #86a789;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${h3};
    padding: 2%; /* 사다리꼴 크게하기 */
  }
  &.sub2 {
    display: flex;
    width: 25%;
    background-color: #dcbc9e;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${h3};
    padding: 1.5%; /* 사다리꼴 크게하기 */
  }
  &.sub3 {
    display: flex;
    width: 25%;
    background-color: #cfddc8;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${h3};
    padding: 1.5%; /* 사다리꼴 크게하기 */
  }
  &.sub4 {
    display: flex;
    width: 100%;
    background-color: #transparent;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    ${h1};
    padding: 1%; /* 사다리꼴 크게하기 */
  }
  &.sub5 {
    display: flex;
    width: 25%;
    background-color: #transparent;
    overflow: hidden;
    align-items: center;
    justify-content: flex-start;
    ${h1};
    padding: 1.5%; /* 사다리꼴 크게하기 */
  }

`;

S.TitleContainer = styled.div`
  &.main {
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
  &.sub {
    margin-left: 6%;
    width: 80%;
    display: flex;
    justify-content: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &.sub4 {
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

S.TitleButtonContainer = styled.div`
  &.CU {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1% 3% 1% 70%;
    gap: 1%; 
  }
`;

S.Button = styled.button`
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
  gap: 5%;
  ${b2};
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

S.left = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  
`;

S.CardSection = styled.div`
  &.BookClubCU {
    width: 80%;
    height: auto;
    justify-content: space-between;
    border-radius: 4vw;
    background-color: #fafef8;
  }
  &.BookList {
    width: 80%;
    padding: 0.5%;
    border-radius: 4vw;
    background-color: #FFFFFF;
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
  &.BookClubCU {
    margin: 1%; /* 게시글 사이의 간격 */
    background-color: #fafef8;
  }
  &.BookList {
    margin: 3%; /* 게시글 사이의 간격 */
    background-color: #ffffff;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1); /* drop shadow 효과 추가 */ 
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


S.Label = styled.span`
  color: transparent;
`;

export default S;
