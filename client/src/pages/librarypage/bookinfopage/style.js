import styled from 'styled-components';
import theme from '../../../global/theme';
import { b1, flexCenter, flexCenterColumn, h3 } from "../../../global/common";

const S = {};

S.Container = styled.div`
    &.bookDetails {
      width: 100%;
      height: auto;
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

S.TitleHighlight = styled.div`
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

S.TitleButtonContainer=styled.div`
    display: flex;
    justify-content: space-between;
    
    /* top:5vh; */
`;

S.TitleButton=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${h3};
    width:45%;
    padding: 4%;
    border-radius: 0.5rem;
    color:white;
    background-color:#2AA871;
    border:2px solid ${theme.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
    &.goToWrite{
        background-color: white;
        color:#2AA871;
        border:2px solid ${theme.PALETTE.green};

    }
`;

S.CardSection = styled.div`
  width: 80%;
  justify-content: space-between;
  border-radius: 2vw 2vw;
  background-color: #FFFFFF;

`;

S.HeroSection = styled.div`
  display: flex;
  align-items: center;
  margin: 2% 2% 3% 3%;
`;

S.Image = styled.img`
  
  width: 30%;
  display: flex;  
  align-items: center;
  justify-content: center;
  
`;

S.HeroContent = styled.div`

margin-right: 3vw;    
padding-left: 2vw;
font-weight: bold;
font-family: 'Roboto';  
  h1 {
    
    background-color: #CFDDC8;
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

// S.BookTitleContainer = styled.h1`
  

//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   background-color: #CFDDC8;
// `;
  
export default S;
