import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const SearchResults = ({ books = [] }) => {
  // books가 배열인지 확인하고, 배열이 아닌 경우 빈 배열로 초기화
  const validBooks = Array.isArray(books) ? books : [books];

  if (validBooks.length === 0) {
    return <div></div>;
  }

  const cleanAuthorName = (author) => {
    return author.replace(/(\s*\(지은이\)\s*|\s*\(보험용\)\s*)/g, '');
  };

  return (
    <div className="search-results">
      <S.Container className='bookDetails'>
        <S.TitleContainer>
          <S.TitleHighlight className='bookDetails'>
            <img src={process.env.PUBLIC_URL + '/global/images/searchpage/Book.png'} alt="Book" />
          </S.TitleHighlight>
        </S.TitleContainer>
        <S.CardSection className='BookInfoDetails'>
          {validBooks.map((book, index) => {
            const { isbn13, cover, title, author, priceStandard, pubDate, description, publisher, categoryName } = book;
            const cleanedAuthor = cleanAuthorName(author);

            const formatDate = (dateString) => {
              const date = new Date(dateString);
              const year = date.getFullYear();
              const month = String(date.getMonth() + 1).padStart(2, '0');
              const day = String(date.getDate()).padStart(2, '0');
              return `${year}년 ${month}월 ${day}일`;
            };

            const formattedDate = formatDate(pubDate);

            return (
              <div key={index} className="book-item">
                <S.HeroSection>
                  <Link to={`/books/bookinfo/${isbn13}`}>
                    <img
                      src={cover}
                      alt={title}
                      onError={(e) => {
                        e.target.src = '/placeholder-book.png'; // Placeholder image
                      }}
                    />
                  </Link>
                  <S.HeroContent>
                    <S.ContentTop>
                      <S.ContentTitle className='BookInfoDetails'>
                        {title}
                      </S.ContentTitle>
                     
                    </S.ContentTop>
                    <S.ContentMiddle>
                      {cleanedAuthor} 저  |  {publisher}  |  {formattedDate}
                    </S.ContentMiddle>
                    <S.ContentMiddle>
                      정가  {priceStandard}원
                    </S.ContentMiddle>
                    <S.ContentFoot>
                      <S.ContentSection>
                        {description}
                      </S.ContentSection>
                    </S.ContentFoot>
                  </S.HeroContent>
                </S.HeroSection>
              </div>
            );
          })}
        </S.CardSection>
      </S.Container>
    </div>
  );
};

export default SearchResults;
