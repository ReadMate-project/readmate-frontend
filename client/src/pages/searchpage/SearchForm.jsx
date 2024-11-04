import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../../components/layout/style';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    
    // eslint-disable-next-line no-restricted-globals
    const imageSrc = location.pathname === '/' || location.pathname.startsWith('/home')
  ? '../../global/images/loginpage/search_icon.png'
  : '../../global/images/loginpage/search_icon.png';

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
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="검색어 입력"
            />
            <S.SearchButton type="submit">
            <img src={imageSrc } alt='img' />
            </S.SearchButton>
        </S.SearchForm>
    );
};

export default SearchForm;
