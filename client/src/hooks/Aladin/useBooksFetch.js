// src/hooks/aladin/useBooksFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://readmate-ridi.vercel.app/';

const useBooksFetch = (queryType = 'BestSeller', categoryId = 0, maxResults = 20) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/itemList`, {
          params: {
            queryType,
            categoryId,
            maxResults
          }
        });
        console.log('API Response:', response.data);
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
  }, [queryType, categoryId, maxResults]);

  return { books, isLoading, error };
};

export default useBooksFetch;
