import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import S from './style';
import MyEssay from '../myEssay/MyEssay';
import apiClient from '../../../api/apiClient';

const BookRecordPage = () => {

  const navigate=useNavigate();
  const [books, setBooks] = useState([]); // 책 상태 배열
  const [currentPage, setCurrentPage] = useState(0); 

  const booksPerPage = 8;

  const goToWriteEssay=()=>{
    navigate('/essay/createEssay')
  }


//   const postMultipleBookData = async () => {
//     const isbnList = [
//       "9791168272361",
//       "9791191043976",
//       "9788987203959"
//       ];

//     try {
//         const accessToken = localStorage.getItem('accessToken');
//         if (!accessToken) {
//             alert('로그인이 필요합니다.');
//             return;
//         }

//         for (const isbn of isbnList) {
//             try {
//                 const response = await apiClient.post(
//                     `/v1/user/book?isbn13=${isbn}`,
//                     null, // 요청 본문 데이터
//                     {
//                         headers: {
//                             Authorization: `Bearer ${accessToken}`, // 인증 헤더 추가
//                         },
//                     }
//                 );
//                 console.log(`Book data posted successfully for ISBN ${isbn}:`, response.data);
//             } catch (error) {
//                 console.error(`Error posting book data for ISBN ${isbn}:`, error);
//             }
//         }

//         alert('모든 요청이 완료되었습니다.');
//     } catch (error) {
//         console.error('Error processing multiple book data:', error);
//         alert('요청 처리 중 오류가 발생했습니다.');
//     }
// };



// useEffect(()=>{
//   postMultipleBookData();
// },[]);


useEffect(() => {
  const fetchBooks = async () => {
      try {
          const accessToken = localStorage.getItem('accessToken');
          
          const response = await apiClient.get('/v1/user/book', {
              headers: {
                  Authorization: `Bearer ${accessToken}`, // 인증 헤더 추가
              },
          });

          console.log('Books fetched successfully:', response.data.data);
          setBooks(response.data.data); // 도서 데이터를 상태로 설정
      } catch (error) {
          console.error('Error fetching books:', error);
        
      }
  };

  fetchBooks();
  }, []); 

  // 현재 페이지에 표시할 책들
  const currentBooks = books.slice(
    currentPage * booksPerPage,
    (currentPage + 1) * booksPerPage
  );

  // 페이지 이동 핸들러
  const handleNextPage = () => {
    if ((currentPage + 1) * booksPerPage < books.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
        <S.Background>
           <S.TitleHightlight>
              <img src={process.env.PUBLIC_URL + '/global/images/mylibrarypage/hightlight.png'}  alt="게시판"/>
            </S.TitleHightlight>
            <S.Line></S.Line>
            <S.BookCount>
              책 개수: {books.length}개
            </S.BookCount>
            <S.BookShelf>
                <S.NavigationButton onClick={handlePrevPage} disabled={currentPage === 0}>
                {'<'}
                </S.NavigationButton>

              <img src={process.env.PUBLIC_URL + '/global/images/mylibrarypage/bookShelf.png'}  alt="게시판"/>
              
              {currentBooks.map((book, index) => (
                <S.BookComponent key={index} className={`book${index + 1}`}>
                  <img src={book.book.bookCover} alt={`책 ${index + 1}`} />
                </S.BookComponent>
              ))}
              
              <S.NavigationButton
                onClick={handleNextPage}
                disabled={(currentPage + 1) * booksPerPage >= books.length}
              >
                {'>'}
          </S.NavigationButton>

            </S.BookShelf>

            <S.EssayTitleContainer>
              <S.TitleHightlight>
                <img id='essay' src={process.env.PUBLIC_URL + '/global/images/mylibrarypage/essayhightlight.png'}  alt="게시판"/>
              </S.TitleHightlight>  
              <S.WriteEssayButton onClick={goToWriteEssay}>에세이 쓰기</S.WriteEssayButton>
            </S.EssayTitleContainer>
            
            <S.EssayBodyContainer>
              <MyEssay/>
            </S.EssayBodyContainer>
        </S.Background>
    </>
  );
};

export default BookRecordPage;