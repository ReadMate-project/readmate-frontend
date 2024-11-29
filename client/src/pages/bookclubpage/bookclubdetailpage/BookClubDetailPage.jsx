// // pages/bookclubpage/bookclubdetailpage/BookClubDetailPage.jsx
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import S from './style';
// import BookClubChallengeContainer from './BookClubChallengeContainer';
// import BookClubJoinRequestContainer from './BookClubJoinRequestContainer';
// import BookClubDetailContainer from './bookclubdetailpage/BookClubDetailContainer';
// import BookClubDetailContainerForHost from './bookclubdetailpage/BookClubDetailContainerForHost';
// import BookListContainer from './bookclubdetailpage/BookListContainer';

// const BookClubDetailPage = () => {
//   const { bookclubid } = useParams();
//   const [userRole, setUserRole] = useState(''); // '' (공백), 'member', 'host' 중 하나로 설정
    
//     const renderDetailContainer = () => {
//         if (userRole === '') {
//             return <BookClubDetailContainer />;
//         } else if (userRole === 'member') {
//             return <BookClubDetailContainer />;
//         } else if (userRole === 'host') {
//             return <BookClubDetailContainerForHost />;
//         }
//     };

//     const renderChallengeContainer = () => {
//         if (userRole === '') {
//             return <BookClubJoinRequestContainer />;
//         } else {
//             return <BookClubChallengeContainer />;
//         }
//     };

//     return (
//         <div>
//             {renderDetailContainer()}
//             <BookClubListContainer />
//             {renderChallengeContainer()}
//         </div>
//     );
// };



// export default BookClubDetailPage;



    


