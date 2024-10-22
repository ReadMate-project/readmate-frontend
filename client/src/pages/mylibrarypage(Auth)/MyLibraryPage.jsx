import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

const MyLibrarayPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MyLibrarayPage;