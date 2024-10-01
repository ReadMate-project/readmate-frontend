import React from 'react';

const BookInfoDetails = ({ bookDetails }) => {
  return (
    <div>
      <p>Author: {bookDetails.author}</p>
      <img src={bookDetails.cover} alt={bookDetails.title} />
      <p>{bookDetails.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookInfoDetails;
