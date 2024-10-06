import styled from "styled-components";
import theme from "../../global/theme";
import { b1, flexCenter, flexCenterColumn, h1 } from "../../global/common";

const S = {};

S.Container = styled.div`
    width:100vw;
    /* height:50%; */
    display: flex;
    overflow-x: hidden;
    background-color: ${theme.PALETTE.background};
    position:relative;
    padding: 5% 10% 5% 10%;
    /* border: 1px solid black; */
    &.lightGreenBg{
        background-color: ${theme.PALETTE.lightGreen};

    }
    &.greyBg{
        background-color: #D9D9D9;
    
    }
    
    &.darkGreyBg{
        background-color: #3B3B3B;

    }

  
`;

S.Top=styled.div`
    color: #FFFFFF;
    font-family: 'Roboto';
    width: 100%;
    display: flex;
    justify-content: space-between;
    position:absolute;
    top:5%;
    z-index: 10;
    
`

S.HeroSection = styled.div`
  display: flex;
  align-items: center;
  margin: 2vw 2vw 3vw 3vw;
`;

S.Image = styled.img`
  &.type1{
  width: 10vw;
  height: 15vh;
  }
  
`;

S.ImageSection = styled.div`
  &.type1{
  width: 20vw;
  height: 20vh;
  border-radius: 2vw;
  background-color: #D9D9D9;
  justify-content: center;
  align-items: center;
  display: flex;
  }
  &.type2{
    width: 30vw;
    height: 20vh;
    border-radius: 2vw;
    background-color: #D9D9D9;
    justify-content: center;
    align-items: center;
    display: flex;
  }  
`;



S.HeroContent = styled.div`
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


S.CardSection = styled.div`
  width: 100%;
  justify-content: space-between;
  border-radius: 5vw;
  &.lightGreyBg{
    background-color: #EDEDED;

  }
  
`;

S.Card = styled.div`
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 2vw;
  padding: 1.25vw;
  gap: 1vw;
  background-color: #EDEDED;
  margin-bottom: 2vw;
  display: flex;
  h2 {
    width: 100%;
    font-size: 1.25vw;
    margin-bottom: 2vw;
    
  }
  p {
    width: 100%;
    margin-bottom: 2vw;
    
  }
  a {
    width: 5vw;
    padding: 0.375vw 0.75vw;
    background-color: #D9D9D9;
    color: #717171;
    text-decoration: none;
    border-radius: 0.25vw;
    margin-bottom: 2vw;
  }
  img{
    width: 40vw;
    height: 90%;
    border-radius: 0.25vw;
  }
  div
  {
  padding: 1vw;
  }
`;

export default S;
