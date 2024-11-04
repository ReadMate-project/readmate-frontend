// SearchPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import SearchResults from './SearchResults';

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      handleSearch(query);
    }
  }, [searchParams]);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:5000/api/search`, {
        params: { query: query.trim() }
      });
      console.log("API Response:", response.data); // API 응답 데이터 확인
      // const searchResults = response.data?.item || []; 여기서 문제 발생
      const searchResults = response.data.object?.item || []; // object에서 item 배열을 추출
      console.log("Search Results:", searchResults); // 검색 결과 확인
      setBooks(searchResults);
      if (searchResults.length === 0) {
        setError('No books found matching your search.');
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('An error occurred while searching. Please try again.');
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Searching...</div>
      ) : (
        <SearchResults books={books} />
      )}
    </div>
  );
};

export default SearchPage;






    
    // lambda를 대비한 코드
    
    // const axios = require('axios');
    
    // exports.handler = async (event) => {
    //     const query = event.queryStringParameters.query;
    //     const apiUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${process.env.ALADIN_API_KEY}&Query=${encodeURIComponent(query)}&SearchTarget=Book&output=js`;
    
    //     try {
    //         const response = await axios.get(apiUrl);
    //         return {
    //             statusCode: 200,
    //             body: JSON.stringify(response.data),
    //         };
    //     } catch (error) {
    //         return {
    //             statusCode: 500,
    //             body: JSON.stringify({ error: error.message }),
    //         };
    //     }
    // };
    





