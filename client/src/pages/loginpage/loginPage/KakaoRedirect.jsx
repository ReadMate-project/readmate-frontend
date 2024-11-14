import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import S from './style';
import CreateNickNamePage from './CreateNickNamePage';
import apiClient, { setAccessToken } from '../../../api/apiClient';

const KakaoRedirect = () => {
    const isMember = localStorage.getItem("isMember");
    const navigate = useNavigate();
    const location = useLocation();
    const code = new URL(window.location.href).searchParams.get("code");
    

    useEffect(() => {
        const loginExistingUser = async () => {
            try {
                // 이전 토큰 삭제
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                // localStorage.removeItem("isMember");
                delete apiClient.defaults.headers.common['Authorization'];

                const response = await apiClient.post(`/v1/auth/login/kakao?code=${code}`);

                if (response.status !== 200) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // 서버에서 받은 헤더를 분리하여 토큰 가져오기
                const authHeader = response.headers['authorization'] || response.headers['Authorization'];
                
                // 헤더에서 accessToken과 refreshToken 분리
                const [accessTokenPart, refreshTokenPart] = authHeader.split(', ');
                let accessToken = accessTokenPart.replace("Bearer ", "").trim();
                let refreshToken = refreshTokenPart.replace("Refresh ", "").trim();

                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);

                // apiClient의 기본 Authorization 헤더 업데이트
                setAccessToken(accessToken);

                // 메인 페이지로 리다이렉트
                window.location.href = '/';
            } catch (error) {
                console.error("Error during login:", error);
                alert("로그인에 실패했습니다. 다시 시도해 주세요.");
                navigate('/login');
            }
        };

        if (isMember === "true" && code) {
            loginExistingUser(); // 이미 회원인 경우 로그인 요청 실행
        }
    }, [isMember, code, navigate]);

    return (
        <>
           {isMember !== "true" && <CreateNickNamePage />}
        </>
    );
};

export default KakaoRedirect;
