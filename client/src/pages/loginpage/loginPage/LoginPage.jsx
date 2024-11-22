import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import S from './style';

const LoginPage = () => {
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = 'http://localhost:3000/api/v1/auth/oauth2/kakao/code';
    // const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
    // 버튼 클릭 시 GET 요청
  const handleButtonClick = () => {
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&state=get&prompt=login`;
    window.location.href = link;
  };

  // 텍스트 클릭 시 POST 요청
  const handleTextClick = () => {
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&state=post&prompt=login`;
    window.location.href = link;
  };
    // const loginHandler = () => {
    // window.location.href = link; 
    // };
    // /login/account
    return (
        <>
            <S.Background>
                <S.LoginComponent>
                    <div>로그인</div>
                    <div></div>
                    <div>카카오 로그인으로 쉽고 빠르게!</div>
                    <div><span>Read Mate</span> 회원이 되어 북클럽에 참여해보세요!</div>
                    <S.kakaoLoginButton onClick={handleButtonClick}>
                        <img src={process.env.PUBLIC_URL + '/global/images/loginpage/kakaoLoginButton.png'}/>
                    </S.kakaoLoginButton>
                    <S.SignUpText onClick={handleTextClick}>
                        리드메이트에 처음 오셨나요?
                    </S.SignUpText>
                </S.LoginComponent>
            </S.Background>
        </>
    );
  };

  export default LoginPage;