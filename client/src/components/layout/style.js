import styled from "styled-components";
import theme from "../../global/theme";
import { b1, flexCenter, flexCenterColumn, h1 } from "../../global/common";

const S = {};

S.Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${theme.PALETTE.background};
    /* ${flexCenterColumn}; */
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
    top: 0;
    left: 0;
    width: 100%;
    height:200px;
    background-color: white;
    /* z-index: 10;  */
`;

S.Logo=styled.div`
    ${h1};
    margin-left: 10%;
    
`
// navigation
S.Nav = styled.nav`
    ${b1};
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    margin-right: 10%;
   
`;

export default S;
