import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books = [] }) => {
  if (!books || books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div key={index} className="book-item">
          <Link to={`/books/bookinfo/${book.isbn}`}>
            <img 
              src={book.cover} 
              alt={book.title} 
              onError={(e) => {
                e.target.src = '/placeholder-book.png'; // Placeholder image
              }}
            />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.publisher}</p>
              <p>{book.description}</p>
            </div>
          </Link>
        </div>
      ))} 
    </div>
  );
};

export default BookList;
