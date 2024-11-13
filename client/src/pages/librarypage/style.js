import styled from 'styled-components';
import theme from '../../global/theme';
import { b1, flexCenter, flexCenterColumn, h1 } from "../../global/common";

const S = {};

S.Container = styled.div`
    width: 100%;
    height: 100vh
    background-color: ${theme.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    
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
    display: flex;
    justify-content: center;
`;

S.BookList = styled.div`
    padding: 2%;
    display: flex;
     /* 한 줄로 나열 */
    gap: 10%;
   `;

S.BookSection = styled.div`
  &.type1 {
    width: 33%;
    padding: 0.5%;
    border-radius: 2vw;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
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
    padding: 13%;
    width: 100%;
   
    border-radius: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

S.BookContent = styled.div`
  padding: 0 0 13% 0;

  margin-right: 3vw;
  padding-left: 2vw;
  font-weight: bold;
  font-family: 'Roboto';
  h3 {
    padding: 0 0 0 0;
    margin: 0 0 10% 0;
  }
  p {
    padding: 0 0 0 0;
    margin: 0 0 10% 0;
  }
  ul {
    display: flex;
    justify-content: center;
    
    color: #717171;
    text-decoration: none;
    border-radius: 0.25vw;  
    gap: 0.5vw;
  }
`;
S.Button = styled.button`
  margin: 2%;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  `;
export default S;
