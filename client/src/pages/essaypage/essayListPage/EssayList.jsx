import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import S from './style';
import apiClient from '../../../api/apiClient';

const EssayList = () => {
  const navigate = useNavigate();
  const [hotEssays,setHotEssays]=useState([]);
  const [essays, setEssays] = useState([]); 
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
  const [currentPageGroup, setCurrentPageGroup] = useState(0); // 페이지 그룹
  const pageSize = 10; // 한 페이지에 표시할 게시글 수
  const pageGroupSize = 5; // 페이지 그룹 크기


  // 전체에세이 목록 조회
  const getAllEssays = (page) => {
    apiClient
      .get(`/v1/board/?boardType=FEED&page=${page}&size=${pageSize}`)
      .then((response) => {
        setEssays(response.data.data); // 에세이 설정
        setTotalPages(response.data.pageInfo.totalPages); // 총 페이지 수 설정
        console.log(response.data.data)
      })
      .catch((error) => {
        console.error('Error fetching eesays:', error);
      });
  };

  useEffect(() => {
    getAllEssays(currentPage);
  }, [currentPage]);

  const fetchHotEssays = () => {
    apiClient
        .get(`/v1/board/hotpost/essay?page=${0}&size=${3}`)
        .then((response) => {
            console.log(response.data);
            setHotEssays(response.data.data); // 핫 게시글 데이터 설정
            // setTotalPages(response.data.pageInfo.totalPages); 
        })
        .catch((error) => {
            console.error('Error fetching hot posts:', error);
        });
};

  useEffect(() => {
    fetchHotEssays();  
  }, [currentPage]);
 
  //하트 클릭 시 색 바뀌게 하고 숫자 업데이트
  const handleLikeClick = (postId, isLiked) => {
    // apiClient
    //   .post(`/v1/like/${postId}`)
    //   .then(() => {
    //     setPosts((prevPosts) =>
    //       prevPosts.map((post) =>
    //         post.boardId === postId
    //           ? { ...post, isLiked: !isLiked, likeCount: isLiked ? post.likeCount - 1 : post.likeCount + 1 }
    //           : post
    //       )
    //     );
    //   })
    //   .catch((error) => {
    //     console.error('Error liking post:', error);
    //   });
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
  const goToCreateEssay = () => {
    navigate('/essay/createEssay');
  };
  
  //게시글 상세보기
  const goToEssayDetail=(boardId)=>{
    navigate(`/essay/essaydetail?boardId=${boardId}`);
  }

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
       
        <S.HotPostTitle>
          <img 
           src={process.env.PUBLIC_URL + '/global/images/essaypage/hotessay.png'}  alt="게시판"
          />
        </S.HotPostTitle>
        
        <S.HotPostContainer>
        <S.PostList>
            {hotEssays.map((hotEssay) => (
              <S.PostItem key={hotEssay.boardId} onClick={() => goToEssayDetail(hotEssay.boardId)}>
                <S.PostContainer>
                  <S.BookContainer>
                      <S.BookImage>
                          <img src={hotEssay.bookCover} alt="BookCover"/>  
                      </S.BookImage>
                      
                  </S.BookContainer>

                  <S.TextContainer>
                      <S.TitleBody>
                          <S.PostTitle>{hotEssay.title}</S.PostTitle> 
                          <S.PostContent>{hotEssay.content}</S.PostContent>
                      </S.TitleBody>
                      <S.UnderTitleContainer>
                          <S.LikeContainer>
                          <FontAwesomeIcon
                              icon={hotEssay.isLiked ? filledHeart : emptyHeart}
                              // onClick={() => handleLikeClick(post.boardId, post.isLiked)}
                              // style={{ cursor: 'pointer', color: post.isLiked ? 'red' : 'gray' }}
                          />
                          <div >{hotEssay.likeCount}</div> 
                          </S.LikeContainer>

                          <S.CommentContainer>
                              <FontAwesomeIcon icon={faComment} />
                              <div>{hotEssay.commentCount}</div> 
                          </S.CommentContainer>

                          <S.PostInfo>
                            {hotEssay.nickname} |{" "}
                            {new Date(new Date(hotEssay.createdAt).getTime() + 9 * 60 * 60 * 1000).toLocaleString('ko-KR')}
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
            {essays.map((essay) => (
              <S.PostItem key={essay.boardId} onClick={() => goToEssayDetail(essay.boardId)}>
                <S.PostContainer>
                  <S.BookContainer>
                      <S.BookImage>
                          <img src={essay.bookCover} alt="BookCover"/>  
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
                              // onClick={() => handleLikeClick(post.boardId, post.isLiked)}
                              // style={{ cursor: 'pointer', color: post.isLiked ? 'red' : 'gray' }}
                          />
                          <div >{essay.likeCount}</div> 
                          </S.LikeContainer>

                          <S.CommentContainer>
                              <FontAwesomeIcon icon={faComment} />
                              <div>{essay.commentCount}</div> 
                          </S.CommentContainer>

                          <S.PostInfo>
                            {essay.nickname} |{" "}
                            {new Date(new Date(essay.createdAt).getTime() + 9 * 60 * 60 * 1000).toLocaleString('ko-KR')}
                          </S.PostInfo>
                      </S.UnderTitleContainer>
                  </S.TextContainer>
              </S.PostContainer>
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

export default EssayList;
