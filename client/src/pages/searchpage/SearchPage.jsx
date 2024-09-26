import { useParams, useNavigate } from 'react-router-dom';
// SearchBooks.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchBooks = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/search`, {
                params: { query }
            });
            setBooks(response.data.item);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for books"
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {books.map((book) => (
                    <li key={book.itemId}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBooks;

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
