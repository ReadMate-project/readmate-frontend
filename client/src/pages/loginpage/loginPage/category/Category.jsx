import React, { useState } from 'react';
import S from './style';

// const dummyCategories = [
//     '가정요리뷰티',
//     '건강취미레저',
//     '경제경영',
//     '고전',
//     '과학',
//     '만화',
//     '사회과학',
//     '문학',
//     '어린이',
//     '에세이',
//     '여행',
//     '역사',
//     '예술대중문화',
//     '외국어',
//     '유아',
//     '인문학',
//     '자기계발',
//     '잡지',
//     '장르소설',
//     '종교명상',
//     '중고등',
//     '청소년',
//     '컴퓨터모바일'
// ];

const dummyCategories = [
    '가정요리뷰티',
    '건강취미레저',
    '경제경영',
    '고전',
    '과학',
    '만화',
    '사회과학',
    '문학',
    '에세이',
    '여행',
    '역사',
    '예술대중문화',
    '외국어',
    '유아',
    '인문학',
    '자기계발',
    '잡지',
    '장르소설',
    '종교역학',
    '청소년',
    '컴퓨터모바일'
];

const Category = ({ applySelectedCategories }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleCategoryClick = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
            setErrorMessage(''); // 선택 해제 시 에러 메시지 초기화
        } else {
            if (selectedCategories.length >= 3) {
                setErrorMessage('최대 3개 카테고리까지만 선택할 수 있습니다.'); // 에러 메시지 설정
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