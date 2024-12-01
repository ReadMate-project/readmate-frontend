// hooks/aladin.js
import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://readmate-frontend.vercel.app/apiServerless'; // Vercel 서버리스 함수의 URL
export const useAladinSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/itemSearch`, {
        params: { search: query.trim() }
      });
      const searchResults = response.data.object?.item || []; // object에서 item 배열을 추출
      setSearchResults(searchResults);
      if (searchResults.length === 0) {
        setError('검색어와 일치하는 책이 없습니다.');
      }
      return searchResults;
    } catch (err) {
      console.error('Search error:', err);
      setError('An error occurred while searching. Please try again.');
      setSearchResults([]);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    searchResults,
    isLoading,
    error,
    handleSearch
  };
};
