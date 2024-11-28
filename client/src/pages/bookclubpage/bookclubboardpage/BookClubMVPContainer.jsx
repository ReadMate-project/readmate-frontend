import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style';

const BookClubMVPContainer = () => {
    return (
        <S.Container className='BookClubMVP'>
            <S.TitleContainer className='main'>
                <S.TitleHighlight className='main'>
                    <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/BookClub.png'} />
                </S.TitleHighlight>
            </S.TitleContainer>

            <S.TitleContainer className='sub'>
                <S.TitleHighlight className='sub'>
                    <h1>이번주 MVP</h1>
                </S.TitleHighlight>

                <S.TitleButtonContainer className='Guest'>
                    <S.Button>
                        <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/SeeMembers.png'} />
                    </S.Button>
                    <S.Button>
                        <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/LeaveBookClub.png'} />
                    </S.Button>
                </S.TitleButtonContainer>
            </S.TitleContainer>

            <S.CardSection  className='BookClubMVP'>
            <S.Image className='type1' src="/global/images/bookclubpage/DefaultLogo.png" alt="Book Club Hero" />


            </S.CardSection>
        </S.Container>
    );
};

export default BookClubMVPContainer;
