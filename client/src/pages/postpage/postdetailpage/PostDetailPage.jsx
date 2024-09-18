// pages/postpage/postinfo/PostInfoPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetailPage = () => {
  const { postid } = useParams();

  return (
    <div>
      <h1>Post Information</h1>
      {/* Post details for post with id: {id} */}
    </div>
  );
};

export default PostDetailPage;
