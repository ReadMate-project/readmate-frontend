import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import S from './style';

const LoginPage = () => {
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = 'http://localhost:3000/api/v1/auth/oauth2/kakao/code';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const location = useLocation();
    console.log(REST_API_KEY);
    const [nickname, setNickname] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        if (location.state) {
            setNickname(location.state.nickname);
            setSelectedCategories(location.state.selectedCategories);
            
        }
    }, [location.state]);
    
    console.log(nickname);
    console.log(selectedCategories);

    const loginHandler = () => {
      window.location.href = link; // 카카오 로그인 페이지로 사용자를 리디렉션시킨다.
    };
  
    return (
        <>
            <S.Background>
                <S.LoginComponent>
                    <div>로그인</div>
                    <div></div>
                    <div>카카오 로그인으로 쉽고 빠르게!</div>
                    <div><span>Read Mate</span> 회원이 되어 북클럽에 참여해보세요!</div>
                    <S.kakaoLoginButton onClick={loginHandler}>
                        <img src={process.env.PUBLIC_URL + '/global/images/loginpage/kakaoLoginButton.png'}/>
                    </S.kakaoLoginButton>
                </S.LoginComponent>
            </S.Background>
        </>
    );
  };

  export default LoginPage;