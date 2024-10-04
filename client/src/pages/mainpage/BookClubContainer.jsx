import React from 'react';
import S from './style';
import { NavLink } from 'react-router-dom';

const BookClubContainer = () => {
    return (
        <div>
            <S.Container className='lightGreenBg'>
                <S.Title>
                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/bookclub.png'}/>
                </S.Title>
                <S.Text2>
                    <div>현재 모집 중인 북클럽이에요. 관심있는 북클럽에 참여해보세요!</div>
                </S.Text2>
                
                <S.ShowMoreButton2>
                    <NavLink to={"/bookclubs"}>
                        <img src={process.env.PUBLIC_URL + '/global/images/button/showmorebutton.png'}/>
                    </NavLink>
                </S.ShowMoreButton2>
                
                <S.BookClubClip>
                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/bookclubclip1.png'}/>
                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/bookclubclip2.png'}/>

                </S.BookClubClip>
                <S.BC_Component>
                    <div></div>
                    <div></div>
                </S.BC_Component>
            </S.Container>
        </div>
    );
};

export default BookClubContainer;