import styled from 'styled-components';
import theme from '../../../global/theme';
import { b1, b2, b4, flexCenter, flexCenterColumn, h3 } from "../../../global/common";

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
  width: 80%;
  border-radius: 2vw 2vw;
  background-color: #FFFFFF;
  display: flex;
  margin-bottom: 1%;
  margin-top: 1%;
`;

S.HeroSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1%;
  padding: 1%;
`;

S.Image = styled.img`
  
  width: 20%;
  display: flex;  
  align-items: center;
  justify-content: center;
  
`;

S.HeroContent = styled.div`

margin-right: 2%;    
padding-left: 2%;
font-weight: bold;
flex-direction: column;
justify-content: flex-start;
font-family: 'Roboto';  
  h1 {
    display: inline;
    font-size: 1.5vw;
    background-color: #CFDDC8;
    padding: 1% 
  }
  p {
    display: flex;
    margin: 2% 0% 2% 0%;
    font-size: 1vw;
  }
  a {
    
    display: inline-block;
    padding: 0.375vw 0.75vw;
    background-color: #D9D9D9;
    color: #717171;
    text-decoration: none;
    border-radius: 0.25vw;  
    

  }
`;

S.ContentSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 1%;
  padding: 1%;
  border-radius: 1vw;
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
    margin-left: 2%;
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
