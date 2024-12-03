import React, { useEffect, useState } from 'react';
import S from './style';
import Select from 'react-select';
import Dropdown3 from './Dropdown3';
import apiClient from '../../../../api/apiClient';
import SearchModal from '../../../searchpage/SearchModal';


const Dropdown = ({ setSelectedBook }) => {
    const [selectedLibraryBook, setSelectedLibraryBook] = useState([]);
    const [selectedChallenge, setSelectedChallenge] = useState('');
  
    
    const challenge = ['bookclub1', 'bookclub2', 'bookclub3'];

    const handleLibraryBookChange = (bookId) => {
      const selected = selectedLibraryBook.find((item) => item.myBookId === parseInt(bookId));
      if (selected) {
          setSelectedBook(selected); // 부모 컴포넌트로 선택된 책 전달
          console.log('Selected Book:', selected);
      }
  };

    const handleChallengeChange = (option) => {
        setSelectedChallenge(option);
    };


    // react-select 커스텀 스타일
    const customStyles = {
        control: (provided) => ({
        ...provided,
        backgroundColor: '#BBAB8C', 
        boxShadow: 'none',
        borderRadius:'0.5rem',
        boxShadow: 'none',
        outline:'none',
        padding:0,
        color:'#717171',
        border:'none',
        }),
        option: (provided, state) => ({
        ...provided,
        outline: 'none', // outline 제거
        border: 'none', 
        backgroundColor: state.isFocused ? '#DED0B6' : 'white', 
        color:'black'
        }),
        
        placeholder: (provided) => ({
        ...provided,
        color:'#717171',
        }),
        
    };

    useEffect(() => {
      const fetchBooks = async () => {
          try {
              const accessToken = localStorage.getItem('accessToken');
              
              const response = await apiClient.get('/v1/user/book', {
                  headers: {
                      Authorization: `Bearer ${accessToken}`, 
                  },
              });
    
              console.log('Books fetched successfully:', response.data.data);
              setSelectedLibraryBook(response.data.data); // 도서 데이터를 상태로 설정
          } catch (error) {
              console.error('Error fetching books:', error);
            
          }
      };
    
      fetchBooks();
      }, []); 


  return (
    <S.DropdownContainer>
      <S.Dropdown>
        <select
            id="libraryBookDropdown"
            
            onChange={(e) => handleLibraryBookChange(e.target.value)}
          >
          <option value="">서재 책 선택하기</option>
          {selectedLibraryBook.length > 0 &&
                        selectedLibraryBook.map((item) => (
                            <option key={item.myBookId} value={item.myBookId}>
                                {item.book.title}
                            </option>
                        ))}
        </select>
      </S.Dropdown>
      
       
      {/* 두 번째 드롭다운 (challenge) */}
      <S.Dropdown>
        <select
          id="challengeDropdown"
          value={selectedChallenge}
          onChange={(e) => handleChallengeChange(e.target.value)}
        >
          <option value="">챌린지 선택하기</option>
          {challenge.map((club) => (
            <option key={club} value={club}>
              {club}
            </option>
          ))}
        </select>
      </S.Dropdown>
      
      <S.DropdownContainer3>
        <SearchModal onBookSelect={setSelectedBook}/>
      </S.DropdownContainer3>
    
    </S.DropdownContainer>
  );
};
   


export default Dropdown;