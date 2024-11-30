import styled from 'styled-components';
import theme from '../../../global/theme';
import { h1, h2, h3, b1, b2, b3, b4, flexCenter, flexCenterColumn } from "../../../global/common";

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
    width: 35%;
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
  &.bookReviews {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    padding: 0% 0% 0% 50%;
    gap: 2%;
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
  &.BookInfoDetails{
  width: 80%;
  border-radius: 2vw;
  background-color: #FFFFFF;
  display: flex;
  margin-bottom: 1%;
  margin-top: 1%;
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
  
  &.BookClubList {
  margin: 3% 2% 3% 2%; /* 게시글 사이의 간격 */  
  }
  
`;

S.HeroSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1%;
  padding: 1%;
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

S.HeroContent = styled.div`

margin-right: 2%;    
padding-left: 2%;
font-weight: bold;
flex-direction: column;
justify-content: flex-start;
  
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
  ${h1};
  &.BookInfoDetails{
    display: inline;
    font-size: 1.5vw;
    background-color: #A5D1B6;
    padding: 1%;
    border-radius: 0.5vw;
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
  background-color:  ${theme.PALETTE.background};;
`;

S.PostList = styled.div`
    width: 80%;
    margin-top: 1%;
    margin-bottom: 3%;
    display: flex;
    flex-direction: column;
    gap: 5vh; /* 게시글 사이의 간격 */
    margin-bottom: 5%;
`;

S.PostItem = styled.div`
    padding: 1.5%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position:relative;
`;

S.PostInfo = styled.div`
    padding-left: 5%;
    /* width:50%; */
    ${b4}
    color: ${theme.PALETTE.darkGray};
    white-space: nowrap; 
`;

S.PostContainer=styled.div`
    display: flex;
    justify-content: flex-start;
    width:100%;
`;

S.BookContainer=styled.div`
    width:8%;
    line-height: 1.3;
`;

S.TextContainer = styled.div`
    width:90%;
    display: flex;
    margin-left: 5%;
    padding:1% 0;
`;

S.BookImage=styled.div`
    
    /* width:100%; */
    

    img{
        width:90px;
        height:140px;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:50px;
            height:85px;
        }

        @media (max-width: 768px) {
            width:30px;
            height:50px;
        }

        @media (max-width: 480px) {
            width:20px;
            height:35px;
        }
    }
`;

S.TitleBody = styled.div`
   
    
`;

S.PostTitle = styled.div`
    ${h3}; 
    font-weight: bold;
    color: #333;
    white-space: nowrap; 
`;

S.PostContent = styled.div`
    ${b4}; 
    color: #717171;
    /* white-space: nowrap;  */
    overflow: hidden;
    text-overflow: ellipsis;
    max-height:40%;
    padding-left: 0.1%;
    padding-top: 1%;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 원하는 줄 수로 변경 가능 */
    -webkit-box-orient: vertical;
`;

S.UnderTitleContainer=styled.div`
    display: flex;
    /* align-items: center;  */
    
    position:absolute;
    bottom:12.5%;
    
`;

S.LikeContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 5px; /* 아이콘과 좋아요 개수 사이 간격 */
    cursor: pointer;
    ${b4};
    color: ${theme.PALETTE.gray};
    svg {
        font-size: ${b2};
        transition: color 0.3s ease;
    }
    span {
        font-size: 1rem;
        font-weight: bold;
    }

`;
S.CommentContainer = styled.div`
  
    display: flex;
    align-items: center;
    margin-left: 7px;
    gap: 3px; /* 아이콘과 좋아요 개수 사이 간격 */
    font-size: ${b4};
    color: ${theme.PALETTE.gray};
    svg {
        font-size: ${b2};
    }

`;
export default S;
