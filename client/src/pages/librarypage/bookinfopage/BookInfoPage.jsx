import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookInfoHeader from './BookInfoHeader';
import BookInfoDetails from './BookInfoDetails';
import useBookDetails from '../../../hooks/Aladin/useBookDetails';

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
      <BookInfoHeader title={bookDetails.title} />
      <BookInfoDetails bookDetails={bookDetails} />
    </div>
  );
};

export default BookInfoPage;
