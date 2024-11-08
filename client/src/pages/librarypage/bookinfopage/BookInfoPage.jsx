import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookInfoHeader from './BookInfoHeader';
import BookInfoDetails from './BookInfoDetails';

const BookInfoPage = () => {
  const { isbn } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookDetails = async (isbn) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/details?id=${isbn}`);
      console.log('API Response:', response.data); // API 응답 데이터 확인
      setBookDetails(response.data.item[0]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching book details:', error);
      setError('책 정보를 가져오는 동안 오류가 발생했습니다.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchBookDetails(isbn);
  }, [isbn]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <BookInfoHeader title={bookDetails.title} />
      <BookInfoDetails bookDetails={bookDetails} />
    </div>
  );
};

export default BookInfoPage;
