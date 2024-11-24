import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from '../style'

const BookClubDetailContainerForHost = () => {
    return (
        <S.Container className='darkGreyBg' >
        <S.Top >인기있는 북클럽</S.Top>    
        <S.CardSection  className='lightGreyBg'>
            <S.HeroSection>
                <S.ImageSection className='type1'>
                    <S.Image className='type1' src="/global/images/bookclubpage/bookcover1.png" alt="Book Club Hero" />
                </S.ImageSection>      
                <S.HeroContent>
                        <h1>책 한 권으로 떠나는 세계 여행, 함께 해요.</h1>
                        <p>Join our community of book lovers! Discover new books, engage in thoughtful discussions, and connect with fellow readers from around the world.</p>
                        <a href="#!">Join Now!</a>
                </S.HeroContent>
            </S.HeroSection>
        </S.CardSection>    
    </S.Container>
    
    );
};

export default BookClubDetailContainerForHost;
