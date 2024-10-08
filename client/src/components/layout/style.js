import styled from "styled-components";
import theme from "../../global/theme";
import { b1, flexCenter, flexCenterColumn, h1 } from "../../global/common";

const S = {};

S.Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${theme.PALETTE.background};
    position: relative;
`; 

S.Top=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position:absolute;
    top:5%;
    z-index: 10;
    padding: 0 10%;
` 

// main
S.Main = styled.main`
    width: 100%;
   `;

S.Logo=styled.div`
    font-size:2vw;
    font-weight:800;
    /* ${h1}; */
    font-family: 'TransformaScript';
    color:white;
    cursor:pointer;
    
`
// navigation
S.Nav = styled.nav`
    ${b1};
    display: flex;
    justify-content: flex-end;
    
    & a {
        color: inherit; 
        /* padding: 0 1vw;  */
        padding-left: 2vw;
        &.active {
            color: ${theme.PALETTE.green};
        }
    }
    
   
`;
S.SearchFormWrapper = styled.div`
  position: absolute;
  top: -4vh;
  right: 11vw;
  height: 3vh;
`;

S.SearchForm = styled.form`
  display: flex;
  align-items: center;
  
`;

S.SearchInput = styled.input`
  ${b1};
  width: 22vw;
  height: 3vh;
  
  opacity: 0.3;
  text-size: 0.5vw;
`;

S.SearchButton = styled.button`
  ${b1};
  width: 4vw;
  height: 3vh;
  padding: 0 1vw;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0 2vh 2vh 0;
  img {
    width: 1.5vw;
  }
  cursor: pointer;
  
  &:hover {
    background-color: transparent;
  }
`;    

export default S;