import React, { useState } from 'react';
import S from './style';

const dummyCategories = [
    '외국소설', '판타지 소설', '미스테리 소설', '에세이', '자기계발', 
    '역사', '과학', '스릴러', '로맨스', '철학', 
    '인문학', '경제', '정치', '시', '고전문학'
];


const Category = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleCategoryClick = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCategories = dummyCategories.filter(category =>
        category.includes(searchTerm) && !selectedCategories.includes(category)
    );

    return (
        <S.Container>
            <S.Title>카테고리</S.Title>
            <S.SearchInput
                type="text"
                placeholder="카테고리 검색"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <S.SelectedContainer>
                {selectedCategories.map(category => (
                    <S.SelectedButton key={category} onClick={() => handleCategoryClick(category)}>
                        {category} <S.CloseButton>X</S.CloseButton>
                    </S.SelectedButton>
                ))}
            </S.SelectedContainer>
            <S.ButtonContainer>
                {filteredCategories.map(category => (
                    <S.CategoryButton
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </S.CategoryButton>
                ))}
            </S.ButtonContainer>
        </S.Container>
    );
};
export default Category;