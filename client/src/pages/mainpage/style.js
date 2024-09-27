import styled from 'styled-components'
import { b1, b3, b4, flexCenter, flexCenterColumn } from '../../global/common';
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
        /* right:3.5px; */
        transform:translateX(-15%);
        padding:0;
        /* width: 27px; */
        width: 1.9vw;
        /* height:8px; */
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
    /* height:50%; */
    overflow: hidden;
    background-color: ${theme.PALETTE.background};
    position:relative;
    padding: 5% 0% 5% 10%;
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
        width: 8.9%;
    }
`
S.FB_Component=styled.div`
    

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
        width:8%;
    }
`
S.BookClubClip=styled.div`
    img{
        width:10%;
        display: block;
    }
    img:first-child {
        
        position:relative;
        /* margin-top:1%; */
        left:-5%;
    }
    img:nth-child(2) {
        
        bottom:0%;
        left:88%; 
        position:relative;
        transform: translate(0, 50%);
        
    }
`

S.BC_Component=styled.div`
    

`
//hotpost
S.Text3=styled.div`
    position: absolute;
    ${b1};
    top:55%;
    /* transform: translate(0, -100%); */
    
`
S.ShowMoreButton3=styled.div`
    position:absolute;
    top:27%;
    left:80%;
    width:100%;
    img{
        width:8%;
    }
`
S.HP_Component=styled.div`
    

`
export default S;