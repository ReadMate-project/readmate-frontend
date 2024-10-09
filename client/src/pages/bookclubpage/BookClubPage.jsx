import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style'
import HotBookClubContainer from './HotBookClubContainer'
import BookClubListContainer from './BookClubListContainer'


const BookClubPage = () => {
    return (
        <div>
        
        
        <S.Container className='greyBg'>
        </S.Container>
        
        <HotBookClubContainer/>
        <BookClubListContainer/>
        <Outlet />

        </div>
    );
}

export default BookClubPage;


