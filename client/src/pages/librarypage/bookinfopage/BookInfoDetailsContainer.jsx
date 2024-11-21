import React from 'react';
import S from './style';

const BookInfoDetailsContainer = ({ bookDetails }) => {
  console.log('Rendering BookInfoDetails with:', bookDetails); // bookDetails 데이터 확인
  const authorName = bookDetails.author.replace(/\s*\(지은이\)\s*/, '');
  const handleRedirect = () => {
     window.location.href = bookDetails.link;
  };
  return (
    <div>
      <S.Container className='bookDetails' >
      
        <S.TitleContainer>
          <S.TitleHighlight>
            <img src={process.env.PUBLIC_URL + '/global/images/librarypage/bookdetails.png'}/>
          </S.TitleHighlight>
          <S.TitleButtonContainer>
          <S.Button onClick={handleRedirect}>
            <img src={process.env.PUBLIC_URL + '/global/images/librarypage/Purchase.png'} />
            </S.Button>
            <S.Button>
            <img src={process.env.PUBLIC_URL + '/global/images/librarypage/writeEssay.png'} onclick/>
            </S.Button>
            <S.Button>
            <img src={process.env.PUBLIC_URL + '/global/images/librarypage/addbook.png'}/>
            </S.Button>
          </S.TitleButtonContainer>

        </S.TitleContainer>
        <S.CardSection>
          <S.HeroSection>
            <S.Image src={bookDetails.cover} alt={bookDetails.title} />
            <S.HeroContent>
              <h1>{bookDetails.title}</h1>
              <p> {authorName} 저  |  {bookDetails.publisher}  |  {bookDetails.pubDate}</p>
              <p> 정가  {bookDetails.priceStandard}원</p>
              <S.ContentSection>
                <p>{bookDetails.description}</p>
              </S.ContentSection>
            </S.HeroContent>
          </S.HeroSection>
        </S.CardSection>
      
      
      </S.Container>
    </div>
  );
};

export default BookInfoDetailsContainer;
