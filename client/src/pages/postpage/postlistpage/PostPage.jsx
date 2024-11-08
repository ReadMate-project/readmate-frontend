import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import S from './style';

const PostPage = () => {
  const navigate = useNavigate();
  // const [posts, setPosts] = useState([]); // 전체 게시글 목록 상태
  // const [page, setPage] = useState(0); // 현재 페이지
  const [size, setSize] = useState(8); // 페이지당 게시글 수
  // const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
  const [hotPosts, setHotPosts] = useState([]); // Hot 게시글 (좋아요 많은 3개)
  const [latestPosts, setLatestPosts] = useState([]); // 최신 게시글
  const boardType="BOARD";

  
  const dummyPosts = [
    {
      boardId: 1,
      title: '첫 번째 게시글',
      content:"첫 번째 게시글 내용",
      userId: 'user1',
      createdAt: '2024-09-30T20:09:59.989724',
      likeCount: 10,
      comment:5,
      imageUrl:'https://img.freepik.com/premium-vector/abstract-square-pixel-colour-pattern-21_615845-1013.jpg', 
    },
    {
      boardId: 2,
      title: '두 번째 게시글',
      content:"두 번째 게시글 내용 두 번째 게시글 내용 두 번째 게시글 내용 두 번째 게시글 내용 두 번째 게시글 내용 두 번째 게시글 내용 두 번째 게시글 내용 두 번째 게시글 내용",
      userId: 'user2',
      createdAt: '2024-10-07T09:24:33.002345',
      likeCount: 5,
      comment:2,
      imageUrl:'https://img.freepik.com/premium-vector/abstract-square-pixel-colour-pattern-21_615845-1013.jpg', 
    },
    {
      boardId: 3,
      title: '세 번째 게시글',
      content:"세 번째 게시글 내용",
      userId: 'user3',
      createdAt: '2024-10-06T18:30:00',
      likeCount: 8,
      comment:0,
    },
    
  ];
  const [posts, setPosts] = useState(dummyPosts); // 더미 데이터를 게시글로 설정
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
// 페이지
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
 // 페이지가 변경될 때마다 데이터를 다시 로드
 useEffect(() => {
  setPosts(dummyPosts); // 더미 데이터를 사용
}, [currentPage]);


// 시간 포맷을 처리하는 함수
const formatDate = (dateString) => {
  const now = new Date();
  const postDate = new Date(dateString);

  // 현재 날짜와 게시물 날짜를 같은 기준으로 비교하기 위해 시간은 제거하고 비교
  const nowWithoutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const postDateWithoutTime = new Date(postDate.getFullYear(), postDate.getMonth(), postDate.getDate());

  const diffTime = nowWithoutTime - postDateWithoutTime; // 밀리초 단위 차이
  const diffDays = diffTime / (1000 * 60 * 60 * 24); // 밀리초를 일로 변환

  if (diffDays < 1) {
    // 하루가 지나지 않았으면 시간만 표시
    return postDate.toLocaleString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // 24시간 형식
    });
  } else {
    // 하루가 지났으면 연월일만 표시
    return postDate.toLocaleString('ko-KR', {
      month: 'numeric',
      day: 'numeric',
    });
  }
};

  
  //글쓰기 버튼 클릭 시 
  const goToCreatePost = () => {
    navigate('/posts/createPost');
  };
  
  //내가 쓴 글 보기
  const goToMyPost=()=>{
    navigate('/posts/myPost');
  }

  //게시글 상세보기
  const goToPostDetail=(post)=>{
    navigate('/posts/postdetail', { state: { post } });
  }

  // 게시글 데이터를 서버에서 가져오는 함수
  const getPosts = (page, size, boardType) => {
    fetch(`/api/v1/posts/hot?page=${boardType}&${page}&size=${size}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.data); // 받아온 전체 게시글 목록 설정
        setTotalPages(data.pageInfo.totalPages); // 총 페이지 수 설정

        // 게시글 좋아요 수 상위 3개 정렬
        const sortedByLikes = [...data.data].sort((a, b) => b.likes - a.likes).slice(0, 3);
        setHotPosts(sortedByLikes);

        // 게시글 최신순 정렬
        const sortedByDate = [...data.data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setLatestPosts(sortedByDate);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        
      });
  };

  // 좋아요 버튼 클릭 핸들러
  const handleLikeClick = (postId, isLiked) => {
    fetch(`/api/v1/like/${postId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to like the post');
        }
        return response.json();
      })
      .then(() => {
        // 좋아요 상태를 토글하고 게시글의 좋아요 개수를 업데이트
        setPosts(prevPosts =>
          prevPosts.map(post =>
            post.boardId === postId
              ? {
                  ...post,
                  isLiked: !isLiked,
                  likes: isLiked ? post.likes - 1 : post.likes + 1,
                }
              : post
          )
        );
      })
      .catch((error) => {
        console.error('Error liking post:', error);
      });
  };

  // 페이지 번호 변경 핸들러
 
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  // 페이지가 변경될 때마다 데이터를 다시 로드
  useEffect(() => {
    getPosts(currentPage, size, boardType);
  }, [currentPage, size]);

  return (
    <div>
      <S.Container>
      <S.TitleHightlight><img 
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
            {/* {hotPosts.map((post) => ( */}
            {posts.map((post) => ( //더미데이터 대신함
              <S.PostItem key={post.boardId} onClick={() => goToPostDetail(post)}>
                <S.TitleBody>
                <S.PostTitle>{post.title}</S.PostTitle> <S.PostContent>{post.content}</S.PostContent>
                </S.TitleBody>
                {post.imageUrl && <S.PostImage>
                  <img src={post.imageUrl}/>
                </S.PostImage>}
                <S.UnderTitleContainer>
                
                <S.LikeContainer>
                  <FontAwesomeIcon
                    icon={post.isLiked ? filledHeart : emptyHeart}
                    onClick={() => handleLikeClick(post.boardId, post.isLiked)}
                    // style={{ cursor: 'pointer', color: post.isLiked ? 'red' : 'gray' }}
                  />
                   <div >{post.likeCount}</div> 
                  </S.LikeContainer>
                  
                  <S.CommentContainer>
                    <FontAwesomeIcon icon={faComment} />
                    <div>{post.comment}</div> 
                  </S.CommentContainer>
                  
                  <S.PostInfo>
                      {post.userId} | {formatDate(post.createdAt)}
                  </S.PostInfo>
                </S.UnderTitleContainer>
                
              </S.PostItem>
            ))}
          </S.PostList>
        </S.HotPostContainer>
        
        
        {/* 최신 게시글 리스트 */}
        <S.LatestPostContainer>
          <S.PostList>
            {/* {latestPosts.map((post) => ( */}
            {posts.map((post) => (
              <S.PostItem key={post.boardId}>
                <S.TitleBody>
                  <S.PostTitle>{post.title}</S.PostTitle>
                  <S.PostContent>{post.content}</S.PostContent>
                  </S.TitleBody>
                  {post.imageUrl && <S.PostImage>
                  <img src={post.imageUrl}/>
                </S.PostImage>}
                <S.UnderTitleContainer>
                <S.LikeContainer>
                  <FontAwesomeIcon
                    icon={post.isLiked ? filledHeart : emptyHeart}
                    onClick={() => handleLikeClick(post.boardId, post.isLiked)}
                    style={{ cursor: 'pointer', color: post.isLiked ? 'red' : 'gray' }}
                  />
                   <div>{post.likeCount}</div> 
                  {/* <div>{post.likes}</div> */} 
                  </S.LikeContainer>
                  <S.CommentContainer>
                    <FontAwesomeIcon icon={faComment} />
                    <div>{post.comment}</div> 
                  </S.CommentContainer>

                  <S.PostInfo>
                      {post.userId} | {formatDate(post.createdAt)}
                  </S.PostInfo>
                </S.UnderTitleContainer>
              </S.PostItem>
            ))}
          </S.PostList>
        </S.LatestPostContainer>

        {/* 페이지네이션 */}
        <S.PaginationContainer>
          <S.PageButton onClick={() => handlePageChange(Math.max(0, currentPage - 1))} disabled={currentPage === 0}>
            &lt;
          </S.PageButton>
          {Array.from({ length: totalPages }, (_, index) => (
            <S.PageButton
              key={index}
              onClick={() => handlePageChange(index)}
              disabled={index === currentPage}
            >
              {index + 1}
            </S.PageButton>
          ))}
          <S.PageButton onClick={() => handlePageChange(Math.min(totalPages - 1, currentPage + 1))} disabled={currentPage === totalPages - 1}>
            &gt;
          </S.PageButton>
        </S.PaginationContainer>
      </S.Container>
    </div>
  );
};

export default PostPage;
