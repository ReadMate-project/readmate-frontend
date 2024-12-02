import styled from 'styled-components';
import { Link } from "react-router-dom";

import theme from '../../../global/theme';
import { b1, b2, b4, flexCenter, flexCenterColumn, h1, h2, h3 } from '../../../global/common';

const S = {};

S.Container = styled.div`
  &.BookClubMVP {
    width: 100%;
    height: 100%;
    background-color: ${theme.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5%;
  }
  &.PostList {
    width: 100%;
    height:auto;
    background-color:${theme.PALETTE.background};
    /* height:100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
  }
  &.Noti {
    width: 100%;
    height: 100%;
    background-color: ${theme.PALETTE.background};
    display: flex;
    align-items: center;
    justify-content: center;
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
  margin-left: 10%;
  margin-right:10%;
  width: 30%;
  height: 15vh;
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

S.PostList = styled.div`
    width: 100%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 15px; /* 게시글 사이의 간격 */
`;

S.PostItem = styled.div`
    padding: 1.5%;
    padding-right: 7%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    /* height:100%; */
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
`;
S.TitleBody = styled.div`
    display: flex; 
    gap: 3px;
    flex-direction: column;
`;

S.PostTitle = styled.div`
    ${h2}; 
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
    flex-direction: row;
    p{
      font-size: ${h3};
      color: ${theme.PALETTE.gray};
      margin-left: 1%;
    }
     

`;

S.PostContent = styled.div`
    ${b4}; 
    padding-left: 0.5%;
    color: #717171;
    overflow: hidden;
    text-overflow: ellipsis;
    &.DoNowrap{
      white-space: nowrap;
    } 
`;

S.UnderTitleContainer=styled.div`
    display: flex;
    align-items: center; 
    position:relative;
    
`

S.PostInfo = styled.div`
    padding-left: 1%;
    font-size: ${b4};
    color: ${theme.PALETTE.darkGray};
`;
S.LikeContainer = styled.div`

  display: flex;
  align-items: center;
  gap: 3px; /* 아이콘과 좋아요 개수 사이 간격 */
    cursor: pointer;
  font-size: ${b4};
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
S.NotificationContainer=styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #999999;
  border-radius: 0.5rem;
  flex-direction: column;
`;

S.NotiSection = styled.div`
  width: 90%;
  margin-bottom:2%;
`

S.NotiTitle = styled.div`
  width: 90%;
  font-weight: bold;
  display: flex;
  padding-top: 2%;
  flex-direction:row;
  color: #FFFFFF;
  position: relative;
  font-size: ${h3};
`;

S.NotiImg = styled.img`
  display: flex;
  width: 2%;
  margin-right: 1%;
`;

S.PostImage=styled.div`
    position: absolute;
    border:none;
    right:1.5%;
    
    img{
        width:60px;
        height:55px;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:35px;
            height:35px;
        }

        @media (max-width: 768px) {
            width:25px;
            height:25px;
        }

        @media (max-width: 480px) {
            width:20px;
            height:20px;
        }
    }
`
S.LatestPostContainer = styled.div`
    top:5vh;
    width: 80%;
    height:auto;
    margin-bottom: 10%;
    padding: 2%;
    background-color: #D9D9D9;
    border-radius: 0.5rem;
  
`;

S.PaginationContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    left:45%;
    /* gap: 10px; */
    margin:3% 0;
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

S.styledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    color: inherit;
`;

export default S;
