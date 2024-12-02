import styled from 'styled-components'
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h2, h3 } from '../../../global/common';
import theme from '../../../global/theme';

const S={};

S.Container=styled.div`
    width:100%;
    height:auto;
    overflow: hidden;
    background-color: ${theme.PALETTE.background};
    position:relative;
    padding: 5% 0% 5% 10%;
    
    &.lightGreenBg{
        background-color: ${theme.PALETTE.lightGreen};
        
    }
   
`
S.Title=styled.div`
    /* padding:5% 0; */
    padding-bottom: 5%;
    img{
        width:20%;
    }
`
S.Text2=styled.div`
    position:absolute;
    top:30%;
    ${b1}; 
`
S.ShowMoreButton2=styled.div`
    position:absolute;
    top:15%;
    left:83%;
    width:100%;
    img{
        position:relative;
        z-index: 10;
        width:8%;
    }
`
S.BookClubClip=styled.div`
    img{
        width:13%;
        display: block;
    }
    img:first-child {
        position:relative;
        /* padding-top:1%; */
        top:10%;
        transform: translate(0, -10%);
        left:-8%;
        z-index: 10;
    }
    img:nth-child(2) {
        width:11%;
        bottom:0%;
        left:85%; 
        position:relative;
        transform: translate(0, 55%);
        z-index: 10;
        /* margin-bottom: 5%; */
    }
`
S.Text3=styled.div`
    position: absolute;
    ${b1};
    top:30%;
    /* transform: translate(0, -100%); */
    margin-bottom: 30%;
`
S.ShowMoreButton3=styled.div`
    position:absolute;
    top:15%;
    left:83%;
    width:100%;
    img{
        position:relative;
        z-index: 10;
        width:8%;
    }
`
// S.HiddenComponent=styled.div`
//     width:100%;
//     height:30%;
//     background-color: blue;
// `
S.HP_Component=styled.div`
    display: flex;
    justify-content: center; /* 자식 div들 사이의 간격 조정 */
    align-items: center; /* 수직 중앙 정렬 */
    width: 100%;
    height: 100%;
    position:absolute;
    top:15%;
    right:0%;
    margin-top: 5%;
`
S.BookClubClip2=styled.div`
    img{
        width:13%;
        display: block;
        visibility: hidden;
    }
    img:first-child {
        position:relative;
        /* padding-top:1%; */
        top:10%;
        transform: translate(0, -10%);
        left:-8%;
        z-index: 10;
    }
    img:nth-child(2) {
        width:11%;
        bottom:0%;
        left:85%; 
        position:relative;
        transform: translate(0, 55%);
        z-index: 10;
        /* margin-bottom: 5%; */
    }
`

S.Box=styled.div`
        width: 36%; 
        height:42%;
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); 
        border-radius: 2vw; 
        margin: 0px 5%;
        padding:1.5%;
        padding-left: 2%;
        position: relative;
        cursor: pointer;
`
S.FirstLine=styled.div`
    position: absolute;
    top:15%;
    display: flex;
    align-items: center;
    width:50%;
    img{
        width:25%;
    }
`
S.Title3 = styled.div`
    ${b4}
    padding-left: 3%;
    color:#717171;
`;

S.SecondLine = styled.div`
    position: absolute;
    top:37%;
    display: flex;
    flex-direction: column;
    ${h2}
    white-space: wrap;
    width:60%;
    justify-content: flex-start;
   & .description{
    ${b2}
    color: #717171;
    padding-top: 2%;
   }
`;

S.ThirdLine = styled.div`
    position: absolute;
    top:75%;
    display: flex;
    align-items: center;
    width:60%;
    
    ${b4}
`;

S.Category = styled.div`
    ${flexCenter}
    gap: 8%;
    margin-left: 6%;
    position: relative;
    & .tag{
        color: #717171;
        border:1px solid #717171;
        border-radius: 30vw;
        
        padding: 5% 10%;
        flex-shrink: 0;
    }
    
`;

S.PeopleContainer=styled.div`
    display: flex;
    align-items: center;
    gap: 1%;
    white-space: nowrap;
    position: relative;
    left:10%;
    img {
        width: 35px;
        /* height:40px; */

        margin-right: 7px;
        @media (max-width: 1024px) {
            width: 30px; 
            /* height: 30px;  */
        }

        @media (max-width: 768px) {
            width: 20px; 
            /* height: 20px;  */
        }

        @media (max-width: 480px) {
            width: 15px; 
            /* height: 15px; */
        }
    }
`
S.BookImage = styled.div`
    /* width: 30%; */
    /* height:100%; */
    height: auto;
    position: absolute;
    right: 4%;
    /* top: 15%; */
    
    img{
        /* border:1px solid #717171; */
        width:115px;
        height:165px;
        border-radius: 2px;
        object-fit: cover;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.25);
        @media (max-width: 1024px) {
            width:60px;
            height:90px;
        }

        @media (max-width: 768px) {
            width:40px;
            height:65px;
        }

        @media (max-width: 480px) {
            width:25px;
            height:40px;
        }
    }
`;

S.BC_Component=styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    width: 100%;
    height: 100%;
    position:absolute;
    top:15%;
    right:0%;
    /* margin-top: 5%; */

`
export default S;