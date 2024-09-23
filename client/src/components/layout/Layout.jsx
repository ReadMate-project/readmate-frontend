// 어떤 형식인지 지정하고 만들면 될 것 같아요
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import S from './style';
import NavigationBar from '../NavigationBar';

const Layout = () => {
    const location = useLocation();
    const [textColor, setTextColor] = useState('white');

    useEffect(() => {
        // 페이지 이동 시 글자색을 변경
        if (location.pathname === '/') {
            setTextColor('white');  // 메인 페이지: 흰색
        } else {
            setTextColor('black');  // 다른 페이지: 검정색
        }
    }, [location.pathname]);

    return (
        <div>
            <S.Background>
                <S.Top style={{color:textColor}}>
                    <S.Logo>read mate</S.Logo>
                    <NavigationBar />
                </S.Top>
                <S.Main>
                    <Outlet />
                </S.Main>
            </S.Background>
        </div>
    );
};

export default Layout;
