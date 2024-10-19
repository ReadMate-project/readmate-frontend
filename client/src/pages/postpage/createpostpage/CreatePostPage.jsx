import React, { useRef, useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router';

const CreatePostPage = () => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null); // input에 접근하기 위한 ref
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate=useNavigate();
    const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
        

        if (files.length + images.length > 10) {
            alert('최대 10개의 이미지만 업로드할 수 있습니다.');
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
    //저장 버튼 클릭 시 서버에 POST 요청 보내기
    const handleSubmit = () => {
        
        const requestData = {
            userId: '', //정해야함 
            title: title,
            content: content,
            boardType: "BOARD" 
        };

        fetch('/api/v1/board', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` //로컬스토리지 할건지 리덕스할건지 정해야함
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    // 401(로그인을 진행해주세요) 403(해당 북클럽의 회원이 아닙니다)
                    if (response.status === 401 || response.status === 403) {
                        setErrorMessage(data.message);
                        console.log(errorMessage);
                    }
                    throw new Error('Network response was not ok');
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Post created successfully:', data);
            navigate('/posts'); 
        })
        .catch(error => {
            console.error('Error creating post:', error);
            
        });
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
                    <input type="text" 
                            placeholder='제목' 
                            id="title" value={title} 
                            onChange={(e) => setTitle(e.target.value)} />
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