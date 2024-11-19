// src/pages/librarypage/LibraryPage.jsx
import React from 'react';
import BestSellerContainer from './BestSellerContainer';
import useBooksFetch from '../../hooks/Aladin/useBooksFetch';
import BlogBestReviewContainer from './BlogBestReviewContainer';
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
      <BlogBestReviewContainer books={books} />
      <YourPicksContainer books={books} />  
    </div>
  );
};

export default LibraryPage;
