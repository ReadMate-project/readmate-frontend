// 모든 페이지 상단에 위치
import React from 'react';
import { NavLink } from 'react-router-dom';
import S from './layout/style';

const NavigationBar = () => {
    return (
        <>
            <S.Nav>
                <NavLink to={"/bookClub"}>
                    북클럽
                </NavLink>
                <NavLink to={"/post"}>
                    게시판
                </NavLink>
                <NavLink to={"/searchBook"}>
                    도서
                </NavLink>
                <NavLink to={"/feed"}>
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