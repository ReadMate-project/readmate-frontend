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
` 
// main
S.Main = styled.main`
    /* overflow-y: scroll; */
    /* scrollbar-width: none; */
    /* overflow: hidden; */
    position: fixed;
    top:0;
    width: 100%;
`;

S.Logo=styled.div`
    font-family: 'TransformaScript';
    font-size:30px;
    color:white;
    margin-left: 10%;
    cursor:pointer;
    
`
// navigation
S.Nav = styled.nav`
    ${b1};
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    margin-right: 10%;
    & a {
        color:white;
    }
   
`;

export default S;
