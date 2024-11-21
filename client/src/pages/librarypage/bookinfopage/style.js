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
    display: flex;
    margin-bottom: 5%;
    img{
        width:80%;
    }
`;

S.TitleContainer = styled.div`
     
    width: 100%; 
    display: flex;
    justify-content: flex;
    align-items: center;
    gap: 10%;
    margin-top: 10%;
    padding: 0% 10% 0% 10%;
`;

S.TitleButtonContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0% 5% 0% 5%;
    gap: 2%;
    /* top:5vh; */
    
    
`;
S.Button=styled.button`
    width: 100%;
    border: none;
    cursor: pointer;
    
`;
    

S.TitleButton=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${h3};
    width:100%;
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
  border-radius: 2vw 2vw;
  background-color: #FFFFFF;

`;

S.HeroSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1%;
  padding: 1%;
`;

S.Image = styled.img`
  
  width: 20%;
  display: flex;  
  align-items: center;
  justify-content: center;
  
`;

S.HeroContent = styled.div`

margin-right: 2%;    
padding-left: 2%;
font-weight: bold;
flex-direction: column;
justify-content: flex-start;
font-family: 'Roboto';  
  h1 {
    display: inline;
    font-size: 1.5vw;
    background-color: #CFDDC8;
    padding: 1% 
  }
  p {
    display: flex;
    margin: 2% 0% 2% 0%;
    font-size: 1vw;
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

S.ContentSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 1%;
  padding: 1%;
  border-radius: 1vw;
  background-color:  ${theme.PALETTE.background};;
`;

// S.BookTitleContainer = styled.h1`
  

//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   background-color: #CFDDC8;
// `;
  
export default S;
