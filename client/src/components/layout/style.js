import styled from "styled-components";
import theme from "../../global/theme";
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h3, logo } from "../../global/common";

const S = {};

S.Container = styled.div`
    ${flexCenterColumn};
    background-color: ${theme.PALETTE.background};
    height:auto;
    min-height: 100vh;
`; 
S.Header=styled.div`
    width: 100%;
    /* height: 5%; */
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    padding: 1% 5% 1% 5%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1); 

` 
S.Footer=styled.div`
    width:100%;
    /* height:5%; */
    background-color: white;
    ${h3}
    font-family: 'TransFormaScript';
    font-weight:500;
    padding-top:1.6%;
    padding-bottom: 1.4%;
    text-align: center;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1); 
`
// main
S.Main = styled.main`
    width: 100%;
    flex-grow: 1; //main에 오는 페이지가 헤더와 푸터 사이의 남은 공간을 차지하도록 함
    /* min-height: 90%; */
    
   `;

S.Logo=styled.div`
    width:16vw;
    ${logo}
    font-weight:800;
    cursor:pointer;
    
`
// navigation
S.Nav = styled.nav`
    ${b1};
    display: flex;
    
    & a {
        
        margin:0 1.5vw;
        &.active {
            color: ${theme.PALETTE.green};
        }
    }
    
   
`;

S.SearchForm = styled.form`
  display: flex;
  align-items: center;
  ::placeholder {
    color: #999999;
   
  }
`;

S.SearchInput = styled.input`
  
  width: 15vw;
  padding: 1.5%;
  padding-left: 3%;
  border-radius: 10px;
  border:2px solid #999999;
  outline: none;
  ${b2} 
  
`;

S.SearchButton = styled.button`
  ${b1};
  padding-left:2%;
  background-color: transparent;
  border: 1px solid transparent;
  display: flex;
  img {
    width: 2vw;
  }
  cursor: pointer;
  
  &:hover {
    background-color: transparent;
  }
`;    

export default S;

