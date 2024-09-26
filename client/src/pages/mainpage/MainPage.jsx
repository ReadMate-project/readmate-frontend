import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainSlider from './Slider';
import FeaturedBooksContainer from './FeaturedBooksContainer';

const MainPage = () => {
    console.log(window.innerWidth);

  return (
    <div>
      <MainSlider/>
      <FeaturedBooksContainer/>
    </div>
  );
};

export default MainPage;
