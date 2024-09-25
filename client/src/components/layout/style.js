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
    justify-content: space-evenly;
    
    & a {
        color: inherit; 
        padding: 0 15px; 
        &.active {
            color: ${theme.PALETTE.green};
        }
    }
    
   
`;

export default S;