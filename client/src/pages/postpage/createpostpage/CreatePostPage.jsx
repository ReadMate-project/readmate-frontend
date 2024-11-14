import React, { useRef, useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router';
import apiClient from '../../../api/apiClient';

const CreatePostPage = () => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + images.length > 5) {
            alert('최대 5개의 이미지만 업로드할 수 있습니다.');
            return;
        }
        setImages((prevImages) => [...prevImages, ...files]);
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleCancel = () => {
        navigate('/posts');
    };

    const handleTitleChange = (e) => {
        const input = e.target.value;
        if (input.length <= 10) {
            setTitle(input);
        }
    };

    const handleSubmit = async () => {
        const requestData = {
            content,
            title,
            boardType: 'BOARD',
        };

        // FormData 생성
        const formData = new FormData();
        formData.append('boardRequest', JSON.stringify(requestData)); // JSON으로 변환하여 추가
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

            console.log('Post created successfully:', response.data);
            navigate('/posts');
        } catch (error) {
            if (error.response) {
                console.log('Server error:', error);
            } else {
                console.error('Network or other error:', error);
            }
        }
    };

    return (
        <div>
            <S.Container>
                <S.TitleContainer>
                    <S.TitleHightlight>
                        <img
                            src={`${process.env.PUBLIC_URL}/global/images/postpage/board.png`}
                            alt="게시판"
                        />
                    </S.TitleHightlight>
                    <S.TitleText>글쓰기</S.TitleText>
                </S.TitleContainer>
                <S.Line />
                <S.BodyContainer>
                    <input
                        type="text"
                        placeholder="제목"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <textarea
                        id="body"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
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
                <S.Line />
                <S.ButtonContainer>
                    <S.Button onClick={handleSubmit}>저장</S.Button>
                    <S.Button onClick={handleCancel}>취소</S.Button>
                </S.ButtonContainer>
            </S.Container>
        </div>
    );
};

export default CreatePostPage;
