import React from 'react';
import S from './style';

const BookInfoDetailsContainer = ({ bookDetails }) => {
  console.log('Rendering BookInfoDetails with:', bookDetails); // bookDetails 데이터 확인
  const authorName = bookDetails.author.replace(/\s*\(지은이\)\s*/, '');
  
  return (
    <div>
      <S.Container className='bookDetails' >
      <S.TitleHighlight>
      <img src={process.env.PUBLIC_URL + '/global/images/librarypage/bookdetails.png'}/>
      </S.TitleHighlight>
      <S.TitleContainer>
      <S.TitleButtonContainer>
      <img src={process.env.PUBLIC_URL + '/global/images/librarypage/Purchase.png'}/>
      <img src={process.env.PUBLIC_URL + '/global/images/librarypage/writeEssay.png'}/>
      <img src={process.env.PUBLIC_URL + '/global/images/librarypage/addbook.png'}/>
      </S.TitleButtonContainer>
      </S.TitleContainer>
      <S.CardSection>
      <S.HeroSection>
      <img src={bookDetails.cover} alt={bookDetails.title} />
      <h2>{bookDetails.title}</h2>
      <p> {authorName} | {bookDetails.publisher} | {bookDetails.pubDate}</p>
      <p>{bookDetails.categoryName}</p>
      <p> 정가  {bookDetails.priceStandard}원</p>
      <p>{bookDetails.description}</p>
      </S.HeroSection>
      </S.CardSection>
      {/*     
        <S.CardSection  className='lightGreyBg'>
            <S.HeroSection>
                <S.ImageSection className='type1'>
                    <S.Image className='type1' src="/global/images/bookclubpage/bookcover1.png" alt="Book Club Hero" />
                </S.ImageSection>      
                <S.HeroContent>
                        <h1>책 한 권으로 떠나는 세계 여행, 함께 해요.</h1>
                        <p>Join our community of book lovers! Discover new books, engage in thoughtful discussions, and connect with fellow readers from around the world.</p>
                        <a href="#!">Join Now!</a>
                </S.HeroContent>
            </S.HeroSection>
        </S.CardSection>     */}
      
      </S.Container>
    </div>
  );
};

export default BookInfoDetailsContainer;
