import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainSlider from './Slider';

const MainPage = () => {
    console.log(window.innerWidth);

  return (
    <div>
      <MainSlider/>
    </div>
  );
};

export default MainPage;
