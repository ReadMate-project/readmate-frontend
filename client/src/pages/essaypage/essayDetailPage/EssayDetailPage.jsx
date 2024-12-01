import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import apiClient from '../../../api/apiClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { useUser } from '../../../context/UserContext';
import DeletePost from '../../postpage/postdetailpage/DeletePost';
import Comment from '../../postpage/postdetailpage/comment/Comment';
import SimpleBook2 from '../../../components/book/SimpleBook2';

const EssayDetailPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const boardId = queryParams.get('boardId');
    const [post, setPost] = useState(null);
    const [isLiked, setIsLiked] = useState('');
    const [visible, setVisible] = useState(false);
    const navigate=useNavigate();
    const { user } = useUser();
    
    // 게시글 상세 정보를 가져오는 함수
    const fetchPostDetail = async () => {
        try {
            const response = await apiClient.get(`/v1/board/${boardId}`);
            setPost(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching post details:', error);
        }
    };

   //게시글 좋아요 누른 사용자 목록 조회
   const fetchLikeStatus = async () => {
    if (!user) {
    
        return;
    }

    try {
        const response=await apiClient.get(`/v1/like/list/${boardId}`);
        const likedUsers = response.data.data;  // 좋아요 누른 사용자 ID 배열
        
        console.log(response.data.data);
        
        // 현재 사용자가 좋아요를 눌렀는지 확인 
        const isUserLiked = likedUsers.some(likedUser => likedUser.userId === user.userId);            setIsLiked(isUserLiked);
        console.log(isUserLiked);
         
     } catch (error) {
        console.error('Error fetching like status:', error);
     }
};

    useEffect(() => {
        if (boardId) {
            fetchPostDetail();
            fetchLikeStatus();
            
        }
    }, [boardId, user]);

    useEffect(() => {
        fetchPostDetail();

    }, [isLiked]);

    // 좋아요 버튼 클릭 핸들러
    const handleLikeClick = async () => {
        const accessToken = localStorage.getItem('accessToken');
        
        if (!accessToken) {
            alert('로그인이 필요합니다.');
            navigate('/login');
            return;
        }

        try {
        const response=await apiClient.post(`/v1/like/${boardId}`, null, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            
            setIsLiked(response.data.data.liked); 
            setPost((prevPost) => ({
                ...prevPost,
                likeCount: response.data.data.likeCount,
            }));
            
            
        } catch (error) {
            console.error('Error liking the post:', error);
            alert('좋아요 요청에 실패했습니다.');
        }
    };
    

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <S.Container>
                <S.TitleContainer>
                    <S.TitleHightlight><img src={process.env.PUBLIC_URL + '/global/images/postpage/board.png'}  alt="게시판"/>
                    </S.TitleHightlight>
                    
                    <S.TitleHeader>
                        <span>
                            <img src={post.profileImageUrl}/>
                        </span>
                        <S.UserInfo>
                            <S.UserName>{post.nickname}</S.UserName>
                            <S.CreatedAt>{new Date(new Date(post.createdAt).getTime() + 9 * 60 * 60 * 1000).toLocaleString('ko-KR')}</S.CreatedAt>
                        </S.UserInfo>
                        
                        {user?.userId === post.userId && ( // 본인 게시글일 경우에만 표시
                            <S.ButtonContainer>
                                <S.Button onClick={() => { navigate('/posts/postdetail/modifypost', { state: { post } }) }}>수정</S.Button>
                                <S.Button onClick={() => { setVisible(!visible); }}>삭제</S.Button>
                            </S.ButtonContainer>
                        )}
                    </S.TitleHeader>
                </S.TitleContainer>
                <S.Line></S.Line>
                <S.BookContainer>
                    <SimpleBook2 book={post} />
                </S.BookContainer>
                
                <S.BodyContainer>
                    {visible && <DeletePost visible={visible} setVisible={setVisible} />}
                    
                    <S.PostTitle>{post.title}</S.PostTitle>
                    <S.PostContent>{post.content}</S.PostContent>
                    <S.ImageContainer>
                        {post.imageUrls.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`이미지 ${index + 1}`} />
                        ))}
                    </S.ImageContainer>
                </S.BodyContainer>
                
                <S.IconContainer>
                    <S.LikeContainer>
                        <FontAwesomeIcon
                                icon={isLiked ? filledHeart : emptyHeart}
                                onClick={handleLikeClick}
                        />
                        
                        <div>{post.likeCount}</div> 
                    </S.LikeContainer>
                    
                    <S.CommentContainer>
                        <FontAwesomeIcon icon={faComment} />
                        <div>{post.commentCount}</div> 
                    </S.CommentContainer>
                </S.IconContainer>
                
                <S.Line className='line2'></S.Line>
                <Comment post={post} setPost={setPost}/>
            </S.Container>
            
        </div>
    );
};

export default EssayDetailPage;


