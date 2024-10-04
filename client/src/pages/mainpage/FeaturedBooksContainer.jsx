import React from 'react';
import S from './style';
import Button from '../../components/button/style';
import { NavLink } from 'react-router-dom';

const FeaturedBooksContainer = () => {
    return (
        <div>
            
            <S.Container>
                <S.Title>
                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/featauredbooks.png'}/>
                </S.Title>
                <S.Text>
                    <div>지난 일주일간 사람들이</div>
                    <div>많이 읽고 있는 책을</div>
                    <div>살펴보세요!</div>
                </S.Text>
                
                <S.ShowMoreButton>
                    <NavLink to={"/books"}>
                        <img src={process.env.PUBLIC_URL + '/global/images/button/showmorebutton.png'}/>
                    </NavLink>
                </S.ShowMoreButton>
                
                <S.FB_Component>
                    <div></div>
                    <div></div>
                    <div></div>
                </S.FB_Component>
            </S.Container>
        </div>
    );
};

export default FeaturedBooksContainer;