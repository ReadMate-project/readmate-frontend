import styled from 'styled-components';
import theme from '../../global/theme';
import { b1, flexCenter, flexCenterColumn, h1 } from "../../global/common";

const S = {};

S.Container = styled.div`
    width: 100%;
    height: auto;
    background-color: ${theme.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
`;

S.TitleHightlight = styled.div`
    width: 100%;
    height: 100%;
    img {
        position: relative;
        width: 15%;
        margin-left: 10%;
        margin-top: 5%;
    }
`;

S.TitleContainer = styled.div`
    width: 100%;
    padding: 3% 10% 3% 10%;
    display: flex;
    justify-content: space-between;
`;

S.BestsellerContainer = styled.div`
    position: relative;
    top: 5vh;
    width: 80%;
    height: auto;
    border-radius: 0.5rem;
    padding: 2%;
    background-color: #CFDEC8;
`;

S.BookList = styled.div`
    
    display: flex;
    flex-wrap: nowrap; /* 한 줄로 나열 */
   `;

S.BookSection = styled.div`
  &.type1 {
    width: 33%;
    height: 100%;
    border-radius: 2vw;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row; /* 여기를 수정했습니다 */
    align-items: center;
    margin-right: 2%; /* 책 사이 간격 추가 */
  }
  &.type2 {
    width: 30vw;
    height: 20vh;
    border-radius: 2vw;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row; /* 여기도 추가했습니다 */
  }
`;

S.BookImage = styled.img`
  &.type1 {
    width: 10vw;
    height: 15vh;
  }
`;

S.BookContent = styled.div`
  margin-right: 3vw;
  padding-left: 2vw;
  font-weight: bold;
  font-family: 'Roboto';
  h1 {
    margin-bottom: 1vw;
  }
  p {
    margin-bottom: 1vw;
    font-size: 1.25vw;
  }
  a {
    display: inline-block;
    padding: 0.375vw 0.75vw;
    background-color: #D9D9D9;
    color: #717171;
    text-decoration: none;
    border-radius: 0.25vw;
  }
`;

export default S;
