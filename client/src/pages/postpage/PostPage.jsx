// pages/postpage/PostPage.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const PostPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      {/* Post list */}
      <Outlet />
    </div>
  );
};

export default PostPage;
