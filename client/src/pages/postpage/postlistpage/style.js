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
`
S.TitleContainer = styled.div`
    ${logo}; 
    width: 100%;
    padding: 7% 10% 3% 10%;
    display: flex;
    justify-content: space-between;
               
`
 
S.TitleText = styled.div`
    padding:1%;
    
           
`
S.TitleButtonContainer=styled.div`
    display: flex;
    /* ${flexCenter} */
    justify-content: space-between;
    width:25%;
`

S.TitleButton=styled.div`
    ${h3};
    width:45%;
    padding: 4%;
    text-align: center;
    border-radius: 10px;
    color:white;
    /* background-color:#A2B29F; */
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
    width:80%;
    /* margin:0% 10%; */
    height:auto;
    border-radius: 20px;
    padding:2%;
    background-color: #CFDEC8 ;
`
S.HotPostTitle=styled.div`
    ${h1}
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
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    /* height:100%; */
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

S.PostTitle = styled.div`
    ${h3}; 
    font-weight: bold;
    color: #333;
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
  width: 80%;
  height:auto;
  /* height:100vh; */
  margin-top: 1%;
  padding: 2%;
  /* background-color: #D9D9D9; */
  border-radius: 20px;
  
`;


S.PaginationContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
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