// hooks/Aladin/useBookDetails.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://readmate-frontend-1006yunthpy.vercel.app/apiServerless'; // Vercel 서버리스 함수의 URL
const useBookDetails = (isbn) => {
  const [bookDetails, setBookDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        console.log(`Requesting book details for ISBN: ${isbn}`);
        const response = await axios.get(`${API_BASE_URL}/itemLookUp`, {
          params: { isbn }
        });
        console.log('API Response:', response.data);

        if (response.data.object && response.data.object.item) {
          const bookData = response.data.object.item;
          console.log('Book Data:', bookData);
          setBookDetails(bookData);
        } else {
          throw new Error('Invalid response structure');
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setError('책 정보를 가져오는 동안 오류가 발생했습니다.');
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    setError(null);
    fetchBookDetails();
  }, [isbn]);

  return { bookDetails, isLoading, error };
};

export default useBookDetails;
