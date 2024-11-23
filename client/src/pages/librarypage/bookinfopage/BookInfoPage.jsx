import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookReviewsContainer from './BookReviewsContainer';
import BookInfoDetailsContainer from './BookInfoDetailsContainer';
import useBookDetails from '../../../hooks/Aladin/useBookDetails';
import BookclubsContainer from './BookClubsContainer';

const BookInfoPage = () => {
  const { isbn } = useParams();
  const { bookDetails, isLoading, error } = useBookDetails(isbn);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <BookInfoDetailsContainer bookDetails={bookDetails} />
      <BookReviewsContainer bookDetails={bookDetails} />
      <BookclubsContainer bookDetails={bookDetails} />

    </div>
  );
};

export default BookInfoPage;
