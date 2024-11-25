import React, { useEffect, useState } from 'react';
import S from './style';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import apiClient from '../../../api/apiClient';


const HotPostContainer = () => {
    const navigate=useNavigate();
    const [hotposts,setHotposts]=useState([]);
      
      //핫 게시글 목록 조회
  const fetchHotPosts = () => {
    apiClient
        .get(`/v1/board/hotpost/board?page=${0}&size=${2}`)
        .then((response) => {
            console.log(response.data);
            setHotposts(response.data.data); // 핫 게시글 데이터 설정
           
        })
        .catch((error) => {
            console.error('Error fetching hot posts:', error);
        });
};

  useEffect(() => {
      fetchHotPosts();  
  }, []);

  const goToPostDetail = (boardId) => {
    navigate(`/posts/postdetail?boardId=${boardId}`);
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
                    {hotposts.slice(0, 2).map((post, index) => (
                        <React.Fragment key={post.boardId}>
                            <S.Crown style={{ left: index === 1 ? '56%' : '10%' }}>
                                <img
                                    className={`crown${index + 1}`}
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/global/images/mainpage/Top${index + 1}crown.png`
                                    }
                                />
                            </S.Crown>
                            <S.Box onClick={() => goToPostDetail(post.boardId)}>
                                <S.FirstLine>
                                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/HOT.png'} />
                                    <S.Title3>{post.title}</S.Title3>
                                </S.FirstLine>

                                <S.UserInfo>
                                    <img src={post.profileImageUrl} alt="User" />
                                    <div>{post.nickname}</div>
                                    
                                </S.UserInfo>

                                <S.InteractionContainer>
                                    <S.LikeContainer>
                                        <FontAwesomeIcon
                                            icon={post.isLiked ? filledHeart : emptyHeart}
                                        />
                                        <div>{post.likeCount}</div>
                                    </S.LikeContainer>

                                    <S.CommentContainer>
                                        <FontAwesomeIcon icon={faComment} />
                                        <div>{post.commentCount}</div>
                                    </S.CommentContainer>
                                    <S.TimeContainer>
                                        <div style={{ color: '#717171' }}>{new Date(new Date(post.createdAt).getTime() + 9 * 60 * 60 * 1000).toLocaleString('ko-KR')}</div>

                                    </S.TimeContainer>
                                </S.InteractionContainer>

                                {/* 게시글 이미지 */}
                                {post.imageUrls[0]&&
                                <S.PostImage>
                                    <img
                                        src={post.imageUrls?.[0] || 'https://via.placeholder.com/150'}
                                        alt="Post"
                                    />
                                </S.PostImage>
                                }
                            </S.Box>
                        </React.Fragment>
                    ))}
                </S.HP_Component>
            </S.Container>
            
        </div>
    );
};

export default HotPostContainer;