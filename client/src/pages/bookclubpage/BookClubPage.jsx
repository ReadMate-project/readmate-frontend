import React, {useState} from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style'
import BookClubListContainer from './BookClubListContainer'
import HotBookclubContainer from './HotBookClubContainer';
import BookClubDetailContainer from './bookclubdetailpage/BookClubDetailContainer';
import BookClubDetailContainerForHost from './bookclubdetailpage/BookClubDetailContainerForHost';
import BookListContainer from './bookclubdetailpage/BookListContainer';
import BookClubChallengeContainer from './bookclubdetailpage/BookClubChallengeContainer';
// import SearchModal from '../searchpage/SearchModal'; // Adjust the path according to your file structure
// import { Button } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

const BookClubPage = () => {
    // const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    // const handleOpenSearchModal = () => setIsSearchModalOpen(true);
    // const handleCloseSearchModal = () => setIsSearchModalOpen(false);
    
    return (
        <div>
        {/* <Button
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={handleOpenSearchModal}
            sx={{
                position: 'fixed',  // Fixed position
                bottom: '20px',    // Distance from bottom
                right: '20px',     // Distance from right
                zIndex: 1000,      // Ensure it's above other content
                borderRadius: '50%', // Make it circular
                width: '60px',     // Fixed width
                height: '60px',    // Fixed height
                minWidth: 'unset', // Override default minimum width
                padding: '16px',   // Padding around the icon
              }}
        >
        </Button>
        <SearchModal 
        open={isSearchModalOpen}
        handleClose={handleCloseSearchModal}
      /> */}
        
        
        {/* <HotBookclubContainer />
        <BookClubListContainer />
        
        <BookClubDetailContainerForHost /> */}
        <BookClubDetailContainer />
        <BookListContainer />
        <BookClubChallengeContainer />
        </div>

        
    );
}

export default BookClubPage;


