import React from 'react';
import S from './style';

const BookclubsContainer = (bookDetails) => {
  
    
  
    return (
    <S.Container className='bookClubs'>
      <S.TitleContainer>
        <S.TitleHighlight className='bookClubs'>
          <img src={process.env.PUBLIC_URL + '/global/images/librarypage/bookClubRecommendation.png'}/>
        </S.TitleHighlight>
        <S.TitleButtonContainer className='bookClubs'>
          <S.Button>
            <img src={process.env.PUBLIC_URL + '/global/images/librarypage/seeMore.png'}/>
          </S.Button>
        </S.TitleButtonContainer>
      </S.TitleContainer>
      <S.CardSection>
        <S.HeroSection>
          <S.Image src={process.env.PUBLIC_URL + '/global/images/librarypage/bookclub.png'} alt="Book Club" />
          <S.HeroContent>
            <h1>Book Club</h1>
            <p>Book Club Description</p>
          </S.HeroContent>
        </S.HeroSection>
      </S.CardSection>
    </S.Container>
  );
};

export default BookclubsContainer;