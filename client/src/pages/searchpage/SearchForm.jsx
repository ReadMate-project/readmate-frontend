import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../../components/layout/style';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            if (onSearch) {
                onSearch(query);
            }
        }
    };

    return (
        <S.SearchForm onSubmit={handleSubmit}>
            <S.SearchInput
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search in site"
            />
            <S.SearchButton type="submit">
            <img src={'../../global/images/searchpage/ic-search.png'} />
            </S.SearchButton>
        </S.SearchForm>
    );
};

export default SearchForm;
