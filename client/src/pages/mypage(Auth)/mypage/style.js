import styled from "styled-components";
import { b1, b2, b4, flexCenter, flexCenterColumn, h3 } from "../../../global/common";
import theme from "../../../global/theme";


const S={};

S.Background=styled.div`
    width:100%;
    height:100%;

`
// S.Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 2; /* 컴포넌트보다 위에 오도록 설정 */
//   background-color: rgba(0, 0, 0, 0.5);
// `;
S.Component=styled.div`
    /* ${flexCenterColumn}; */
    font-family: 'Pretandard';
    ${h3};
    position:relative;
    width:600px;
    height:370px;
    margin:auto;
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
    top:15%;
    left:25%;
`
S.NickName=styled.div`
    ${h3}
`

S.Introduce=styled.div`
    ${b4}
    position:absolute ;
    /* right:5%; */
    top:21.5%;
    left:25%;
`
S.ModifyButton=styled.span`
    /* width:13%; */
    ${b4}
    background-color: ${theme.PALETTE.lightGray };
    padding:0.5% 2%;
    border-radius: 1rem;
    cursor: pointer;
`
S.ImageContainer=styled.div`
    ${flexCenter}
    justify-content: space-evenly;
    width:100%;
    height:55%;
    margin: auto;
    padding:0 10%;
    margin-top: 3%;
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
    width:452px;
    height:220px;
    background-color:#E9E8E4 ;
    top:35%;
    ${flexCenterColumn}
    border-radius: 1rem;

    @media (max-width: 1024px) {
        width: 350px;
        height: 155px;
    }

    /* 스마트폰 크기 (768px 이하) */
    @media (max-width: 768px) {
        width: 250px;
        height: 110px;
    }

    /* 작은 스마트폰 크기 (480px 이하) */
    @media (max-width: 480px) {
        width: 200px;
        height: 100px;
    }
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

