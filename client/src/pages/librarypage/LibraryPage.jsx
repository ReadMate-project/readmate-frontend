// src/pages/librarypage/LibraryPage.jsx
import React from 'react';
import BestSellerContainer from './BestSellerContainer';
import useBooksFetch from '../../hooks/Aladin/useBooksFetch';
import MostReviewContainer from './MostReviewContainer';
import YourPicksContainer from './YourPicksContainer';

const LibraryPage = () => {
  const { books, isLoading, error } = useBooksFetch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <BestSellerContainer books={books} />
      <MostReviewContainer books={books} />
      <YourPicksContainer books={books} />  
    </div>
  );
};

export default LibraryPage;
