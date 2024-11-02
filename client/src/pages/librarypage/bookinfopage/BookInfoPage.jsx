import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookInfoHeader from './BookInfoHeader';
import BookInfoDetails from './BookInfoDetails';

const BookInfoPage = () => {
  const { isbn } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=${process.env.ALADIN_API_KEY}&ItemId=${isbn}&itemIdType=ISBN13&output=JS&Version=20131101`);
        setBookDetails(response.data.item[0]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setIsLoading(false);
      }
    };

    fetchBookDetails();
  }, [isbn]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BookInfoHeader title={bookDetails.title} />
      <BookInfoDetails bookDetails={bookDetails} />
    </div>
  );
};

export default BookInfoPage;
