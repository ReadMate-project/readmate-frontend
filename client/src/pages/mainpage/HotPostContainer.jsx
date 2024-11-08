import React from 'react';
import S from './style';
import { NavLink } from 'react-router-dom';

const HotPostContainer = () => {
    const Book={
        title: '첫 번째 게시글',
        userId: 'user1',
        createdAt: '2024.09.30',
        likeCount: 10,
        comment:5,
        imageUrl:'https://res.heraldm.com/content/image/2015/03/06/20150306001045_0.jpg',
        userImage:'https://i.pinimg.com/236x/d6/34/58/d634589255f1f1107bf53f94a5827119.jpg'
      }
      
    return (
        <div>
            <S.Container className='hotpost'>
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
                    <S.Crown>
                        <img className='crown1' src={process.env.PUBLIC_URL + '/global/images/mainpage/Top1crown.png'}/>
                        
                    </S.Crown>    
                    <S.Box></S.Box>
                    
                    <S.Crown style={{ left: '56%' }}>
                        <img className='crown2' src={process.env.PUBLIC_URL + '/global/images/mainpage/Top2crown.png'}/>
                        
                    </S.Crown>
                    <S.Box></S.Box>
                     
                </S.HP_Component>
                
            </S.Container>
            
        </div>
    );
};

export default HotPostContainer;