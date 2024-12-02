import styled from 'styled-components';
import { Link } from "react-router-dom";

import theme from '../../../global/theme';
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h2, h3 } from '../../../global/common';

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



S.HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &.BookList{
  gap: 5%;
  margin: 3%;

  }
  ${b2};
  &.BookClubCU{
  gap: 0%;
  margin:2%;
  }
`;

S.Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 20vh;
  &.type1 {
    width: 100%;
    height: 20vh;
  }
  &.type2 {
    display: flex;
    position: relative;
  }
  
`;
    
    

S.ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 20%;
  height: 35vh;
`

S.HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
`;

S.ContentTop = styled.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

S.ContentTitle = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &.BookClubDetail{
  ${b2};
  }
  &.BookList{
  ${b3};
  }
  p {
  ${b4};
  }
`;

S.ContentMore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5%;
  ${b2};  
`;

S.BookCategoryList = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 3%; /* 카테고리 간 간격 조정 */
`;

S.BookCategory = styled.div`
    
    flex-direction: row;
    padding: 1%;
    color: #2AA871;
    border:0.01vw solid #2AA871;
    border-radius: 0.5vw;  
    
`;

S.BookClubHost = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #2AA871;
  ${b3};
`;

S.ContentMiddle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  &.BookClubCU{
  ${b2};
  justify-content: flex-start;
  gap:2%;
  padding-left: 5%;
  margin-bottom: 1%;
  }
  &.BookList{
  ${b4};
  margin-top: 1%;
  margin-bottom: 2%;
  justify-content: space-between;
  }
`;

S.ContentInPut = styled.textarea`
  width: 25%;
  height: 4vh;
  ${b4};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #E9E8E4;
  border: none;
  border-radius: 0.5vw;
  resize: none;
  overflow: hidden;
  &.middle{
  width: 40%;
  }
  &.long{
  width:80%;
  }
`;

S.ContentFoot = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2%;
  ${b2};
  &.BookClubCU{
  margin-left:10%;
  margin-top:1%;
  ${b4};
  gap: 2%;
  justify-content: flex-start;
  }
`;

S.ContentPeriodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5vh;
  &.BookClubDetail{
  width: 30%;
  flex-direction: column;
  }
  &.BookList{
  width: 100%;
  }
`;

S.ContentPeriod = styled.div`
  display: flex;
  white-space: nowrap;
  background-color: #D9D9D9;
  border-radius: 0.3vw;
  align-items: center;
  ${b4};
  &.white{
  background-color: #ffffff;
  }
`;

S.ContentButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0% 0% 0% 0%;
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
    background-color: #FFFFFF;
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
    background-color: #FFFFFF;
  }
  &.BookList {
    margin: 3%; /* 게시글 사이의 간격 */
    background-color: #ffffff;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1); /* drop shadow 효과 추가 */ 
    }  
`;

S.Button = styled.button`
  margin: 1%;
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
  &.BookClubCU {
    display: flex;
    position: relative;
    alignt-items: center;
    justify-content: center;
    width: 100%;
    height: 1vh;
    left: 35%;
    bottom: 53%;
    border-radius: 2vw;
    
    
  }
  
`;


S.Label = styled.span`
  color: transparent;
`;

S.styledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    color: inherit;
`;


export default S;
