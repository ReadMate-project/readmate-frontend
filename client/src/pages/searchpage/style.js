import styled from 'styled-components';

import theme from '../../global/theme';
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h2, h3 } from '../../global/common';
import { Box, IconButton, TextField, Button } from '@mui/material';

const S = {};

S.Container = styled.div`
    &.bookDetails {
      width: 100%;
      height: 100%;
      background-color: ${theme.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10%;
    }
    &.bookReviews {
      width: 100%;
      height: 100%;
      background-color: #CFDDC8;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    &.bookClubs {
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
    &.bookDetails{
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
    }
    &.bookReviews{
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
    }
    &.bookClubs{
    width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
    }
`;

S.TitleContainer = styled.div`
     
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
`;

S.TitleButtonContainer=styled.div`
  &.bookDetails {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    padding: 0% 5% 0% 5%;
    gap: 2%;
    /* top:5vh; */
  }  
  &.bookList {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
  }
  &.bookClubs {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    padding: 0% 0% 0% 30%;
  }  
    
    
`;
S.Button=styled.button`
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: transparent;
    &.flexible{
    width: auto;
    }
`;
    

S.TitleButton=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${h3};
    width:100%;
    padding: 4%;
    border-radius: 0.5rem;
    color:white;
    background-color:#2AA871;
    border:2px solid ${theme.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
    &.goToWrite{
        background-color: white;
        color:#2AA871;
        border:2px solid ${theme.PALETTE.green};

    }
`;

S.CardSection = styled.div`
  &.BookInfoDetails {
    width: 80%;
    border-radius: 2vw;
    background-color: ${theme.PALETTE.background};
    flex-direction: column;
    display: flex;
    gap: 5%;
    margin-bottom: 1%;
    margin-top: 1%;
  }
  &.BookList {
    width: 100%;
    background-color: ${theme.PALETTE.background};
    flex-direction: column;
    display: flex;
    gap: 5%;
    margin-bottom: 1%;
    margin-top: 1%;
    max-height: 40vh; /* 최대 높이 설정 */
    overflow-y: auto; /* 세로 스크롤 추가 */
    scrollbar-color: #717171 transparent; /* 스크롤바 색상 조정 */
  }

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 12px; /* 스크롤바 길이 */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* 스크롤바 트랙 배경색 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2AA871; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 모서리 둥글게 */
    border: 3px solid transparent; /* 스크롤바 테두리 없애기 */
  }

  
`;



   

S.Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2vw;
  padding: 1%;
  background-color: #FFFFFF;
  
  &.BookClubList {
  margin: 3% 2% 3% 2%; /* 게시글 사이의 간격 */  
  }
  
`;

S.HeroSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  margin: 1%;
  padding: 1%;
  cursor: pointer; /* 커서 포인터로 변경 */
  &:hover {
    background-color: #CFDDC8; /* 배경색 변경 */
  }
  &.Modal {
    border: 1px solid #717171;
    margin: 0%;
    padding: 5%;
  }
`;


S.HeroSection2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
  gap: 2%;
  width: 100%;
`;

S.Image = styled.img`
  
  width: 20%;
  display: flex;  
  align-items: center;
  justify-content: center;
  
`;

S.Image2 = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
`;

S.ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

S.HeroContent = styled.div`

margin-right: 2%;    
padding-left: 2%;
font-weight: bold;
flex-direction: column;
justify-content: flex-start;
&.Modal{
  display:flex;
}  
`;

S.HeroContent2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  width: 900%;
`;

S.ContentTop = styled.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

S.ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1%;
  ${h1};
  &.BookInfoDetails{
    display: inline;
    font-size: 1.5vw;
    background-color: #A5D1B6;
    padding: 1%;
    border-radius: 0.5vw;
  }
  &.Modal{
    ${h2};
    margin-bottom: 5%;
  }
`;

S.ContentMore = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5%;
  ${b2};  
`;

S.BookCategoryList = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
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
  justify-content: flex-start;
  margin-top: 1%;
  ${b3};
  &.Modal{
    ${b2};
    padding: 1%;
    margin-bottom: 1%;
  }
`;

S.ContentFoot = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5%;
  ${b2};
`;

S.ContentPeriodContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5vh;
`;

S.ContentPeriod = styled.div`
  display: flex;
  white-space: nowrap;
  background-color: #D9D9D9;
  border-radius: 0.3vw;
  align-items: center;
  
  ${b2};
`;

S.ContentButtonContainer = styled.div`
  justify-content: flex-end;
  display: flex;
  align-items: center;
  padding: 0% 0% 0% 0%;
`;

S.ContentSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 1%;
  padding: 2%;
  border-radius: 1.5vw;
  background-color: #FFFFFF;
`;


S.ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  max-width: 800px;
  background-color: #E9E8E4;
  box-shadow: 24;
  padding: 3%;
  max-height: 70vh;
  border-radius: 8px;
`;

S.CloseButton = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

S.SearchForm = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1%;
  background-color: transparent;
  width: 100%;
`;

S.SearchInput = styled(TextField)`
  ${b2};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #717171;
  background-color: #FFFFFF;
  placeholder: {
    color: #717171;
  }
    
`;

S.SearchButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  background-color: transparent;
`;

S.ErrorMessage = styled(Box)`
  color: #f44336;
  margin-bottom: 16px;
  text-align: center;
`;

S.SearchResults = styled(Box)`
  margin-top: 16px;
  background-color: #E9E8E4;
`;

S.ResultGrid = styled(Box)`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

S.ResultCard = styled(Box)`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  &:hover {
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  }
`;

S.ResultImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

S.ResultTitle = styled.h3`
  margin: 8px 0;
  font-size: 1rem;
`;

S.ResultAuthor = styled.p`
  margin: 4px 0;
  color: #666;
`;

export default S;

