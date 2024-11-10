import React, { useState, useRef } from 'react';
import S from './style';
import { useNavigate } from 'react-router';
import Category from '../../loginpage/loginPage/category/Category';
import { useUser } from '../../../context/UserContext';

const UpdateProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null); // 프로필 이미지 상태
  const fileInputRef = useRef(null);
  const [introduceText, setIntroduceText] = useState(""); // 한 줄 소개 입력 값
  const [nickname, setNickname] = useState("");
  const [visible,setVisible]=useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { user, setUser } = useUser(); 
  console.log(user);
    const toggleCategory = () => {
        setVisible(!visible);
    };

    const applySelectedCategories = (categories) => {
        setSelectedCategories(categories);
        setVisible(false); 
      
    };

  const navigate=useNavigate();
  
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
      setProfileImage(file); // 이미지 업로드 시 상태 업데이트
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null); // X 클릭 시 상태를 null로 설정하여 기본 이미지로 복구
  };

  return (
    <div>
      <S.Component>
      <S.Button>적용</S.Button>
        <S.Title>
          <div>프로필 수정</div>
          <div></div>
        </S.Title>

        <S.ProfilePicture>
          <div>프로필 사진</div>
          <S.Profile>
            <img
              src={
                profileImage
                  ? URL.createObjectURL(profileImage) // 업로드된 이미지 미리보기
                  : process.env.PUBLIC_URL + '/global/images/mypage/defaultProfile.png' // 기본 프로필 이미지
              }
              alt="Profile"
            />
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

