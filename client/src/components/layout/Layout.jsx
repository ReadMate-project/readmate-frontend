// 어떤 형식인지 지정하고 만들면 될 것 같아요
import React from 'react';
import { Outlet } from 'react-router-dom';
import S from './style';
import NavigationBar from '../NavigationBar';

const Layout = () => {
    return (
        <div>
            <S.Background>
                <S.Top>
                    <S.Logo>read mate</S.Logo>
                    <NavigationBar/>
                </S.Top>
                <S.Main>
                    <Outlet/>
                </S.Main>
            </S.Background>
        </div>
    );
};

export default Layout;