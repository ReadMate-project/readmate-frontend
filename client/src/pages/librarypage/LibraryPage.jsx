import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './BookList';

const LibraryPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>My Library</h1>
      <BookList books={books} />
    </div>
  );
};

export default LibraryPage;
