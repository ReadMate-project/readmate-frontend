import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import S from "./style";

const MainSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,             
        autoplaySpeed: 2500,
        pauseOnHover: false, // 호버 시 자동 재생이 멈추지 않도록 설정
        pauseOnFocus: false, // 포커스 시 자동 재생이 멈추지 않도록 설정
        pauseOnDotsHover: false,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
      };
    return (
        <div>
            <S.SliderContainer>
                <Slider {...settings}>
                    <S.Slider>
                        <img src={process.env.PUBLIC_URL + '/global/images/slider1.png'}/>
                    </S.Slider>
                    <S.Slider>
                        <img src={process.env.PUBLIC_URL + '/global/images/slider2.png'}/>
                    </S.Slider>
                    <S.Slider>
                        <img src={process.env.PUBLIC_URL + '/global/images/slider3.png'}/>
                    </S.Slider>
                    <S.Slider>
                        <img src={process.env.PUBLIC_URL + '/global/images/slider4.png'}/>
                    </S.Slider>
                </Slider>
                <S.PageIndicator>
                    {currentSlide+1 } 
                </S.PageIndicator>
            </S.SliderContainer>
        </div>
    );
};

export default MainSlider;

