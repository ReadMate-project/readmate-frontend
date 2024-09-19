import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

const MyPage = () => {
  return (
    <div>
      <h1>My Page</h1>
      <Outlet />
    </div>
  );
};

export default MyPage;
