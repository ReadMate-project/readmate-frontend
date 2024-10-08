import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import S from './style';
import CreateNickNamePage from './CreateNickNamePage';

const KakaoRedirect = () => {
    
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    const [nickname, setNickname] = useState('');
    const [category, setCategory] = useState('');

    

    useEffect(() => {
        // 카카오 로그인 요청
        fetch(`/api/v1/auth/login/kakao?code=${code}`, {
            method: "GET",
        })
        .then((response) => {
            if (response.ok) {
                // 로그인 성공 시 헤더에서 토큰을 받음
                const token = response.headers.get('Authorization');

                if (token) {
                    // 이미 회원인 경우 (로그인)
                    localStorage.setItem('token', token);
                    navigate('/');
                } else {
                    // 처음 로그인(회원가입)일 경우
                    // 회원가입 요청 (body에 데이터를 추가해서 요청)
                    const userData = {
                        nickname: '새로운 사용자',  // 필요한 데이터를 body에 추가
                        category: '카테고리 선택'
                    };

                    fetch('/api/v1/auth/login/kakao?code=${code}', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(userData)
                    })
                    .then((registerResponse) => {
                        if (registerResponse.ok) {
                            // 회원가입 성공 시, 회원가입 성공 처리
                            navigate('/createNickName');
                        } else {
                            console.error('회원가입 실패');
                        }
                    })
                    .catch((error) => {
                        console.error('회원가입 요청 오류:', error);
                    });
                }
            } else {
                // 로그인 실패 처리 (401 또는 404)
                return response.json().then((data) => {
                    if (response.status === 401 || 404) {
                        console.error(data.message);
                    }
                });
            }
        })
        .catch((error) => {
            console.error("오류 발생", error);
        });
    }, [code, navigate]);
    
    return (
        <div>
            <CreateNickNamePage/>
        </div>
    );
};

export default KakaoRedirect;