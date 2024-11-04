import styled from "styled-components";
import { b1, b2, b4, flexCenter, flexCenterColumn, h3 } from "../../../global/common";
import theme from "../../../global/theme";


const S={};

S.Background=styled.div`
    width:100%;
    height:100%;
   
    & .grayBackground{
        background-color: #8C9094;
        height:100%;
        position:absolute;
        z-index: 1000;
        
    }

`
S.GrayBackground=styled.div`
    position:relative;
    z-index: 1000;
    /* width:800px; */
    width:100%;
    height:100%;
    position:absolute;
    /* .grayBackground{
        width:50%;
        background-color: #8C9094;
        height:100%;
        position:relative;
        z-index: 99;
        
    } */
`

S.Component=styled.div`
    position: relatve;
    z-index:1;
    font-family: 'Pretandard';
    ${h3};
    position:relative;
    width:800px;
    height:550px;
    margin:auto;
    margin-bottom: 10%;
    margin-top: 5%;
    padding: 3% 5% 2% 5%;
    border-radius: 1rem;
    background-color:white;
    /* background-color: ${({ isOverlay }) => (isOverlay ? 'rgba(0, 0, 0, 0.3)' : 'white')}; */

    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 400px; 
        height: 247px; 
    }

    @media (max-width: 768px) {
        width: 300px; 
        height: 185px; 
    }

    @media (max-width: 480px) {
        width: 270px; 
        height: 166.5px;
    }
`

S.Profile=styled.div`
    width:100%;
    img{
        width:15%;
    }
`
S.NickNameContainer=styled.div`
    display: flex;
    justify-content: space-between;
    width:62%;
    position:absolute ;
    /* right:5%; */
    top:13%;
    left:23%;
`
S.NickName=styled.div`
    ${h3}
`

S.Introduce=styled.div`
    ${b4}
    position:absolute ;
    /* right:5%; */
    top:19%;
    left:23%;
`
S.ModifyButton=styled.span`
    /* width:13%; */
    ${b4}
    background-color: ${theme.PALETTE.lightGray };
    padding:1% 3%;
    border-radius: 1rem;
    cursor: pointer;
`
S.ImageContainer=styled.div`
    ${flexCenter}
    justify-content: space-evenly;
    width:100%;
    height:45%;
    margin: auto;
    padding:0 10%;
    margin-top: 5%;
    background-color: rgba(207, 221, 200, 0.3);
    border-radius: 1rem;
    /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25); */
`
S.IconWrapper=styled.div`
    ${flexCenterColumn};
    cursor: pointer;
    img{
        margin-bottom:10%;
    }
    @media (max-width: 1024px) {
        img{
            width: 50px;
        }
        
    }

    @media (max-width: 768px) {
        img{
            width: 40px;
        }
    }

    @media (max-width: 480px) {
        img{
            width: 30px;
        }
    }
   

`
S.ImageTitle=styled.div`
    ${b2}
    font-weight: bold;
    padding:3%;
`

S.ImageCount=styled.div`
    ${b2}
    color:#717171;
`
S.ButtonContainer = styled.div`
    ${flexCenter}
    width:75%;
    text-align: center;
    position:relative;
    top:7%;
    left:12.5%;
`
S.Button=styled.div`
    ${b1};
    width:80%;
    padding:4%;
    line-height: 25%;
    /* margin-left: 10%; */
    margin:0 10%;
    height:70%;
    text-align: center;
    border-radius: 0.5rem;
    color:white;
    background-color:${theme.PALETTE.darkGray};
    cursor: pointer;
`

//DeleteAccount
S.DeleteAccountContainer=styled.div`
    position:absolute;
    z-index: 999;
    width:90%;
    height:90%;
    background-color:#E9E8E4 ;
    right:5%;
    bottom:5%;
    ${flexCenterColumn}
    border-radius: 1rem;

` 
S.DeleteText=styled.div`
    position:absolute;
    top:30%;
    ${h3}
    text-align: center;
`
S.DeleteButtonContainer=styled.div`
    position:absolute;
    top:65%;    
    display: flex;
    justify-content: center;
    width:50%;
    position: absolute;

    /* right:10%; */
`
S.CancelButton=styled.div`
    ${flexCenter}
    ${h3};
    width:30%;
    padding: 2%;
    margin:3%;
    border-radius: 0.5rem;
    background-color: white;
    color:#2AA871;
    border:2px solid ${theme.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`
S.DeleteButton=styled.div`
    ${flexCenter}
    ${h3};
    width:30%;
    padding: 2%;
    margin:3%;
    border-radius: 0.5rem;
    color:white;
    background-color:#2AA871;
    border:2px solid ${theme.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`
export default S;

