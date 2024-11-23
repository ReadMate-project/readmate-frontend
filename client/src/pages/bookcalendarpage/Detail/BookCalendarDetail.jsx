import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MyEssay from './myEssay/MyEssay';
import S from './style';

const BookCalendarDetail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const dateParam = queryParams.get('date'); 

    // date를 연, 월, 일로 변환
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1 필요
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일`;
    };
    

    return (
        <>
        <S.Background>
            <S.TitleHightLight>
                <img src={process.env.PUBLIC_URL + '/global/images/bookcalendar/bookCalendarHightlight.png'}/>
            </S.TitleHightLight>
            <S.Date>{formatDate(dateParam)}</S.Date>
            <S.EssayContainer>
                <MyEssay dateParam={dateParam}/>
            </S.EssayContainer>
        </S.Background>    
        </>
    );
};

export default BookCalendarDetail;