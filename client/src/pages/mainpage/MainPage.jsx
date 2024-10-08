import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainSlider from './Slider';
import FeaturedBooksContainer from './FeaturedBooksContainer';
import BookClubContainer from './BookClubContainer';
import HotPostContainer from './HotPostContainer';
import S from './style';

const MainPage = () => {
    console.log(window.innerWidth);

  return (
    <div>
      
      <MainSlider/>
      <FeaturedBooksContainer/>
      <BookClubContainer/>
      <HotPostContainer/>
      <S.Bottom>Read Mate</S.Bottom>
      
      
    </div>
  );
};

export default MainPage;
