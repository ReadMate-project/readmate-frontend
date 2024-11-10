import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import S from './style';
import CreateNickNamePage from './CreateNickNamePage';
import axios from 'axios';

const KakaoRedirect = () => {
    
    const isMember = localStorage.getItem("isMember");
    const navigate = useNavigate();
    const location = useLocation();
    const code = new URL(window.location.href).searchParams.get("code");  
    
    useEffect(() => {
        const loginExistingUser = async () => {
            try {
                const response = await fetch(`http://3.35.193.132:8080/api/v1/auth/login/kakao?code=${code}`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: null, // 회원인 경우 body를 비워서 전송
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                // Authorization 헤더에서 토큰 가져오기
                let accessToken = response.headers.get('authorization') || response.headers.get('Authorization');
                if (accessToken && accessToken.startsWith("Bearer ")) {
                    accessToken = accessToken.replace("Bearer ", ""); // "Bearer " 제거
                }
                localStorage.setItem("accessToken", accessToken);
                
                // 메인 페이지로 리다이렉트
                window.location.href = '/';
            } catch (error) {
                console.error("Error during login:", error);
            }
        };

        if (isMember === "true") {
            loginExistingUser(); // 이미 회원인 경우 바로 로그인 요청
        }
    }, [isMember, navigate, location.state, code]);

    return (
        <>
           {isMember !== "true" && <CreateNickNamePage />}
        </>
    );
};

export default KakaoRedirect;

