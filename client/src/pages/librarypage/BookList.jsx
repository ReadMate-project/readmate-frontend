import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookDetails from './BookDetails';

const BookList = ({ books }) => {
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const details = await Promise.all(
        books.map(async (book) => {
          const response = await axios.get(`http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=${process.env.ALADIN_API_KEY}&ItemId=${book.isbn}&itemIdType=ISBN13&output=JS&Version=20131101`);
          return response.data.item[0];
        })
      );
      setBookDetails(details);
    };

    if (books.length > 0) {
      fetchBookDetails();
    }
  }, [books]);

  return (
    <div>
      {bookDetails.map((detail, index) => (
        <BookDetails key={index} book={detail} />
      ))}
    </div>
  );
};

export default BookList;
