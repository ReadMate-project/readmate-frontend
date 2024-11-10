import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './BookList';

const LibraryPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/itemlist');
        console.log('API Response:', response.data); // 클라이언트 로그 확인
        const items = response.data.object.item || [];
        setBooks(Array.isArray(items) ? items : [items]);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('책 목록을 가져오는 동안 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <BookList books={books} />
    </div>
  );
};

export default LibraryPage;
