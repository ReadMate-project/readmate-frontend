import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import S from './style';
import CreateNickNamePage from './CreateNickNamePage';
import axios from 'axios';

const KakaoRedirect = () => {
    
    const isMember = localStorage.getItem("isMember");
    const navigate = useNavigate();
    const location = useLocation();
    console.log(isMember);    
    useEffect(() => {
        if (isMember === "true") {
            // 회원인 경우 직전 페이지로 리다이렉트
            const previousPage = location.state?.from || '/';
            navigate(previousPage);
        }
        // 회원이 아닌 경우 CreateNickNamePage를 표시 (아무 것도 하지 않음)
    }, [isMember, navigate, location.state]);

    return (
        <>
           {isMember !== "true" && <CreateNickNamePage />}
        </>
    );
};

export default KakaoRedirect;

