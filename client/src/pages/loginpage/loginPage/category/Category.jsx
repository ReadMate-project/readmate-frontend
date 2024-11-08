import React, { useState } from 'react';
import S from './style';

const dummyCategories = [
    '가정', 
    '요리', 
    '뷰티', 
    '건강', 
    '취미', 
    '레저', 
    '고전', 
    '역사', 
    '과학', 
    '기술', 
    '사회과학', 
    '어린이', 
    '청소년', 
    '에세이', 
    '자서전', 
    '여행', 
    '예술', 
    '대중문화', 
    '인문학', 
    '철학', 
    '자기계발', 
    '종교', 
    '명상', 
    '컴퓨터', 
    'IT', 
    '의학', 
    '건축', 
    '디자인', 
    '경제경영', 
    '기타', 
    '소설', 
    '시', 
    '희곡'
];


const Category = ({ applySelectedCategories }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleCategoryClick = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
            setErrorMessage(''); // 선택 해제 시 에러 메시지 초기화
        } else {
            if (selectedCategories.length >= 5) {
                setErrorMessage('최대 5개 카테고리까지만 선택할 수 있습니다.'); // 에러 메시지 설정
                return;
            }
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    

    const handleApplyClick = () => {
        applySelectedCategories(selectedCategories);
    };

    const filteredCategories = dummyCategories.filter(category =>
        !selectedCategories.includes(category)
    );

    return (
        <S.Container>
            <S.Title>카테고리</S.Title>
            
            <S.SelectedContainer>
                {selectedCategories.map(category => (
                    <S.SelectedButton key={category} onClick={() => handleCategoryClick(category)}>
                        {category} <S.CloseButton>X</S.CloseButton>
                    </S.SelectedButton>
                ))}
            </S.SelectedContainer>
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
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
            <S.ApplyButton onClick={handleApplyClick}>적용</S.ApplyButton>
        </S.Container>
    );
};
export default Category;