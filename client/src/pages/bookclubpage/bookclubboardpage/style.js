import styled from 'styled-components';
import theme from '../../../global/theme';
import { b1, flexCenter, flexCenterColumn, h1 } from '../../../global/common';

const S = {};

S.Container = styled.div`
  &.BookClubMVP {
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
  &.Challenge {
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
    ${h1};
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
    ${h1};
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
`;

S.TitleButtonContainer = styled.div`
  &.Host {
    width: 70%;
    display: flex;
    justify-content: flex-end;
    padding: 0% 0% 0% 35%;
    gap: 2%;
  }
  &.Guest {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    padding: 0% 0% 0% 45%;
    gap: 6%;
  }
`;

S.Button = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

S.CardSection = styled.div`
  &.BookClubMVP {
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
    border-radius: 4vw;
    background-color: #fafef8;
  }
  &.BookList {
    width: 80%;
    padding: 0.5%;
    border-radius: 4vw;
    background-color: #ded0b6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2%; /* 책 사이 간격 추가 */
  }
  &.Challenge {
    width: 80%;
    padding: 0.5%;
    border-radius: 4vw;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 2%; /* 책 사이 간격 추가 */
  }
  &.Challenger {
    width: 95%;
    
    border-radius: 2vw;
    border: 1px solid #999999;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2%;
    img{
      padding: 2%;
    }
  }
`;

S.Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2vw;
  &.BookClubDetail {
    margin: 1%; /* 게시글 사이의 간격 */
    background-color: #fafef8;
  }
  &.BookList {
    margin: 3%; /* 게시글 사이의 간격 */
    background-color: #ffffff;
  }
  &.Challenge {
    margin: 1%; /* 게시글 사이의 간격 */
    background-color: #ffffff;
  }
`;

S.HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5vw;
  padding: 1%;
  margin: 3%;
  margin-left: 7%;
  margin-right:7%;
  width: 30%;
  background-color: #FFFFFF;
  position: relative;
`;

S.Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15vh;
  padding: 5%;
`;

S.Rank = styled.img`
  position: absolute;
  width: 30%;
  top: 0;
  left: 0;
`;




export default S;
