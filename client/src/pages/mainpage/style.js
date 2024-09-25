import styled from 'styled-components'
import { flexCenter, flexCenterColumn } from '../../global/common';

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
        width: 27px;
        height: 8px;
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
  font-size: 15px;
  color: white;
`;

S.Slider=styled.div`
    
    
    img {
        width: 100%; 
        /* height: auto;  */
        /* object-fit: cover;  */
    }
    
`
export default S;