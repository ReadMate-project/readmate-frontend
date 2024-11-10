import React from 'react';
import S from './style';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';


const HotPostContainer = () => {
    const Post={
        title: '첫 번째 게시글',
        userId: 'user1',
        createdAt: '2024.09.30',
        likeCount: 10,
        comment:5,
        imageUrl:'https://res.heraldm.com/content/image/2015/03/06/20150306001045_0.jpg',
        userImage:'https://i.pinimg.com/236x/d6/34/58/d634589255f1f1107bf53f94a5827119.jpg'
      }
      
      const handleLikeClick = (boardId, isLiked) => {
        // 좋아요 클릭 로직
        console.log(`Post ID: ${boardId}, Liked: ${!isLiked}`);
    };
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
                    <S.Box>
                        <S.FirstLine>
                            <img  src={process.env.PUBLIC_URL + '/global/images/mainpage/HOT.png'}/>
                            <S.Title3>{Post.title}</S.Title3>
                        </S.FirstLine>
                        
                        <S.UserInfo>
                            <img src={Post.userImage} alt="User" />
                            <div>{Post.userId}</div>
                            <div style={{color:'#717171'}}>{Post.createdAt}</div>
                        </S.UserInfo>

                        <S.InteractionContainer>
                            <S.LikeContainer>
                                <FontAwesomeIcon
                                    icon={Post.isLiked ? filledHeart : emptyHeart}
                                    onClick={() => handleLikeClick(Post.boardId, Post.isLiked)}
                                    style={{ cursor: 'pointer', color: Post.isLiked ? 'red' : 'gray' }}
                                />
                                <div>{Post.likeCount}</div>
                            </S.LikeContainer>
                            
                            <S.CommentContainer>
                                <FontAwesomeIcon icon={faComment} />
                                <div>{Post.comment}</div>   
                            </S.CommentContainer>
                        </S.InteractionContainer>

                        {/* 게시글 이미지 */}
                        <S.PostImage>
                            <img src={Post.imageUrl} alt="Post" />
                        </S.PostImage>
                        
                    </S.Box>
                    
                    <S.Crown style={{ left: '56%' }}>
                        <img className='crown2' src={process.env.PUBLIC_URL + '/global/images/mainpage/Top2crown.png'}/>
                        
                    </S.Crown>
                    <S.Box>
                    <S.FirstLine>
                            <img  src={process.env.PUBLIC_URL + '/global/images/mainpage/HOT.png'}/>
                            <S.Title3>{Post.title}</S.Title3>
                        </S.FirstLine>
                        
                        <S.UserInfo>
                            <img src={Post.userImage} alt="User" />
                            <div>{Post.userId}</div>
                            <div style={{color:'#717171'}}>{Post.createdAt}</div>
                        </S.UserInfo>

                        <S.InteractionContainer>
                            <S.LikeContainer>
                                <FontAwesomeIcon
                                    icon={Post.isLiked ? filledHeart : emptyHeart}
                                    onClick={() => handleLikeClick(Post.boardId, Post.isLiked)}
                                    style={{ cursor: 'pointer', color: Post.isLiked ? 'red' : 'gray' }}
                                />
                                <div>{Post.likeCount}</div>
                            </S.LikeContainer>
                            
                            <S.CommentContainer>
                                <FontAwesomeIcon icon={faComment} />
                                <div>{Post.comment}</div>   
                            </S.CommentContainer>
                        </S.InteractionContainer>

                        {/* 게시글 이미지 */}
                        <S.PostImage>
                            <img src={'https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg'} alt="Post" />
                        </S.PostImage>
                    </S.Box>
                     
                </S.HP_Component>
                
            </S.Container>
            
        </div>
    );
};

export default HotPostContainer;