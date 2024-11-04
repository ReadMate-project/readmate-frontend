import React from 'react';

const BookInfoDetails = ({ bookDetails }) => {
  console.log('Rendering BookInfoDetails with:', bookDetails); // bookDetails 데이터 확인
  return (
    <div>
      <p>Author: {bookDetails.author}</p>
      <img src={bookDetails.cover} alt={bookDetails.title} />
      <p>{bookDetails.description}</p>
    </div>
  );
};

export default BookInfoDetails;
