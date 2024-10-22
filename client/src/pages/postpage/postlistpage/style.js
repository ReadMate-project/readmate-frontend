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
    right:10%;
    /* top:5vh; */
`

S.TitleButton=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${h3};
    width:45%;
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
    /* height:100%; */
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
S.TitleBody = styled.div`
    display: flex;
    align-items: center;
    
`;

S.PostTitle = styled.div`
    ${h3}; 
    font-weight: bold;
    color: #333;
    white-space: nowrap; 
`;

S.PostContent = styled.div`
    ${b4}; 
    padding-left: 0.5%;
    color: #717171;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
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
  gap: 5px; /* 아이콘과 좋아요 개수 사이 간격 */
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

S.LatestPostContainer = styled.div`
    position: relative;
    top:5vh;
    width: 80%;
    height:auto;
    /* height:100vh; */
    margin-top: 3%;
    padding: 2%;
    background-color: #D9D9D9;
    border-radius: 0.5rem;
  
`;


S.PaginationContainer = styled.div`
    position: relative;
    /* top:5vh; */
    display: flex;
    justify-content: center;
    gap: 10px;
    margin:5% 0;
`;

S.PageButton = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    /* background-color: #A2B29F; */
    color: black;
    cursor: pointer;
    font-size: 1rem;
    
    /* 비활성화된 버튼 스타일 */
    /* &:disabled {
        background-color: #CFDEC8; 
        cursor: not-allowed;
    } */
`;

export default S;