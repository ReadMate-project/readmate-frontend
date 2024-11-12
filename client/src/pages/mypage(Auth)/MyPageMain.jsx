import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import S from './style';

const MyPageMain = () => {

    return (
        <div>
            <S.Container>
                <S.TitleHightlight>
                    <img src={process.env.PUBLIC_URL + '/global/images/mypage/myPage.png'}  alt="게시판"/>
                </S.TitleHightlight>
            </S.Container>
            <Outlet/>
        </div>
    );
};

export default MyPageMain;