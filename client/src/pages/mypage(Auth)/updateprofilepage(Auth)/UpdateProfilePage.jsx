import React, { useState, useRef, useEffect } from 'react';
import S from './style';
import { useNavigate } from 'react-router';
import Category from '../../loginpage/loginPage/category/Category';
import { useUser } from '../../../context/UserContext';
import axios from 'axios';

const UpdateProfilePage = () => {
  const { user, setUser } = useUser(); 
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const [introduceText, setIntroduceText] = useState("");
  const [nickname, setNickname] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    if (user) {
      setProfileImage(user.profileImageUrl || process.env.PUBLIC_URL + '/global/images/mypage/defaultProfile.png');
      setIntroduceText(user.content || "");
      setNickname(user.nickname || "");
      setSelectedCategories(user.favoriteGenre || []);
    }
  }, [user]);

    const toggleCategory = () => {
        setVisible(!visible);
    };

    const applySelectedCategories = (categories) => {
        setSelectedCategories(categories);
        setVisible(false); 
      
    };

 
  
  // 한 줄 소개 글자 수 변경 
  const handleIntroduceChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 20) {
      setIntroduceText(inputText); // 글자 수가 20 이하일 때만 상태 업데이트
    }
  }

   // 닉네임 글자 수 변경 
   const handleNicknameChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 10) {
      setNickname(inputText);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click(); // 이미지 클릭 시 input 클릭
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(user.profileImageUrl); 
  };

  // 사용자 정보 수정 서버에 전송
  const handleSubmit = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken'); 
      const response = await axios.patch(
        'http://3.35.193.132:8080/api/v1/auth/user/update',
        {
          nickname:nickname,
          favoriteGenre: selectedCategories,
          content: introduceText
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`, // 토큰을 Authorization 헤더에 추가
          }
        }
      );
      console.log("User updated successfully:", response.data);
      
      // 전역 상태 업데이트
      setUser((prevUser) => ({
        ...prevUser,
        nickname,
        favoriteGenre: selectedCategories,
        content: introduceText,
      }));
      
      navigate('/mypage'); // 업데이트 후 마이페이지로 이동
    } catch (error) {
      console.error("Error updating user info:", error);
      alert("프로필 업데이트에 실패했습니다.");
    }
  };


  return (
    <div>
      <S.Component>
      <S.Button onClick={handleSubmit} >적용</S.Button>
        <S.Title>
          <div>프로필 수정</div>
          <div></div>
        </S.Title>

        <S.ProfilePicture>
          <div>프로필 사진</div>
          <S.Profile>
            <img src={profileImage}alt="Profile" />
          </S.Profile>

          <S.ImageButtonContainer>
            <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
              <img
                src={process.env.PUBLIC_URL + '/global/images/postpage/pictureButton.png'}
                alt="Upload"
              />
            </div>
          </S.ImageButtonContainer>

          {/* 이미지 업로드 input */}
          <input
            type="file"
            accept="image/png, image/jpeg"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </S.ProfilePicture>

        <S.Introduce>
          <div>한 줄 소개</div>
          <input 
            type="text" 
            value={introduceText}
            onChange={handleIntroduceChange} 
          />
          <div className='count'>{introduceText.length}/20</div>
        </S.Introduce>

        <S.NickName>
          <div>닉네임</div>
          <input 
            type="text" 
            value={nickname}
            onChange={handleNicknameChange}
          />
          <div className='count'>{nickname.length}/10</div> 
        </S.NickName>

        {visible && <Category applySelectedCategories={applySelectedCategories} />}
            <S.Category>
                <div>관심 카테고리</div>
                 <S.SelectedContainer>
                     {selectedCategories.map(category => (
                    <S.SelectedButton key={category}>
                       {category}
                         </S.SelectedButton>
                       ))}
                    </S.SelectedContainer>
                  <S.SelectCategoryButton onClick={toggleCategory}>선택</S.SelectCategoryButton>
            </S.Category>

        {/* <S.Category>
          <div>관심 카테고리</div>
          <input type="text" placeholder='관심 카테고리를 검색해보세요.' />
          <img
            src={process.env.PUBLIC_URL + '/global/images/loginpage/search_icon.png'}
            alt="Search"
          />
        </S.Category> */}
      </S.Component>
    </div>
  );
};

export default UpdateProfilePage;

