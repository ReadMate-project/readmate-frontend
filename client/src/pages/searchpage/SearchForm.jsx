import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../../components/layout/style';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
            if (onSearch) {
                onSearch(query.trim());
            }
        }
    };

    return (
        <S.SearchForm onSubmit={handleSubmit}>
            <S.SearchInput
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="검색어 입력"
            />
            <S.SearchButton type="submit">
                <img src={process.env.PUBLIC_URL + '/global/images/searchpage/search_icon.png'} alt='img' />
            </S.SearchButton>
        </S.SearchForm>
    );
};

export default SearchForm;
