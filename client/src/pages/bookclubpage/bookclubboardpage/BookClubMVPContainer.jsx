import React from 'react';
import S from './style';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

const BookClubMVPContainer = () => {
    
    
    return (
        <S.Container className='BookClubMVP'>
            <S.TitleContainer className='main'>

            <   S.styledLink to={`/bookclubs`}>
                    <S.TitleHighlight className='main'>
                        <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/BookClub.png'} alt="Book Club" />
                    </S.TitleHighlight>
                </S.styledLink>
                
            </S.TitleContainer>

            <S.TitleContainer className='sub'>
                <S.TitleHighlight className='sub'>
                    <h1>이번주 MVP</h1>
                </S.TitleHighlight>

                <S.TitleButtonContainer className='Guest'>
                    <S.Button>
                        <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/WriteEssay.png'} />
                    </S.Button>
                    <S.Button>
                        <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/GoToMyEssays.png'} />
                    </S.Button>
                </S.TitleButtonContainer>
            </S.TitleContainer>

            <S.CardSection  className='BookClubMVP'>
            
            <S.HeroSection>
                <S.Rank src="/global/images/bookclubpage/1st_Rank.png" alt="Book Club Hero" />
                <S.Image src="/global/images/bookclubpage/ID_Image2.png" alt="Book Club Hero" />
            </S.HeroSection>
            
            <S.HeroSection>
                <S.Rank src="/global/images/bookclubpage/2nd_Rank.png" alt="Book Club Hero" />                
                <S.Image src="/global/images/bookclubpage/ID_Image2.png" alt="Book Club Hero" />
            </S.HeroSection>
            
            <S.HeroSection>
                <S.Rank src="/global/images/bookclubpage/3rd_Rank.png" alt="Book Club Hero" />
                <S.Image src="/global/images/bookclubpage/ID_Image2.png" alt="Book Club Hero" />
            </S.HeroSection>            
            
            </S.CardSection>
        </S.Container>
    );
};

export default BookClubMVPContainer;
