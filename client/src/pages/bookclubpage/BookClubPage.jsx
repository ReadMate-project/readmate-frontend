import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

const BookClubPage = () => {
    return (
        <div>
            북클럽 페이지
            <Outlet />

        </div>
    );
}

export default BookClubPage;
