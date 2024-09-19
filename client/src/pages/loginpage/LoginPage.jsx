import React from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      {/* Login form */}
      <Outlet />
    </div>
  );
};

export default LoginPage;
