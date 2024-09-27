import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainSlider from './Slider';
import FeaturedBooksContainer from './FeaturedBooksContainer';
import BookClubContainer from './BookClubContainer';
import HotPostContainer from './HotPostContainer';

const MainPage = () => {
    console.log(window.innerWidth);

  return (
    <div>
      <MainSlider/>
      <FeaturedBooksContainer/>
      <BookClubContainer/>
      <HotPostContainer/>
    </div>
  );
};

export default MainPage;
