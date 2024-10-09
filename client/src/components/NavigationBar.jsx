// 모든 페이지 상단에 위치
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import S from './layout/style';

const NavigationBar = () => {

    return (
        <>
            <S.Nav >
                <NavLink to={"/bookclubs"}>
                    북클럽
                </NavLink>
                <NavLink to={"/posts"}>
                    게시판
                </NavLink>
                <NavLink to={"/books"}>
                    도서
                </NavLink>
                <NavLink to={"/feeds"}>
                    피드
                </NavLink>
                <NavLink to={"/myPage"}>
                    마이페이지
                </NavLink>
            </S.Nav>
        </>
    );
};

export default NavigationBar;