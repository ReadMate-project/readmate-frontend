import React, { useRef, useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router';
import axios from 'axios';

const CreatePostPage = () => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null); // input에 접근하기 위한 ref
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
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
    
    // 제목 입력 시 10글자 제한
    const handleTitleChange = (e) => {
        const input = e.target.value;
        if (input.length <= 10) {
            setTitle(input);
        }
    };
    //저장 버튼 클릭 시 서버에 POST 요청 보내기
    const handleSubmit = async () => {
        const accessToken = localStorage.getItem('accessToken');
        console.log(accessToken);
        const requestData = {
            content: content,
            title: title,
            boardType: "BOARD"
        };
    
        try {
            const response = await axios.post(
                'http://3.35.193.132:8080/api/v1/board',
                requestData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );
    
            console.log('Post created successfully:', response.data);
            navigate('/posts');
        } catch (error) {
            if (error.response) {
                console.log(error);
                // const status = error.response.status;
                // const data = error.response.data;
    
                // if (status === 401 || status === 403) {
                //     setErrorMessage(data.message);
                //     console.log(errorMessage);
                // } else {
                //     console.error('Server response error:', data);
                // }
            } else {
                // 네트워크 에러 또는 요청이 전송되지 않았을 경우
                console.error('Error creating post:', error);
            }
        }
    };

    return (
        <div>
            <S.Container>
                <S.TitleContainer>
                <S.TitleHightlight><img 
                    src={process.env.PUBLIC_URL + '/global/images/postpage/board.png'}  alt="게시판"/>
                </S.TitleHightlight>
                    <S.TitleText>글쓰기</S.TitleText>
                </S.TitleContainer>
                <S.Line></S.Line>
                <S.BodyContainer>
                    <input 
                        type="text" 
                        placeholder='제목' 
                        id="title" value={title} 
                        onChange={handleTitleChange} 
                    />
                    <textarea id="body"
                            value={content} 
                            onChange={(e) => setContent(e.target.value)}>
                    </textarea>
                    <S.ImageButtonContainer>
                    <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                        <img 
                            src={process.env.PUBLIC_URL + '/global/images/postpage/pictureButton.png'} 
                            alt="Upload"
                        />
                    </div>
                    </S.ImageButtonContainer>
                    {/* 이미지 업로드 영역 */}
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        multiple
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                    
                    {/* 미리보기 영역 */}
                    <S.ImagePreviewContainer>
                        {images.map((image, index) => (
                            <S.ImagePreview key={index}>
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`미리보기 ${index + 1}`}
                                    
                                />
                                <S.RemoveButton onClick={() => handleRemoveImage(index)}>
                                    X
                                </S.RemoveButton>
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

export default CreatePostPage;