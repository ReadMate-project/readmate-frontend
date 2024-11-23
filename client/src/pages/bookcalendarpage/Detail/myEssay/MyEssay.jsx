import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import S from './style';
import apiClient from '../../../../api/apiClient';

const MyEssay = ({dateParam}) => {
  const navigate = useNavigate();
  const [essays, setEssays] = useState([]); 

  console.log(dateParam)
  const getDateEssays = () => {
    apiClient
      .get(`v1/board/feeds/${dateParam}`)
      .then((response) => {
        setEssays(response.data.data); // 에세이 설정
        console.log(response.data.data)
      })
      .catch((error) => {
        console.error('Error fetching eesays:', error);
      });
  };

  useEffect(() => {
    getDateEssays();
  }, []);
  

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
                          <img src={essay.bookResponse.bookCover} alt="BookCover"/>  
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
                            {new Date(new Date(essay.writeDate).getTime() + 9 * 60 * 60 * 1000).toLocaleString('ko-KR')}
                          </S.PostInfo>
                      </S.UnderTitleContainer>
                  </S.TextContainer>
              </S.PostContainer>
              </S.PostItem>
            ))}
          </S.PostList>
  
    </div>
  );
};

export default MyEssay;
