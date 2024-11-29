import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import S from './style';
  
const BookClubPostListContainer = () => {

    const dummyPosts = Array.from({ length: 30 }, (_, index) => ({
        boardId: index + 1,
        title: `Post Title ${index + 1}`,
        content: `This is the content of post ${index + 1}.`,
        imageUrls: [`${process.env.PUBLIC_URL}/global/images/bookclubpage/PostImageDefault.png`],
        isLiked: index % 2 === 0,
        likeCount: Math.floor(Math.random() * 100),
        commentCount: Math.floor(Math.random() * 50),
        createdAt: new Date().toISOString(),
    }));


    const pageSize = 6; // 한 페이지에 표시할 게시글 수
    const pageGroupSize = 5; // 페이지 그룹 크기
    const navigate = useNavigate();
    const [posts, setPosts] = useState(dummyPosts); 
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
    const [totalPages, setTotalPages] =useState(Math.ceil(dummyPosts.length / pageSize)); // 전체 페이지 수
    const [currentPageGroup, setCurrentPageGroup] = useState(0); // 페이지 그룹
     
    useEffect(() => {
         setTotalPages(Math.ceil(posts.length / pageSize)); // 전체 페이지 수 업데이트 
         }, [posts]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };
    
    const handleNextPageGroup = () => {
    if ((currentPageGroup + 1) * pageGroupSize < totalPages) {
        setCurrentPageGroup(currentPageGroup + 1);
        setCurrentPage((currentPageGroup + 1) * pageGroupSize); // 다음 그룹 첫 페이지로 이동
        }
    };
    
    const handlePrevPageGroup = () => {
    if (currentPageGroup > 0) {
        setCurrentPageGroup(currentPageGroup - 1);
        setCurrentPage((currentPageGroup - 1) * pageGroupSize); // 이전 그룹 첫 페이지로 이동
        }
    };
    
    const startPage = currentPageGroup * pageGroupSize;
    const endPage = Math.min(startPage + pageGroupSize, totalPages);   
    const currentPosts = posts.slice(currentPage * pageSize, (currentPage + 1) * pageSize); // 현재 페이지의 게시글
    
    
    return (
        <div>
        <S.Container className='PostList'>
            <S.LatestPostContainer>
            
            {/* 최신 게시글 리스트 */}
                <S.PostList>
                    {currentPosts.map((post) => (
                    <S.PostItem key={post.boardId} 
                    // onClick={() => goToPostDetail(post.boardId)}
                    >
                            
                        <S.TitleBody>
                            <S.PostTitle>{post.title}</S.PostTitle>
                            <S.PostContent className='DoNowrap'>{post.content}</S.PostContent>
                        </S.TitleBody>
                        {post.imageUrls?.[0] && (
                            <S.PostImage>
                                <img src={post.imageUrls[0]} />
                            </S.PostImage>
                        )}
                        
                        <S.UnderTitleContainer>
                            
                            <S.LikeContainer>
                                
                                <FontAwesomeIcon
                                    icon={post.isLiked ? filledHeart : emptyHeart}
                                    // onClick={() => handleLikeClick(post.boardId, post.isLiked)}
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
                </S.PostList>

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

export default BookClubPostListContainer;