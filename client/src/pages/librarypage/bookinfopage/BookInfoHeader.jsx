import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookInfoHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div>
      
      <h2>{title}</h2>
      <button onClick={() => navigate(-1)}>Back to Library</button>
    </div>
  );
};

export default BookInfoHeader;
