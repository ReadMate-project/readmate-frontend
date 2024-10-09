import React from 'react';
import { Outlet } from 'react-router';

const PostMain = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default PostMain;