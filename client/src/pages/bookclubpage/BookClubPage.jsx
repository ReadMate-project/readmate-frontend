import React, { useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style';

import BookClubListContainer from './BookClubListContainer';
import HotBookclubContainer from './HotBookClubContainer';


import BookClubMemberListModal from './bookclubdetailpage/BookClubMemberListModal';
import BookClubLeaderSelectionModal from './bookclubdetailpage/BookClubLeaderSelectionModal';
import BookClubJoinConfirmationModal from './bookclubdetailpage/BookClubJoinConfirmationModal';







const BookClubPage = () => {
    

    return (
        <div>
            
            
            <HotBookclubContainer />
            <BookClubListContainer />
            
            
            {/* <BookClubMemberListModal />
            <BookClubLeaderSelectionModal />
            <BookClubJoinConfirmationModal /> */}

            
            
            
        
        </div>
    );
}

export default BookClubPage;
