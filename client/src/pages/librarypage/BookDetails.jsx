import React from 'react';
import { Link } from 'react-router-dom';

const BookDetails = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <Link to={`/book/${book.isbn13}`}>
        <img src={book.cover} alt={book.title} />
      </Link>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
