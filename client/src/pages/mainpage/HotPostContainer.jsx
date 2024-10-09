import React from 'react';
import S from './style';
import { NavLink } from 'react-router-dom';

const HotPostContainer = () => {
    return (
        <div>
            <S.Container >
                <S.Title>
                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/hotpost.png'}/>
                </S.Title>
                <S.Text3>
                    <div>실시간  인기 글을 확인해보세요!</div>
                </S.Text3>
                <S.ShowMoreButton3>
                    <NavLink to={"/posts"}>
                        <img src={process.env.PUBLIC_URL + '/global/images/button/showmorebutton.png'}/>
                    </NavLink>
                </S.ShowMoreButton3>
                <S.BookClubClip2>
                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/bookclubclip1.png'}/>
                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/bookclubclip2.png'}/>

                </S.BookClubClip2>
                <S.HP_Component>
                    <div></div>
                    <div></div>
                </S.HP_Component>
                
            </S.Container>
            
        </div>
    );
};

export default HotPostContainer;