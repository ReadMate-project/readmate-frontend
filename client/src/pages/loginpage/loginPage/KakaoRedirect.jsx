import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import S from './style';
import CreateNickNamePage from './CreateNickNamePage';
import axios from 'axios';

const KakaoRedirect = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    // useEffect(() => {
    

    //     // 카카오 로그인 요청
    //     fetch(`http://localhost:3000/api/v1/auth/login/kakao?code=${code}`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json', // JSON 형식으로 데이터 전송
    //         },
    //         body: JSON.stringify(userData) // body에 userData 포함
    //     })
    //     .then((response) => {
    //         if (response.ok) {
    //             // 응답에서 토큰을 헤더에서 추출
    //             const accessToken = response.headers.get('Authorization'); // 'Authorization'은 서버에서 설정한 헤더 이름입니다.
    //             const refreshToken = response.headers.get('Refresh'); // 'Refresh'도 서버에서 설정한 헤더 이름입니다.

    //             if (accessToken) {
    //                 localStorage.setItem('accessToken', accessToken); // accessToken 저장
    //             }
    //             if (refreshToken) {
    //                 localStorage.setItem('refreshToken', refreshToken); // refreshToken 저장
    //             }
    //             navigate('/'); // 메인 페이지로 리다이렉트
    //         } else {
                
    //             // 로그인 실패 처리 (401 또는 404)
    //             return response.text().then((text) => {
    //                 console.error('Error:', text); // 응답을 원시 텍스트로 출력
    //                 throw new Error(text); // 오류 발생
    //             });
    //         }
    //     })
    //     .catch((error) => {
    //         console.error("오류 발생", error);
    //     });
    // }, [code, navigate]);
    
    useEffect(() => {
        const userData = {
            nickname: '새로운 사용자',
            favoriteGenre: ["IT"]
        };
       
        axios.post(`http://localhost:3000/api/v1/auth/login/kakao?code=${code}`, userData)
            .then((res) => {
                console.log(res);
        
          // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
        //   localStorage.setItem('name', r.data.user_name); 
          
        //   navigate('/loginSuccess');
        });
      }, []);

    return (
        <>
           <div>로그인 중...</div>
        </>
    );
};

export default KakaoRedirect;