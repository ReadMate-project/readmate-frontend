import React, { useState, useEffect } from 'react';
import S from './style';
import axios from 'axios';

const Dropdown3 = () => {
    const [searchQuery, setSearchQuery] = useState('');       // 검색어 상태
    const [searchOptions, setSearchOptions] = useState([]);   // 검색 결과 옵션들
    const [selectedSearchBook, setSelectedSearchBook] = useState(null); // 선택된 책

    // API 요청 함수
    const fetchSearchResults = async (query) => {
        if (!query) {
            setSearchOptions([]);
            return;
        }
        try {
            const response = await axios.get('http://localhost:5000/api/search', {
                params: { query: query.trim() }
            });

            const results = response.data.object?.item;
            const itemsArray = Array.isArray(results) ? results : [results]; // 배열이 아닌 경우 배열로 변환

            const options = itemsArray.map((book) => ({
                id: book.isbn13 || book.isbn,  // 고유 식별자로 사용할 ID (isbn)
                title: book.title,
                author: book.author,
                cover: book.cover
                
            }));
            setSearchOptions(options);
            options.forEach((option) => console.log(option.id));
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    // 검색어 변경 시 API 요청
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchQuery(inputValue);
        fetchSearchResults(inputValue); // 검색어 변경 시 API 호출
    };

    // 검색 결과 선택 시 처리
    const handleOptionClick = (book) => {
        setSelectedSearchBook(book);
        setSearchQuery(book.title); // 선택한 책 제목을 입력창에 표시
        setSearchOptions([]);       // 검색 결과 초기화
    };

    return (
        <S.DropdownContainer3>
            {/* 검색 입력창 */}
            <S.Input3
                type="text"
                placeholder="책 검색하기"
                value={searchQuery}
                onChange={handleInputChange}
            />

            {/* 검색 결과 표시 */}
            {searchOptions.length > 0 && (
                <S.ResultsContainer>
                    {searchOptions.map((book) => (
                        <S.ResultItem key={book.id} onClick={() => handleOptionClick(book)}>
                            <img src={book.cover} alt={book.title} style={{ width: '30px', height: '45px', marginRight: '10px' }} />
                            <div>
                                <strong>{book.title}</strong>
                                <div style={{ fontSize: '0.8rem' }}>{book.author}</div>
                            </div>
                        </S.ResultItem>
                    ))}
                </S.ResultsContainer>
            )}
        </S.DropdownContainer3>
    );
};

export default Dropdown3;

// import React, { useState, useEffect } from 'react';
// import S from './style';
// import Select from 'react-select';
// import axios from 'axios';

// const Dropdown3 = () => {
//     const [selectedSearchBook, setSelectedSearchBook] = useState(null);
//     const [searchOptions, setSearchOptions] = useState([]);
    
//     // react-select 커스텀 스타일
//     const customStyles = {
//         control: (provided) => ({
//             ...provided,
//             backgroundColor: '#BBAB8C',
//             borderRadius: '0.5rem',
//             boxShadow: 'none',
//             padding: 0,
//             color: '#717171',
//             border: 'none',
//         }),
//         option: (provided, state) => ({
//             ...provided,
//             backgroundColor: state.isFocused ? '#DED0B6' : 'white',
//             color: 'black'
//         }),
//         placeholder: (provided) => ({
//             ...provided,
//             color: '#717171',
//         }),
//     };

//     // API 요청 함수
//     const fetchSearchResults = async (query) => {
//         if (!query) {
//             setSearchOptions([]);
//             return;
//         }
//         try {
//             const response = await axios.get('http://localhost:5000/api/search', {
//                 params: { query: query.trim() }
//             });

//             const results = response.data.object?.item;
//             const itemsArray = Array.isArray(results) ? results : [results]; // 배열이 아닌 경우 배열로 변환

//             const options = itemsArray.map((book) => ({
//                 value: book.isbn13 || book.isbn, // ISBN 값이 없을 경우 예외 처리
//                 label: (
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <img src={book.cover} alt={book.title} style={{ width: '30px', height: '45px', marginRight: '10px' }} />
//                         <div>
//                             <strong>{book.title}</strong>
//                             <div style={{ fontSize: '0.8rem' }}>{book.author}</div>
//                         </div>
//                     </div>
//                 ),
//             }));
//             setSearchOptions(options);
//         } catch (error) {
//             console.error('Error fetching search results:', error);
//         }
//     };

//     // 검색어 입력 시 API 요청 트리거
//     const handleInputChange = (inputValue) => {
//         // setSearchOptions([]); // 기존 검색 결과 초기화
//         fetchSearchResults(inputValue); // 새로운 검색어로 API 호출
//     };

//     // 선택된 검색 결과 처리
//     const handleSearchBookChange = (selectedOption) => {
//         setSelectedSearchBook(selectedOption);
//     };

//     return (
//         <S.DropdownContainer>
//             <S.Dropdown>
//                 <div className="search">
//                     <Select
//                         id="searchBookDropdown"
//                         value={selectedSearchBook}
//                         onChange={handleSearchBookChange}
//                         onInputChange={handleInputChange}
//                         options={searchOptions}
//                         placeholder="책 검색하기"
//                         styles={customStyles}
//                     />
//                 </div>
//             </S.Dropdown>
//         </S.DropdownContainer>
//     );
// };

// export default Dropdown3;