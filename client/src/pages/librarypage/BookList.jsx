import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const BookList = ({ books = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const booksPerPage = 3;

  if (!books || books.length === 0) {
    return <div>No books available.</div>;
  }

  const totalPages = Math.ceil(books.length / booksPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * booksPerPage;
  const selectedBooks = books.slice(startIndex, startIndex + booksPerPage);

  return (
    <div>
      <S.Container>
        <S.TitleHightlight>
          <img src={process.env.PUBLIC_URL + '/global/images/librarypage/BESTSELLER.png'} alt="Library Board" />
        </S.TitleHightlight>
        <S.BestsellerContainer>
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
        <img src={process.env.PUBLIC_URL + '/global/images/librarypage/Left.png'} alt="Library Board" />
          </button>
          <S.BookList>
            {selectedBooks.map((book, index) => {
              const { isbn13, cover, title, author, categoryName } = book;
              const categories = categoryName ? categoryName.split(/>|\/+/) : [];

              return (
                <S.BookSection key={index} className="type1">
                  <Link to={`/books/bookinfo/${isbn13}`}>
                    <img 
                      src={cover} 
                      alt={title} 
                      onError={(e) => {
                        e.target.src = '/placeholder-book.png'; // Placeholder image
                      }}
                    />
                    <div className="book-info">
                      <h3>{title}</h3>
                      <p>{author}</p>
                      <ul>
                        {categories.map((category, index) => (
                          <li key={index}>{category}</li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </S.BookSection>
              );
            })}
          </S.BookList>
          
          <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
          <img src={process.env.PUBLIC_URL + '/global/images/librarypage/Right.png'} alt="Library Board" />
          </button>
        </S.BestsellerContainer>
      </S.Container>
    </div>
  );
};

export default BookList;
