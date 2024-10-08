import styled from 'styled-components'
import { b1, b3, b4, flexCenter, flexCenterColumn, h3 } from '../../global/common';
import theme from '../../global/theme';

const S={};

S.SliderContainer = styled.div`
    width: 100%; 
    
    position:relative;
    overflow: hidden;
    
    .slick-dots {
        bottom: 15%;
    }

    .slick-dots li {
        
        margin:0 1%;
    }

    .slick-dots li button {
        position:relative;
        transform:translateX(-15%);
        padding:0;
        width: 1.9vw;
        height: 1.2vh;
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.37);
        cursor: pointer;
    }
    
        .slick-dots li button:before {
        content: none;
        
    }

    .slick-dots li.slick-active button {
        background: white;
    }
`;

S.PageIndicator = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  ${b4};
  color: white;
`;

S.Slider=styled.div`
    width:100%;
    img {
        width: 100%; 
    }
    
`
// Feataured Books

S.Container=styled.div`
    width:100%;
    height:auto;
    
    overflow: hidden;
    background-color: ${theme.PALETTE.background};
    position:relative;
    padding: 5% 0% 5% 10%;
    /* ${flexCenterColumn} */
    /* border: 1px solid black; */
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
S.Text=styled.div`
    padding-bottom: 5%;
    ${b1};
    
`
S.ShowMoreButton=styled.div`
   img{
        position:relative;
        z-index: 10;
        width: 8.9%;
    }
`
S.FB_Component=styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    width: 100%;
    height: 100%;
    position:absolute;
    top:0%;
    left:15%;
    div {
        width: 15%; 
        height: 70%; 
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); 
        border-radius: 30px; 
        margin-right: 3%;
        
    }
    

`
//BookClubContainer
S.Text2=styled.div`
    position:absolute;
    top:30%;
    ${b1}; 
`
S.ShowMoreButton2=styled.div`
    position:absolute;
    top:15%;
    left:80%;
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

S.BC_Component=styled.div`
    display: flex;
    justify-content: center; /* 자식 div들 사이의 간격 조정 */
    align-items: center; /* 수직 중앙 정렬 */
    width: 100%;
    height: 100%;
    position:absolute;
    top:15%;
    right:0%;
    div {
        width: 36%; 
        height:42%;
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); 
        border-radius: 30px; 
        /* margin-right: 3%; */
        margin: 0px 5%;
    }

`
//hotpost
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
    left:80%;
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
    div {
        width: 36%; 
        height:42%;
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); 
        border-radius: 30px; 
        /* margin-right: 3%; */
        margin: 0px 5%;
    }
        
    

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
S.Bottom=styled.div`
    width:100%;
    /* margin:auto; */
    position:absolute;
    /* left:50%; */
    background-color: ${theme.PALETTE.background};
    ${h3}
    font-family: 'TransFormaScript';
    padding-top:3%;
    padding-bottom: 2%;
    font-weight:500;
    text-align: center;
    
`

export default S;