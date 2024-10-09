import React from 'react';
import { Outlet } from 'react-router';

const LoginMain = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default LoginMain;