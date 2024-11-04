import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import S from './style';
import MyEssay from '../myEssay/MyEssay';

const BookRecordPage = () => {

  const navigate=useNavigate();

  const goToWriteEssay=()=>{
    navigate('/essay/createEssay')
  }
  return (
    <>
        <S.Background>
           <S.TitleHightlight>
              <img src={process.env.PUBLIC_URL + '/global/images/mylibrarypage/hightlight.png'}  alt="게시판"/>
            </S.TitleHightlight>
            <S.Line></S.Line>
            <S.BookCount>
              책 개수:11개
            </S.BookCount>
            <S.BookShelf>
              <img src={process.env.PUBLIC_URL + '/global/images/mylibrarypage/bookShelf.png'}  alt="게시판"/>
              {/* 추후 배열로 리팩토링해야함 */}
              <S.BookComponent className='book1'>
                
              </S.BookComponent >
              
              <S.BookComponent className='book2'>
                
              </S.BookComponent>
              
              <S.BookComponent className='book3'>
                
              </S.BookComponent>

              <S.BookComponent className='book4'>
                
              </S.BookComponent>

              <S.BookComponent className='book5'>
                
              </S.BookComponent>

              <S.BookComponent className='book6'>
                
              </S.BookComponent>

              <S.BookComponent className='book7'>
                
              </S.BookComponent>

              <S.BookComponent className='book8'>
                
              </S.BookComponent>
              
            </S.BookShelf>

            <S.EssayTitleContainer>
              <S.TitleHightlight>
                <img id='essay' src={process.env.PUBLIC_URL + '/global/images/mylibrarypage/essayhightlight.png'}  alt="게시판"/>
              </S.TitleHightlight>  
              <S.WriteEssayButton onClick={goToWriteEssay}>에세이 쓰기</S.WriteEssayButton>
            </S.EssayTitleContainer>
            
            <S.EssayBodyContainer>
              {/* <S.Essay>
                <S.EssayItem></S.EssayItem>
              </S.Essay> */}
              <MyEssay/>
            </S.EssayBodyContainer>
        </S.Background>
    </>
  );
};

export default BookRecordPage;