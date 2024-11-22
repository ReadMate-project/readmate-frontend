import React, { useEffect, useState } from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';

const BookReviewContainer = ({ bookDetails }) => {
  const [essays, setEssays] = useState([]);

  // 더미 데이터 (실제 데이터는 서버에서 가져와야 함)
  const dummyEssays = [
    {
      boardId: 1,
      title: '소년이 온다를 읽고',
      content: '첫 번째 에세이 내용',
      userId: 'user1',
      createdAt: '2024-09-30T20:09:59.989724',
      likeCount: 10,
      comment: 5,
      isbn13: '9788936434120',
      bookImage:"https://image.aladin.co.kr/product/33726/97/cover150/k442939542_2.jpg",

    },
    {
      boardId: 2,
      title: '한강작가의 책',
      content: '두 번째 에세이 내용',
      userId: 'user2',
      createdAt: '2024-10-07T09:24:33.002345',
      likeCount: 5,
      comment: 5,
      isbn13: '9788936434120',
      bookImage:"https://image.aladin.co.kr/product/33726/97/cover150/k442939542_2.jpg",

    },
    {
      boardId: 3,
      title: '소년이 온다를 읽고서',
      content: '세 번째 에세이 내용',
      userId: 'user3',
      createdAt: '2024-10-06T18:30:00',
      likeCount: 8,
      comment: 12,
      isbn13: '9788936434120',
      bookImage:"https://image.aladin.co.kr/product/33726/97/cover150/k442939542_2.jpg",

    },
  ];

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

  useEffect(() => {
    // ISBN에 해당하는 에세이 필터링
    const filteredEssays = dummyEssays.filter(essay => essay.isbn13 === bookDetails.isbn13);
    setEssays(filteredEssays);
  }, [bookDetails.isbn13]);

  return (
    <S.Container className='bookReviews'>
      {essays.length === 0 ? (
        <p>No reviews available for this book.</p>
      ) : (
        <S.PostList>
            {/* {latestPosts.map((post) => ( */}
            {essays.map((essay) => (
              <S.PostItem key={essay.boardId}>
              <S.PostContainer>
                  <S.BookContainer>
                      <S.BookImage>
                          <img src={essay.bookImage} alt="BookCover"/>
                      </S.BookImage>
                      
                  </S.BookContainer>

                  <S.TextContainer>
                      <S.TitleBody>
                          <S.PostTitle>{essay.title}</S.PostTitle> 
                          <S.PostContent>{essay.content}</S.PostContent>
                      </S.TitleBody>
                      <S.UnderTitleContainer>
                          <S.LikeContainer>
                          <FontAwesomeIcon
                              icon={essay.isLiked ? filledHeart : emptyHeart}
                              onClick={() => handleLikeClick(essay.boardId, essay.isLiked)}
                              // style={{ cursor: 'pointer', color: post.isLiked ? 'red' : 'gray' }}
                          />
                          <div >{essay.likeCount}</div> 
                          </S.LikeContainer>

                          <S.CommentContainer>
                              <FontAwesomeIcon icon={faComment} />
                              <div>{essay.comment}</div> 
                          </S.CommentContainer>

                          <S.PostInfo>
                              {essay.userId} | {formatDate(essay.createdAt)}
                          </S.PostInfo>
                      </S.UnderTitleContainer>
                  </S.TextContainer>
              </S.PostContainer>
            </S.PostItem>
             
            ))}
          </S.PostList>
      )}
    </S.Container>
  );
};

export default BookReviewContainer;
