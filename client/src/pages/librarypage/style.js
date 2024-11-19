import styled from 'styled-components';
import theme from '../../global/theme';
import { b1, flexCenter, flexCenterColumn, h1 } from "../../global/common";

const S = {};

S.Container = styled.div`
    &.bestSeller {
      width: 100%;
      height: 100%;
      background-color: ${theme.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &.mostReview {
      width: 100%;
      height: 100%
      background-color: ${theme.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &.yourPicks {
      width: 100%;
      height: 100%;
      background-color: ${theme.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
    }
 
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

S.BookListContainer = styled.div`
  &.bestSeller{
    position: relative;
    top: 5vh;
    width: 80%;
    height: auto;
    border-radius: 0.5rem;
    padding: 2%;
    background-color: #CFDEC8;
    display: flex;
    justify-content: center;
    margin-bottom: 7%;
    }
    &.mostReview{
      position: relative;
      top: 5vh;
      width: 80%;
      height: auto;
      border-radius: 0.5rem;
      padding: 2%;
      background-color: #CFDEC8;
      display: flex;
      justify-content: center;
      margin-bottom: 7%;
    }
    &.yourPicks{
      position: relative;
      top: 5vh;
      width: 80%;
      height: auto;
      border-radius: 0.5rem;
      padding: 2%;
      background-color: #D9D9D9;
      display: flex;
      justify-content: center;
      margin-bottom: 7%;
      gap: 5%;
      
    }  
`;
S.YourPicksContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color:#D9D9D9;
  display: flex;
  align-items: center;
  gap: 2vw;
  flex-direction: column;
  
  
`;

S.BookList = styled.div`
  &.bestSeller{
    padding: 1%;
    display: flex;
     /* 한 줄로 나열 */
    gap: 5%;
  }
  &.mostReview{
    padding: 1%;
    display: flex;
    gap: 1%;
  }
  &.yourPicks{
    padding: 1%;
    display: flex;
    gap: 1%;
    
  }
   `;

S.BookSection = styled.div`
  &.bestSeller {
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
  &.mostReview {
    width: 20%;
    padding: 0.5%;
    border-radius: 2vw;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-right: 2%; /* 책 사이 간격 추가 */
  }
  &.yourPicks {
    width: 100%;
    height: 100%;
    padding: 5%;
    border-radius: 2vw;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 0.5%; /* 책 사이 간격 추가 */
    gap: 5%;
  }  
`;

S.BookImage = styled.img`
  &.bestSeller{
    padding: 5%;
    width: 100%;
    border-radius: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.mostReview{
    padding: 5%;
    width: 100%;
    border-radius: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }    
  &.yourPicks{
    width: 100%;
    height: 20vh;
    background-color: #D9D9D9;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

S.ImageSection = styled.div`
  &.yourPicks{
  width: 20%;
  height: 20vh;
  background-color: #D9D9D9;
  justify-content: center;
  align-items: center;
  display: flex;
  }
  &.type2{
    width: 30%;
    height: 20vh;
    border-radius: 2vw;
    background-color: #D9D9D9;
    justify-content: center;
    align-items: center;
    display: flex;
  }  
`;

S.BookContent = styled.div`
  padding: 0 0 13% 0;

  margin-right: 3%;
  padding-left: 2%;
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
  
  &:disabled {
      
      opacity: 0.3; // Makes the button appear faded
      filter: grayscale(0%); // Makes the button grayscale when disabled
    }

    &:not(:disabled):hover {
      transform: scale(1.1); // Slight zoom effect on hover when enabled
    }
  `;
export default S;
