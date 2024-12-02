import React, { useEffect, useRef, useState } from 'react';
import S from './style';
// import { useNavigate } from 'react-router';
import { useLocation, useNavigate } from 'react-router-dom';
import apiClient from '../../../api/apiClient';

const ModifyPost = () => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null); // input에 접근하기 위한 ref
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [boardId,setBoardId] = useState('');
    const location = useLocation();
    const { post } = location.state || {}; // PostDetailPage에서 전달된 post 정보
    const navigate=useNavigate();
    
    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);
            setBoardId(post.boardId);
            setImages(post.images || []); // 이미지를 초기값으로 설정
        }
    }, [post]);
    
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
        navigate(-1);
    }
    //저장 버튼 클릭 시 서버에 POST 요청 보내기
    const handleSubmit = async() => {
        if (!title.trim()) {
            alert('제목을 입력해주세요.');
            return; 
        }

        const requestData = {
            content,
            title,
        };

        // FormData 생성
        const formData = new FormData();
        formData.append('updateRequest', JSON.stringify(requestData));
       
        images.forEach((image, index) => {
            formData.append('images', image); // 각 이미지 파일을 추가
        });
        // FormData 내용 확인
            console.log("FormData 내용:");
            for (let [key, value] of formData.entries()) {
                console.log(`${key}:`, value);
            }

        try {
            console.log(formData);
            const accessToken = localStorage.getItem('accessToken');
            const response = await apiClient.patch(`/v1/board/${boardId}`, formData, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            console.log('Post modify successfully:', response.data);
            navigate(-1);
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
                <S.TitleHightlight><img 
                    src={process.env.PUBLIC_URL + '/global/images/postpage/board.png'}  alt="게시판"/>
                </S.TitleHightlight>
                    <S.TitleText>글 수정하기</S.TitleText>
                </S.TitleContainer>
                <S.Line></S.Line>
                <S.BodyContainer>
                    <input 
                        type="text" 
                        placeholder='제목' 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <textarea 
                        id="body"
                        value={content} 
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    
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

export default ModifyPost;