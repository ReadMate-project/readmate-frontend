import styled from "styled-components";
import theme from "../../global/theme";
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h3, logo } from "../../global/common";

const S = {};

S.BookComponent = styled.div`
    ${flexCenterColumn};
    background-color:white;
    ${b2}
    width:12vw;
    height:35vh;
    border-radius: 1rem;
    position:absolute;
`; 

export default S;