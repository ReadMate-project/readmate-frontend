import styled from "styled-components";
import theme from "../../global/theme";
import { b1, flexCenter, flexCenterColumn, h1 } from "../../global/common";

const S = {};

S.Container = styled.div`
    width:100vw;
    /* height:50%; */
    display: flex;
    background-color: ${theme.PALETTE.background};
    position:relative;
    padding: 5% 0% 5% 10%;
    /* border: 1px solid black; */
    &.lightGreenBg{
        background-color: ${theme.PALETTE.lightGreen};

    }
  
`;

S.HeroSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3vw;
`;

S.HeroImage = styled.img`
  max-width: 70%;
  height: auto;
  border-radius: 0.3vw;
`;

S.HeroContent = styled.div`
margin-right: 3vw;    
padding-left: 2vw;
  h1 {
    font-weight: 300;
    margin-bottom: 1vw;
  }
  p {
    margin-bottom: 1vw;
    font-size: 1.25vw;
  }
  a {
    display: inline-block;
    padding: 0.375vw 0.75vw;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 0.25vw;
  }
`;


S.CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
  justify-content: space-between;
`;

S.Card = styled.div`
  flex: 0 0 30%;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25vw;
  padding: 1.25vw;
  h2 {
    font-size: 1.25vw;
    margin-bottom: 0.75vw;
  }
  p {
    margin-bottom: 1vw;
  }
  a {
    display: inline-block;
    padding: 0.25vw 0.5vw;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 0.2vw;
    font-size: 0.875vw;
  }
`;

export default S;
