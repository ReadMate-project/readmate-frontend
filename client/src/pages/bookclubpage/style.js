import styled from "styled-components";
import theme from "../../global/theme";
import { b1, b2, b3, flexCenter, flexCenterColumn, h1, h2, h3, h4 } from "../../global/common";

const S = {};

S.Container = styled.div`
    &.HotBookclub {
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
  padding: 2%;
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
    
  width: 65%;
  display: flex;
  justify-content: flex-end;
  padding: 0% 0% 0.5% 50%;
  gap: 1%; 
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
  margin: 1%;
  gap: 2%;
  width: 100%;
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

S.ContentTop = styled.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

S.ContentTitle = styled.div`
  width:50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${h1};
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
  justify-content: space-between;
  margin-top: 2%;
  ${b3};
`;

S.ContentFoot = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2%;
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
  margin: 3% 2% 3% 2%; /* 게시글 사이의 간격 */  
  }
  &.BookClubList {
  margin: 3% 2% 3% 2%; /* 게시글 사이의 간격 */  
  }
  
`;


S.PaginationContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    left:45%;
    margin:5% 0;
    width:10%;
`;

S.PageButton = styled.button`
    ${b2}
    padding: 0% 7%;
    border-radius: 50%;
    border: none;
    background-color: #D9D9D9;
    color: black;
    cursor: pointer;
     background-color: ${({ isActive}) =>
    isActive ? '#717171' : 'transparent'};
    color: ${({ isActive}) =>
    isActive ? 'white' : 'black'};
    
`;



S.DropdownContainer = styled.div`
    width: 80%;
    margin-bottom: 2%;
    display: inline-block;
    ${b2};
`;

S.SelectedOption = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;
    color: #717171;
    border: 1px solid #717171;
    background-color: #FFFFFF;
    border-radius: 0.5vw;
    cursor: pointer;

`;

S.OptionsContainer = styled.div`
    position: relative;
    width: 20%;
    border: 1px solid #717171;
    border-radius: 0.5vw;
    background-color: #ffffff;
    z-index: 1;
`;

S.Option = styled.div`
    padding: 3%;
    cursor: pointer;
    color: #717171;

    &:hover {
        background-color: #CFDDC8;
        color: #2AA871;
    }
`;




export default S;
