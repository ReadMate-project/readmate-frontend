// 모든 페이지 상단에 위치
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import S from './layout/style';

const NavigationBar = () => {
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
        <>
            <S.Nav style={{color:textColor}}>
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