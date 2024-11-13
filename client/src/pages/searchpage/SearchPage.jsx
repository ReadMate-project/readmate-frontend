// SearchPage.jsx
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchResults from './SearchResults';
import { useAladinSearch } from '../../hooks/Aladin/useAladinSearch';
const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { searchResults, isLoading, error, handleSearch } = useAladinSearch();

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      handleSearch(query);
    }
  }, [searchParams]);

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      {isLoading ? (
        <div className="loading">Searching...</div>
      ) : (
        <SearchResults books={searchResults} />
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
    





