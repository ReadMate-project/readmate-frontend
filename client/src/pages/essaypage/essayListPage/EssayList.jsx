import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import S from './style';

const EssayList = () => {
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
      title: '첫 번째 에세이',
      content:"1980년 5월을 새롭게 조명하며, 무고한 영혼들의 말을 대신 전하는 듯한 진심 어린 문장들로 5·18 이후를 살고 있는 우리에게 묵직한 질문을 던진다. 이 작품은 가장 한국적인 서사로 세계를 사로잡은 한강 문학의 지향점을 보여준다. 인간의 잔혹함과 위대함을 동시에 증언하는 이 충일한 서사는 이렇듯 시공간의 한계를 넘어 인간 역사의 보편성을 보여주며 훼손되지 말아야 할 인간성을 절박하게 복원한다. 저자는 이 작품에서 진심 어린 문장들로 무고한 영혼의 말을 대신 전하며 그 시절을 잊고 무심하게 살아가는 우리에게 묵직한 메시지를 던진다. 국가의 무자비함을 생생하게 그려내 지금까지도 우리나라뿐 아니라 전 세계에서 계속되고 있는 인간의 잔혹함과 악행에 대한 근원적인 질문을 던지고, 잊을 수 없는 봄날의 오월을 지나 여름을 건너가지 못한 이들과 살아남은 것이 오히려 치욕으로 여기며 매일을 힘겹게 견뎌내는 이들에게 우리가 어떤 대답을 해줄 수 있는 가를 간절한 목소리로 묻는다. 그리하여 우리가 붙들어야 할 역사적 기억이 무엇인지 생각하게 한다. 그리하여 우리가 붙들어야 할 역사적 기억이 무엇인지 생각하게 한다. 그리하여 우리가 붙들어야 할 역사적 기억이 무엇인지 생각하게 한다. 그리하여 우리가 붙들어야 할 역사적 기억이 무엇인지 생각하게 한다. 그리하여 우리가 붙들어야 할 역사적 기억이 무엇인지 생각하게 한다. 그리하여 우리가 붙들어야 할 역사적 기억이 무엇인지 생각하게 한다.그리하여 우리가 붙들어야 할 역사적 기억이 무엇인지 생각하게 한다.그리하여 우리가 붙들어야 할 역사적 기억이 무엇인지 생각하게 한다.그리하여 우리가 붙들어야 할 역사적 기억이 무엇인지 생각하게 한다.",
      userId: 'user1',
      createdAt: '2024-09-30T20:09:59.989724',
      likeCount: 10,
      comment:5,
      bookImage:"https://image.aladin.co.kr/product/32765/33/cover150/8901276577_2.jpg",
      bookTitle:"책 제목",
      writer:"작가",
    },
    {
      boardId: 2,
      title: '두 번째 에세이',
      content:"두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용 두 번째 에세이 내용",
      userId: 'user2',
      createdAt: '2024-10-07T09:24:33.002345',
      likeCount: 5,
      comment:5,
      bookImage:"https://image.aladin.co.kr/product/33861/97/cover150/8930107850_1.jpg",
      bookTitle:"책 제목",
      writer:"작가",
    },
    {
      boardId: 3,
      title: '세 번째 에세이',
      content:"세 번째 에세이 내용",
      userId: 'user3',
      createdAt: '2024-10-06T18:30:00',
      likeCount: 8,
      comment:12,
      bookImage:"https://image.aladin.co.kr/product/33726/97/cover150/k442939542_2.jpg",
      bookTitle:"책 제목",
      writer:"작가",
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
  const goToCreateEssay = () => {
    navigate('/essay/createEssay');
  };

   //게시글 상세보기
   const goToEssayDetail=(post)=>{
    navigate('/essay/essaydetail', { state: { post } });
  }

  // 게시글 데이터를 서버에서 가져오는 함수
  const getPosts = (page, size, boardType) => {
    // fetch(`/api/v1/posts/hot?page=${boardType}&${page}&size=${size}`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`, 
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch posts');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setPosts(data.data); // 받아온 전체 게시글 목록 설정
    //     setTotalPages(data.pageInfo.totalPages); // 총 페이지 수 설정

    //     // 게시글 좋아요 수 상위 3개 정렬
    //     const sortedByLikes = [...data.data].sort((a, b) => b.likes - a.likes).slice(0, 3);
    //     setHotPosts(sortedByLikes);

    //     // 게시글 최신순 정렬
    //     const sortedByDate = [...data.data].sort(
    //       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    //     );
    //     setLatestPosts(sortedByDate);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching posts:', error);
        
    //   });
  };

  // 좋아요 버튼 클릭 핸들러
  const handleLikeClick = (postId, isLiked) => {
    // fetch(`/api/v1/like/${postId}`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`, 
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Failed to like the post');
    //     }
    //     return response.json();
    //   })
    //   .then(() => {
    //     // 좋아요 상태를 토글하고 게시글의 좋아요 개수를 업데이트
    //     setPosts(prevPosts =>
    //       prevPosts.map(post =>
    //         post.boardId === postId
    //           ? {
    //               ...post,
    //               isLiked: !isLiked,
    //               likes: isLiked ? post.likes - 1 : post.likes + 1,
    //             }
    //           : post
    //       )
    //     );
    //   })
    //   .catch((error) => {
    //     console.error('Error liking post:', error);
    //   });
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
           src={process.env.PUBLIC_URL + '/global/images/essaypage/essayhightlight.png'}  alt="게시판"/>
        </S.TitleHightlight>
        <S.TitleContainer>
          
          <S.TitleButtonContainer>
            <S.TitleButton className='goToWrite' onClick={goToCreateEssay}>에세이 쓰기</S.TitleButton>
            
          </S.TitleButtonContainer>
        </S.TitleContainer>

        {/* HOT 게시글 리스트 */}
       
        <S.HotPostTitle><img 
           src={process.env.PUBLIC_URL + '/global/images/essaypage/hotessay.png'}  alt="게시판"
        /></S.HotPostTitle>
        <S.HotPostContainer>
        
          <S.PostList>
            
            {/* {hotPosts.map((post) => ( */}
            {posts.map((post) => ( //더미데이터 대신함
              <S.PostItem key={post.boardId} onClick={() => goToEssayDetail(post)}>
                <S.PostContainer>
                    <S.BookContainer>
                        <S.BookImage>
                            <img src={post.bookImage} alt="BookCover"/>
                        </S.BookImage>
                        
                    </S.BookContainer>

                    <S.TextContainer>
                        <S.TitleBody>
                            <S.PostTitle>{post.title}</S.PostTitle> 
                            <S.PostContent>{post.content}</S.PostContent>
                        </S.TitleBody>
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
                    </S.TextContainer>
                </S.PostContainer>
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
              <S.PostContainer>
                  <S.BookContainer>
                      <S.BookImage>
                          <img src={post.bookImage} alt="BookCover"/>
                      </S.BookImage>
                      
                  </S.BookContainer>

                  <S.TextContainer>
                      <S.TitleBody>
                          <S.PostTitle>{post.title}</S.PostTitle> 
                          <S.PostContent>{post.content}</S.PostContent>
                      </S.TitleBody>
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
                  </S.TextContainer>
              </S.PostContainer>
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

export default EssayList;
