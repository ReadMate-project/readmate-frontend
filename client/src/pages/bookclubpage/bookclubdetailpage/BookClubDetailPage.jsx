// pages/bookclubpage/bookclubdetailpage/BookClubDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookClubDetailPage = () => {
  const { bookclubid } = useParams();

  return (
    <div>
      <h1>Book Club Information</h1>
      {/* Book club details for club with id: {id} */}
    </div>
  );
};

export default BookClubDetailPage;
