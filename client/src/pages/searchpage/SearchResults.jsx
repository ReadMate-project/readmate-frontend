import React from 'react';

const SearchResults = ({ books }) => {
    return (
        <ul>
            {books.map((book) => (
                <li key={book.itemId}>{book.title}</li>
            ))}
        </ul>
    );
};

export default SearchResults;
