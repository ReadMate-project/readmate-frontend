import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

const MyLibrarayPage = () => {
  return (
    <div>
      <h1>My Library</h1>
      <Outlet />
    </div>
  );
};

export default MyLibrarayPage;