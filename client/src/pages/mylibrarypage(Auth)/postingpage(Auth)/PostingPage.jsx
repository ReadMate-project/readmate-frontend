import React, { useRef, useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router';
import Dropdown from './dropdown/Dropdown';
import SimpleBook from '../../../components/book/SimpleBook';
import apiClient from '../../../api/apiClient';
import { useUser } from '../../../context/UserContext';

const PostingPage = () => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null); // input에 접근하기 위한 ref
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedBook, setSelectedBook] = useState(null);
    const { user } = useUser();
    const navigate=useNavigate();
    
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        
        if (files.length + images.length > 5) {
            alert('최대 5개의 이미지만 업로드할 수 있습니다.');
            return;
        }

        setImages(prevImages => [...prevImages, ...files]);
    };
    
    const handleImageClick = () => {
        fileInputRef.current.click(); // 이미지 클릭 시 input 클릭
    };

    const handleRemoveImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const handleCancle=()=>{
        navigate('/posts')
    }
    
    const handleTitleChange = (e) => {
        const input = e.target.value;
        if (input.length <= 10) {
            setTitle(input);
        }
    };
    
    //저장 버튼 클릭 시 서버에 POST 요청 보내기
    const handleSubmit = async() => {
        if (!selectedBook) {
            alert('책을 선택해주세요.');
            return;
        }
        if (!title.trim()) {
            alert('제목을 입력해주세요.');
            return;
        }

        const requestBody = {
            userId: user.userId,
            bookId: selectedBook.book.isbn13,
            content,
            title,
            boardType: "FEED",
          };
            
          const formData = new FormData();
            formData.append('boardRequest', JSON.stringify(requestBody)); // JSON으로 변환하여 추가
            images.forEach((image, index) => {
                formData.append('images', image); // 각 이미지 파일을 추가
            });
          try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await apiClient.post('/v1/board', formData, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data',              
            },
            });
          
            navigate('/essay')
          } catch (error) {
            console.error('게시물 생성 실패:', error.response || error.message);
          }
        
    };

   
    return (
        <div>
            <S.Container>
              
                <S.TitleContainer>
                  <S.TitleHightlight>
                    <img src={process.env.PUBLIC_URL + '/global/images/mylibrarypage/essayhightlight.png'}  alt="에세이"/>
                  </S.TitleHightlight>
                  {/* <S.Dropdown> */}
                      <S.TitleText>글쓰기</S.TitleText>
                      <Dropdown setSelectedBook={setSelectedBook}/>
                  {/* </S.Dropdown> */}
                      
                </S.TitleContainer>
                <S.Line></S.Line>
                
                <S.BookContainer>
                   
                    {selectedBook&&
                        <SimpleBook book={selectedBook} />
                    }
                </S.BookContainer>
                <S.BodyContainer>
                    <input type="text" 
                            placeholder='제목' 
                            id="title" 
                            value={title} 
                            onChange={handleTitleChange} 
                    />
                    <textarea id="body"
                            value={content} 
                            onChange={(e) => setContent(e.target.value)}>
                    </textarea>
                    <S.ImageButtonContainer>
                        <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                            <img
                                src={`${process.env.PUBLIC_URL}/global/images/postpage/pictureButton.png`}
                                alt="Upload"
                            />
                        </div>
                    </S.ImageButtonContainer>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        multiple
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                    <S.ImagePreviewContainer>
                        {images.map((image, index) => (
                            <S.ImagePreview key={index}>
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`미리보기 ${index + 1}`}
                                />
                                <S.RemoveButton onClick={() => handleRemoveImage(index)}>X</S.RemoveButton>
                            </S.ImagePreview>
                        ))}
                    </S.ImagePreviewContainer>

                </S.BodyContainer>
                
                <S.Line></S.Line>
                <S.ButtonContainer>
                        <S.Button onClick={handleSubmit} >저장</S.Button>
                        <S.Button onClick={handleCancle}>취소</S.Button>
                </S.ButtonContainer>
            </S.Container>
        </div>
    );
};

export default PostingPage;
