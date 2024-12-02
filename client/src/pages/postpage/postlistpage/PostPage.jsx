import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import S from './style';
import apiClient from '../../../api/apiClient';

const PostPage = () => {
  const navigate = useNavigate();
  const[hotPosts,setHotposts]=useState([]);
  const [posts, setPosts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
  const [currentPageGroup, setCurrentPageGroup] = useState(0); // 페이지 그룹
  const pageSize = 10; // 한 페이지에 표시할 게시글 수
  const pageGroupSize = 5; // 페이지 그룹 크기


  // 전체게시글 목록 조회
  const getAllPosts = (page) => {
    apiClient
      .get(`/v1/board/?boardType=BOARD&page=${page}&size=${pageSize}`)
      .then((response) => {
        setPosts(response.data.data); // 게시글 설정
        setTotalPages(response.data.pageInfo.totalPages); // 총 페이지 수 설정
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  };

  useEffect(() => {
    getAllPosts(currentPage);
  }, [currentPage]);

  //핫 게시글 목록 조회
  const fetchHotPosts = () => {
    apiClient
        .get(`/v1/board/hotpost/board?page=${0}&size=${3}`)
        .then((response) => {
            console.log(response.data);
            setHotposts(response.data.data); // 핫 게시글 데이터 설정
            // setTotalPages(response.data.pageInfo.totalPages); 
        })
        .catch((error) => {
            console.error('Error fetching hot posts:', error);
        });
};

  useEffect(() => {
      fetchHotPosts();  
  }, [currentPage]);
 
  //하트 클릭 시 색 바뀌게 하고 숫자 업데이트
  const handleLikeClick = (postId, isLiked) => {
    apiClient
      .post(`/v1/like/${postId}`)
      .then(() => {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.boardId === postId
              ? { ...post, isLiked: !isLiked, likeCount: isLiked ? post.likeCount - 1 : post.likeCount + 1 }
              : post
          )
        );
      })
      .catch((error) => {
        console.error('Error liking post:', error);
      });
  };

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
  
  //글쓰기 버튼 클릭 시 
  const goToCreatePost = () => {
    navigate('/posts/createPost');
  };
  
  //내가 쓴 글 보기
  const goToMyPost=()=>{
    navigate('/posts/myPost');
  }

  //게시글 상세보기
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
          
          <S.TitleButtonContainer>
            <S.TitleButton className='goToWrite' onClick={goToCreatePost}>글쓰기</S.TitleButton>
            <S.TitleButton onClick={goToMyPost}>내가 쓴 글</S.TitleButton>
          </S.TitleButtonContainer>
        </S.TitleContainer>

        {/* HOT 게시글 리스트 */}
       
        <S.HotPostTitle>
          <img 
           src={process.env.PUBLIC_URL + '/global/images/postpage/hotboard.png'}  alt="게시판"
          />
        </S.HotPostTitle>
        
        <S.HotPostContainer>
          <S.PostList>
            {hotPosts.map((hotpost) => (
              <S.PostItem key={hotpost.boardId} onClick={() => goToPostDetail(hotpost.boardId)}>
                <S.TitleBody>
                  <S.PostTitle>{hotpost.title}</S.PostTitle>
                  <S.PostContent>{hotpost.content}</S.PostContent>
                </S.TitleBody>
                {hotpost.imageUrls[0] && (
                  <S.PostImage>
                    <img src={hotpost.imageUrls[0]} />
                  </S.PostImage>
                )}
                <S.UnderTitleContainer>
                  <S.LikeContainer>
                    <FontAwesomeIcon
                      icon={hotpost.isLiked ? filledHeart : emptyHeart}
                      onClick={() => handleLikeClick(hotpost.boardId, hotpost.isLiked)}
                      style={{ cursor: 'pointer', color: hotpost.isLiked ? 'red' : 'gray' }}
                    />
                    <div>{hotpost.likeCount}</div>
                  </S.LikeContainer>

                  <S.CommentContainer>
                    <FontAwesomeIcon icon={faComment} />
                    <div>{hotpost.commentCount}</div>
                  </S.CommentContainer>

                  <S.PostInfo>
                    {hotpost.nickname} |{" "}
                     {new Date(new Date(hotpost.createdAt).getTime() + 9 * 60 * 60 * 1000).toLocaleString('ko-KR')}
                  </S.PostInfo>
                </S.UnderTitleContainer>
              </S.PostItem>
            ))}
          </S.PostList>
        </S.HotPostContainer>

        
        
        {/* 최신 게시글 리스트 */}
        <S.LatestPostContainer>
          <S.PostList>
            {posts.map((post) => (
              <S.PostItem key={post.boardId} onClick={() => goToPostDetail(post.boardId)}>
                <S.TitleBody>
                  <S.PostTitle>{post.title}</S.PostTitle>
                  <S.PostContent>{post.content}</S.PostContent>
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
                      onClick={() => handleLikeClick(post.boardId, post.isLiked)}
                    />
                    <div>{post.likeCount}</div>
                  </S.LikeContainer>
                  <S.CommentContainer>
                    <FontAwesomeIcon icon={faComment} />
                    <div>{post.commentCount}</div>
                  </S.CommentContainer>

                  <S.PostInfo>
                    {post.nickname} |{" "}
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

export default PostPage;
