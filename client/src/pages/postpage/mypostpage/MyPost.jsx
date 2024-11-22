import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import S from './style';
import apiClient from '../../../api/apiClient';

const MyPost = () => {
  const navigate = useNavigate();
    const [posts, setPosts] = useState([]); // 게시글 목록 상태
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
    const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
    const [currentPageGroup, setCurrentPageGroup] = useState(0);
    const pageSize = 10; // 한 페이지에 표시할 게시글 수

    // 게시글 데이터를 서버에서 가져오는 함수
    const getMyPosts = (page) => {
      const accessToken = localStorage.getItem('accessToken'); // 로컬스토리지에서 accessToken 가져오기
  
      apiClient
          .get(`/v1/board/mypost?boardType=BOARD&page=${page}&size=${pageSize}`, {
              headers: {
                  Authorization: `Bearer ${accessToken}` // 헤더에 토큰 추가
              }
          })
          .then((response) => {
            console.log(response.data);
              setPosts(response.data.data); // 받아온 전체 게시글 목록 설정
              setTotalPages(response.data.pageInfo.totalPages); // 총 페이지 수 설정
          })
          .catch((error) => {
              console.error('Error fetching posts:', error);
          });
  };
    console.log(posts);
    // 페이지가 변경될 때마다 데이터를 다시 로드
    useEffect(() => {
        getMyPosts(currentPage);
       
    }, [currentPage]);

    // 좋아요 버튼 클릭 핸들러
    const handleLikeClick = (postId, isLiked) => {
        // apiClient.post(`/v1/like/${postId}`)
        //     .then(() => {
        //         setPosts(prevPosts =>
        //             prevPosts.map(post =>
        //                 post.boardId === postId
        //                     ? { ...post, isLiked: !isLiked, likeCount: isLiked ? post.likeCount - 1 : post.likeCount + 1 }
        //                     : post
        //             )
        //         );
        //     })
        //     .catch((error) => {
        //         console.error('Error liking post:', error);
        //     });
    };

    // 페이지 번호 변경 핸들러
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleNextPageGroup = () => {
      if ((currentPageGroup + 1) * 5 < totalPages) {
        setCurrentPageGroup(currentPageGroup + 1);
        setCurrentPage(currentPageGroup * 5); // 다음 그룹의 첫 번째 페이지로 이동
      }
    };

    const handlePrevPageGroup = () => {
      if (currentPageGroup > 0) {
        setCurrentPageGroup(currentPageGroup - 1);
        setCurrentPage((currentPageGroup - 1) * 5); // 이전 그룹의 첫 번째 페이지로 이동
      }
    };

    const startPage = currentPageGroup * 5;
    const endPage = Math.min(startPage + 5, totalPages);

    const goToPostDetail=(boardId)=>{
      navigate(`/posts/postdetail?boardId=${boardId}`);
    }

    return (
        <div>
            <S.Container>
               
                
            <S.TitleHightlight>
              <img 
              src={process.env.PUBLIC_URL + '/global/images/postpage/board.png'}  alt="게시판"/>
            </S.TitleHightlight>
            <S.TitleContainer>
              
              {/* 무시 */}
              <S.TitleButtonContainer style={{display:'none'}}>
                <S.TitleButton >글쓰기</S.TitleButton>
                <S.TitleButton >내가 쓴 글</S.TitleButton>
              </S.TitleButtonContainer>
            </S.TitleContainer>

                <S.MyPostTitle>
                  <img 
                    src={process.env.PUBLIC_URL + '/global/images/postpage/myEssay.png'}  alt="게시판"
                  />
                </S.MyPostTitle>

                {/* 게시글 리스트 */}
            <S.LatestPostContainer>
              {!posts[0]?<div>첫 게시글을 작성해보세요!</div>:
                <S.PostList>
                    {posts.map((post) => (
                        <S.PostItem key={post.boardId} onClick={()=>goToPostDetail(post.boardId)}>
                            <S.TitleBody>
                                <S.PostTitle>{post.title}</S.PostTitle>
                                <S.PostContent>{post.content}</S.PostContent>
                            </S.TitleBody>
                            {post.imageUrls[0] && <S.PostImage>
                              <img src={post.imageUrls[0]}/>
                            </S.PostImage>}
                            <S.UnderTitleContainer>
                                <S.LikeContainer>
                                    <FontAwesomeIcon
                                        icon={post.isLiked ? filledHeart : emptyHeart}
                                        onClick={() => handleLikeClick(post.boardId, post.isLiked)}
                                        style={{ cursor: 'pointer', color: post.isLiked ? 'red' : 'gray' }}
                                    />
                                    <div>{post.likeCount}</div>
                                </S.LikeContainer>
                                
                                <S.CommentContainer>
                                  <FontAwesomeIcon icon={faComment} />
                                  <div>{post.commentCount}</div> 
                                </S.CommentContainer>

                                <S.PostInfo>
                                  {new Date(new Date(post.createdAt).getTime() + 9 * 60 * 60 * 1000).toLocaleString('ko-KR')}

                                </S.PostInfo>
                            </S.UnderTitleContainer>
                        </S.PostItem>
                    ))}
                </S.PostList>}
                {/* 페이지네이션 */}
                <S.PaginationContainer>
                <S.PageButton onClick={handlePrevPageGroup} disabled={currentPageGroup === 0}>
                  &lt;
                </S.PageButton>
                {Array.from({ length: endPage - startPage }, (_, index) => (
                  <S.PageButton
                  key={index}
                  onClick={() => handlePageChange(startPage + index)}
                  isActive={currentPage === startPage + index} // 활성 페이지 스타일 적용
                  
                >
                    {startPage + index + 1}
                  </S.PageButton>
                ))}
              <S.PageButton onClick={handleNextPageGroup} disabled={endPage >= totalPages}>
                &gt;
              </S.PageButton>
            </S.PaginationContainer>
            
            </S.LatestPostContainer>

                
          </S.Container>  
    </div>
    );
};

export default MyPost;

