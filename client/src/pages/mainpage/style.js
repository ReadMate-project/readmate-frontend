import styled from 'styled-components'
import { b3, b4, flexCenter, flexCenterColumn } from '../../global/common';

const S={};

S.SliderContainer = styled.div`
    width: 100vw; 
    position:relative;
    overflow: hidden;
    
    .slick-dots {
        bottom: 15%;
    }

    .slick-dots li {
        
        margin: 0 12px;
        
    }

    .slick-dots li button {
        position:relative;
        right:3.5px;
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
    img {
        width: 100%; 
    }
    
`
// Feataured Books

S.FB_Container=styled.div`
    width:100%;
    height:auto;
    border:1px solid green;

`

S.Title=styled.div`
    

`

S.Text=styled.div`
    

`
S.ShowMoreButton=styled.div`

`
S.FB_Component=styled.div`
    

`

export default S;