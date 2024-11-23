import styled from 'styled-components'
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h2, h3, logo } from '../../../global/common';
import theme from '../../../global/theme';

const S={};

S.Container=styled.div`
    width: 100%;
    height:auto;
    background-color:${theme.PALETTE.background};
    /* height:100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
`
S.TitleContainer = styled.div`
     
    width: 100%;
    padding: 3% 10% 3% 10%;
    display: flex;
    justify-content: space-between;
               
`
 
S.TitleHightlight = styled.div`
   
    width:100%;
    height:100%;
    img{
        position:relative;
        
        width:15%;
        margin-left:10%;
        margin-top: 5%;
    }             
`
S.TitleButtonContainer=styled.div`
    display: flex;
    justify-content: space-between;
    width:20%;
    position: absolute;
    right:0%;
    /* top:5vh; */
`

S.TitleButton=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${h3};
    width:50%;
    padding: 4%;
    border-radius: 0.5rem;
    background-color: white;
    color:#2AA871;
    border:2px solid ${theme.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`
S.HotPostContainer=styled.div`
    position: relative;
    top:5vh;
    width:80%;
    height:auto;
    border-radius:0.5rem;
    /* border-radius: 20px; */
    padding:2%;
    background-color: #CFDEC8 ;
`
S.HotPostTitle=styled.div`
    position:relative;
    width:100%;
    height:100%;
    left: 10.5%;
    top:5.3vh;
    
    img{
        width:20%;
    }
    
`
//
S.PostContainer=styled.div`
    display: flex;
    justify-content: flex-start;
    width:100%;
`
S.TextContainer = styled.div`
    width:90%;
    margin-left: 2%;
   
`;
S.BookContainer=styled.div`
    width:8%;
    line-height: 1.3;
`
S.BookImage=styled.div`
    
    /* width:100%; */
    

    img{
        width:80px;
        height:120px;
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
`
S.BookTitle=styled.div`
    ${b2}
    padding-left: 3%;
`
S.Writer=styled.div`
    ${b4}
    padding-left: 3%;
    color:#717171;
`
S.PostList = styled.div`
    width: 100%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    gap: 15px; /* 게시글 사이의 간격 */
`;

S.PostItem = styled.div`
    padding: 1.5%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    height:150px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position:relative;
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
    max-height:50%;
    padding-left: 0.1%;
    padding-top:1%;
    padding-bottom:1.5%;
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 원하는 줄 수로 변경 가능 */
    -webkit-box-orient: vertical;
`;

S.UnderTitleContainer=styled.div`
    display: flex;
    position:absolute;
    bottom:12.5%;
    
`

S.PostInfo = styled.div`
    padding-left: 5%;
    /* width:50%; */
    ${b4}
    color: ${theme.PALETTE.darkGray};
    white-space: nowrap; 
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
    ${b4}
    color: ${theme.PALETTE.gray};
    svg {
        font-size: ${b2};
    }

`;
S.LatestPostContainer = styled.div`
    position: relative;
    top:5vh;
    width: 80%;
    height:auto;
    margin-top: 3%;
    margin-bottom: 10%;
    padding: 2%;
    background-color: #D9D9D9;
    border-radius: 0.5rem;
  
`;
//페이지네이션
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
export default S;