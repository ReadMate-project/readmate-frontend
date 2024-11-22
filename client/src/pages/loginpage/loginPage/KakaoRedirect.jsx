import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import S from './style';
import CreateNickNamePage from './CreateNickNamePage';
import apiClient, { setAccessToken } from '../../../api/apiClient';
import { useUser } from '../../../context/UserContext';
import axios from 'axios';

const KakaoRedirect = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [newMember,setNewMember]=useState(false);
    const [userEmail,setUserEmail]=useState(null);
    const code = new URL(window.location.href).searchParams.get("code");
    const requestType = new URL(window.location.href).searchParams.get("state"); // GET or POST

    useEffect(() => {
        const handleKakaoLogin = async () => {
            try {
                let response;
                if (requestType === "get") {
                  // GET 요청
                  response = await apiClient.get(`/v1/auth/login/kakao?code=${code}`);
                } else if (requestType === "post") {
                  // POST 요청
                  response = await apiClient.post(`/v1/auth/signup/kakao?code=${code}`);
                }
        
                console.log(response);
                
                const responseData = response?.data || {};

                if (responseData?.data?.email) {
                  // 새 사용자
                  setNewMember(true);
                  setUserEmail(response.data.data.email);
                  
                } else {
                  // 기존 사용자: 토큰 처리
                  const authHeader = response.headers['authorization'] || response.headers['Authorization'];
                  const [accessTokenPart, refreshTokenPart] = authHeader.split(', ');
                  const accessToken = accessTokenPart.replace("Bearer ", "").trim();
                  const refreshToken = refreshTokenPart.replace("Refresh ", "").trim();
        
                  // 토큰 저장
                  localStorage.setItem("accessToken", accessToken);
                  localStorage.setItem("refreshToken", refreshToken);
                  setAccessToken(accessToken);
        
                  // 메인 페이지로 이동
                  window.location.href = '/';
                }
              } catch (error) {
                console.error("Error during login:", error);
                alert("로그인에 실패했습니다. 다시 시도해 주세요.");
                navigate('/login');
              }
        };
        
        if (code) {
            handleKakaoLogin(); // 로그인 로직 실행
        }
    },[code, requestType, navigate]);

    // useEffect(() => {
    //     if (userEmail) {
    //         console.log("Updated userEmail:", userEmail);
    //     }
    // }, [userEmail]);

    if (newMember && userEmail) {
        // 새 사용자: 닉네임 생성 페이지로 이동
        return <CreateNickNamePage userEmail={userEmail} />;
    }

    return (
        <>  
        {/* {newMember&&<CreateNickNamePage email={userEmail} />} */}
        <div>로그인 처리 중...</div>
        </>
    );
};

export default KakaoRedirect;
