import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  const handleSearch = async (query) => {
      try {
          const response = await axios.get(`http://localhost:5000/api/search`, {
              params: { query }
          });
          setBooks(response.data.item);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const query = searchParams.get('q');
      if (query) {
          handleSearch(query);
      }
  }, [location.search]);
    
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
    
    return (
        < div>
            <SearchResults books={books} />
        </div>
    );
};

export default SearchPage;




