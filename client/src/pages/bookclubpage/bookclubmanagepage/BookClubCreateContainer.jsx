import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style'

const BookClubCreateContainer = () => {
    return (
        <S.Container className='BookClubCU' >
           <S.TitleContainer className='main'>
            
            <S.TitleHighlight className='main' >
                <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/BookClub.png'}/>
            </S.TitleHighlight>
            
            
        
        </S.TitleContainer>  
        

        <S.TitleContainer className='sub4'>
        
            <S.TitleHighlight className='sub5'>
                북클럽 생성
            </S.TitleHighlight> 

        </S.TitleContainer>

            <S.CardSection  className='BookClubCU'>
                <S.Card className='BookClubCU'>
                
                    <S.HeroSection>
                        <S.Image className='type1' src="/global/images/bookclubpage/DefaultLogo.png" alt="Book Club Hero" />
                        <S.HeroContent>
                            <h1>책 한 권으로 떠나는 세계 여행, 함께 해요.</h1>
                            <p>Join our community of book lovers! Discover new books, engage in thoughtful discussions, and connect with fellow readers from around the world.</p>
                            <a href="#!">Join Now!</a>
                        </S.HeroContent>
                    </S.HeroSection>
                
                </S.Card>
            </S.CardSection>    
    
        </S.Container>
    
    );
};

export default BookClubCreateContainer;
