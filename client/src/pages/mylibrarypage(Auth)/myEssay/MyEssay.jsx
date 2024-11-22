import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import S from './style';
import apiClient from '../../../api/apiClient';

const MyEssay = () => {
  const navigate=useNavigate();
  const [essays, setEssays] = useState([]); 
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
  const [currentPageGroup, setCurrentPageGroup] = useState(0); // 페이지 그룹
  const pageSize = 5; // 한 페이지에 표시할 게시글 수
  const pageGroupSize = 5; // 페이지 그룹 크기


  const getMyEssays = (page) => {
    const accessToken = localStorage.getItem('accessToken'); // 로컬스토리지에서 accessToken 가져오기

    apiClient
        .get(`/v1/board/mypost?boardType=FEED&page=${page}&size=${pageSize}`, {
            headers: {
                Authorization: `Bearer ${accessToken}` // 헤더에 토큰 추가
            }
        })
        .then((response) => {
          console.log(response.data);
            setEssays(response.data.data); // 받아온 전체 게시글 목록 설정
            setTotalPages(response.data.pageInfo.totalPages); // 총 페이지 수 설정
        })
        .catch((error) => {
            console.error('Error fetching posts:', error);
        });
};
  
  // 페이지가 변경될 때마다 데이터를 다시 로드
  useEffect(() => {
      getMyEssays(currentPage);
     
  }, [currentPage]);

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
  
   //게시글 상세보기
   const goToEssayDetail=(boardId)=>{
    navigate(`/essay/essaydetail?boardId=${boardId}`);
  }
  
  

 

  return (
    <div>

        <S.PostList>
            {essays.map((essay) => (
              <S.PostItem key={essay.boardId} onClick={() => goToEssayDetail(essay.boardId)}>
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
    
    </div>
  );
};

export default MyEssay;
