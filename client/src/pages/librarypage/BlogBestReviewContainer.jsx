import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import useBooksFetch from '../../hooks/Aladin/useBooksFetch';


const BlogBestReviewContainer = () => {
    const { books, isLoading, error } = useBooksFetch('BlogBest',0, 20); // 최대 2개의 아이템만 가져옴
    const [currentPage, setCurrentPage] = useState(0);
    const booksPerPage = 5;
    
    const cleanAuthorName = (author) => {
      return author.replace(/(\s*\(지은이\)\s*|\s*\(보험용\)\s*)/g, '');
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    

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
      <S.Container className='mostReview'>
        <S.TitleHighlight>
          <img src={process.env.PUBLIC_URL + '/global/images/librarypage/REVIEWS.png'} alt="Library Board" />
        </S.TitleHighlight>
        <S.BookListContainer className='mostReview'>
        <S.Button onClick={handlePrevPage} disabled={currentPage === 0}>
        <img src={process.env.PUBLIC_URL + '/global/images/librarypage/Left.png'} alt="Library Board" />
          </S.Button>
          <S.BookList className='mostReview'>
            {selectedBooks.map((book, index) => {
              const { isbn13, cover, title, author} = book;
              const cleanedAuthor = cleanAuthorName(author);
              
              
              
              
              return (
                <S.BookSection key={index} className="mostReview">
                  <Link to={`/books/bookinfo/${isbn13}`}>
                    <S.BookImage className='mostReview'  
                      src={cover} 
                      alt={title} 
                      onError={(e) => {
                        e.target.src = '/placeholder-book.png'; // Placeholder image
                      }}
                    />
                    <S.BookContent >
                      <h3>{title}</h3>
                      <p>{cleanedAuthor}</p>
                      
                        
                      
                    </S.BookContent>
                  </Link>
                </S.BookSection>
              );
            })}
          </S.BookList>
          
          <S.Button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
          <img src={process.env.PUBLIC_URL + '/global/images/librarypage/Right.png'} alt="Library Board" />
          </S.Button>
        </S.BookListContainer>
      </S.Container>
    </div>
  );
};

export default BlogBestReviewContainer;
