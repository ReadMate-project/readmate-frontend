import React, { useState } from 'react';
import S from './style';
import Select from 'react-select';
import Dropdown3 from './Dropdown3';


const Dropdown = () => {
    const [selectedLibraryBook, setSelectedLibraryBook] = useState('');
    const [selectedChallenge, setSelectedChallenge] = useState('');
    const [selectedSearchBook, setSelectedSearchBook] = useState(null);

    const libraryBook = ['book1', 'book2', 'book3', 'book4', 'book5'];
    const challenge = ['bookclub1', 'bookclub2', 'bookclub3'];
    const bookOptions = libraryBook.map(book => ({ value: book, label: book }));

    const handleLibraryBookChange = (option) => {
        setSelectedLibraryBook(option);
    };

    const handleChallengeChange = (option) => {
        setSelectedChallenge(option);
    };

    const handleSearchBookChange = (selectedOption) => {
        setSelectedSearchBook(selectedOption); // 선택된 옵션 저장
    
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


  return (
    <S.DropdownContainer>
      <S.Dropdown>
      <select
          id="libraryBookDropdown"
          value={selectedLibraryBook}
          onChange={(e) => handleLibraryBookChange(e.target.value)}
        >
          <option value="">서재 책 선택하기</option>
          {libraryBook.map((book) => (
            <option key={book} value={book}>
              {book}
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

      {/* <S.Dropdown>
        <div className='search'>
            <Select
            id="searchBookDropdown"
            value={selectedSearchBook}
            onChange={handleSearchBookChange}
            options={bookOptions} // react-select는 옵션을 객체 배열로 받음
            placeholder="책 검색하기"
            styles={customStyles}
            />
        </div>
      </S.Dropdown> */}

    <Dropdown3/>
    </S.DropdownContainer>
  );
};
   


export default Dropdown;