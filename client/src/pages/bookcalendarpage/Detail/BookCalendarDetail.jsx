import React from 'react';
import { useLocation } from 'react-router-dom';
import MyEssay from './myEssay/MyEssay';
import S from './style';

const BookCalendarDetail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const date = queryParams.get('date'); 

    return (
        <>
        <S.Background>
            <S.Date>{date}</S.Date>
            <S.EssayContainer>
                <MyEssay/>
            </S.EssayContainer>
        </S.Background>    
        </>
    );
};

export default BookCalendarDetail;