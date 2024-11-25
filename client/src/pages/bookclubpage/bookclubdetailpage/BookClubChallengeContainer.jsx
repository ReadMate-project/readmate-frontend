import React, { useState }from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style'

const BookClubChallengeContainer = () => {
    
    

    return (
         <S.Container className='BookList' >
              
            <S.TitleContainer className='sub'>
            
                <S.TitleHighlight className='sub3'>
                    <h1>오늘의 미션</h1>
                </S.TitleHighlight>  

            </S.TitleContainer>

            






        </S.Container>
    
    );
};

export default BookClubChallengeContainer;