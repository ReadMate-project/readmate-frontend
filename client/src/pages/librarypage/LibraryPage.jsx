import React from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const LibraryPage = () => {
  return (
    <div>
      <h1>Library</h1>
      {/* Book list */}
      <Outlet />
    </div>
  );
};

export default LibraryPage;
