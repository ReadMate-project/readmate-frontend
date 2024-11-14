//이미지 수정에서 현재는 jpg안되고 png만 됨
import React, { useEffect, useState, useRef } from 'react';
import S from './style';
import { useNavigate } from 'react-router';
import Category from '../../loginpage/loginPage/category/Category';
import { useUser } from '../../../context/UserContext';
import apiClient from '../../../api/apiClient';

const UpdateProfilePage = () => {
  const { user, setUser } = useUser();
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const [introduceText, setIntroduceText] = useState("");
  const [nickname, setNickname] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const navigate = useNavigate();

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
    setErrorMessage2('');
  };

  const handleIntroduceChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 20) {
      setIntroduceText(inputText);
    }
  };

  const handleNicknameChange = (e) => {
    const inputText = e.target.value;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;

    if (specialCharRegex.test(inputText)) {
      setErrorMessage("닉네임에 특수 문자를 포함할 수 없습니다.");
    } else if (inputText.length > 10) {
      setErrorMessage("닉네임은 10글자 이하로 설정해주세요.");
    } else {
      setErrorMessage('');
      setNickname(inputText);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  const handleSubmit = async () => {
    if (!nickname.trim()) {
      setErrorMessage("닉네임을 입력해 주세요.");
      return;
    }
    if (selectedCategories.length === 0) {
      setErrorMessage("카테고리를 한 개 이상 선택해 주세요.");
      return;
    }

    try {
      // FormData 생성
      const formData = new FormData();

      // userUpdateRequest JSON 객체를 문자열로 추가
      const userUpdateRequest = {
        nickname: nickname,
        favoriteGenre: selectedCategories,
        content: introduceText,
      };
      formData.append('userUpdateRequest', JSON.stringify(userUpdateRequest));

      // 프로필 이미지 파일 추가
      if (profileImage instanceof File) {
        formData.append('profileImage', profileImage);
      }
      
      const accessToken = localStorage.getItem('accessToken');
      const response = await apiClient.patch('/v1/auth/user/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${accessToken}`
        }
      });
      
      console.log("User updated successfully:", response.data);
      
      // 전역 상태 업데이트
      setUser((prevUser) => ({
        ...prevUser,
        nickname,
        favoriteGenre: selectedCategories,
        content: introduceText,
        profileImageUrl: profileImage instanceof File ? URL.createObjectURL(profileImage) : profileImage,
      }));
      
      navigate('/mypage');
    } catch (error) {
      console.error("Error updating user info:", error);
      alert("프로필 업데이트에 실패했습니다.");
    }
  };

  console.log(user);
  return (
    <div>
      <S.Component>
      <S.Button onClick={handleSubmit}>적용</S.Button>
        <S.Title>
          <div>프로필 수정</div>
        </S.Title>

        <S.ProfilePicture>
          <div>프로필 사진</div>
          <S.Profile>
            <img src={profileImage instanceof File ? URL.createObjectURL(profileImage) : profileImage} alt="Profile" />
          </S.Profile>

          <S.ImageButtonContainer>
            <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
              <img
                src={process.env.PUBLIC_URL + '/global/images/postpage/pictureButton.png'}
                alt="Upload"
              />
            </div>
          </S.ImageButtonContainer>

          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
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
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>} 
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
        {errorMessage2 && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.Component>
    </div>
  );
};

export default UpdateProfilePage;


// import React, { useState, useRef, useEffect } from 'react';
// import S from './style';
// import { useNavigate } from 'react-router';
// import Category from '../../loginpage/loginPage/category/Category';
// import { useUser } from '../../../context/UserContext';
// import axios from 'axios';
// import apiClient from '../../../api/apiClient';

// const UpdateProfilePage = () => {
//   const { user, setUser } = useUser(); 
//   const [profileImage, setProfileImage] = useState(null);
//   const fileInputRef = useRef(null);
//   const [introduceText, setIntroduceText] = useState("");
//   const [nickname, setNickname] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [visible, setVisible] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [errorMessage2, setErrorMessage2] = useState('');
//   const navigate=useNavigate();

//   useEffect(() => {
//     if (user) {
//       setProfileImage(user.profileImageUrl || process.env.PUBLIC_URL + '/global/images/mypage/defaultProfile.png');
//       setIntroduceText(user.content || "");
//       setNickname(user.nickname || "");
//       setSelectedCategories(user.favoriteGenre || []);
//     }
//   }, [user]);

//     const toggleCategory = () => {
//         setVisible(!visible);
//     };

//     const applySelectedCategories = (categories) => {
//         setSelectedCategories(categories);
//         setVisible(false); 
//         setErrorMessage2('');
//     };

 
  
//   // 한 줄 소개 글자 수 변경 
//   const handleIntroduceChange = (e) => {
//     const inputText = e.target.value;
//     if (inputText.length <= 20) {
//       setIntroduceText(inputText); // 글자 수가 20 이하일 때만 상태 업데이트
//     }
//   }

//   // 닉네임 글자 수 변경 및 유효성 검사
//   const handleNicknameChange = (e) => {
//     const inputText = e.target.value;
//     const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;

//     if (specialCharRegex.test(inputText)) {
//       setErrorMessage("닉네임에 특수 문자를 포함할 수 없습니다.");
//     } else if (inputText.length > 10) {
//       setErrorMessage("닉네임은 10글자 이하로 설정해주세요.");
//     } else {
//       setErrorMessage('');
//       setNickname(inputText);
//     }
//   };

//   const handleImageClick = () => {
//     fileInputRef.current.click(); // 이미지 클릭 시 input 클릭
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   const handleRemoveImage = () => {
//     setProfileImage(user.profileImageUrl); 
//   };

//   // 사용자 정보 수정 서버에 전송
//   const handleSubmit = async () => {
//     // 닉네임이나 카테고리 선택이 유효하지 않으면 서버에 요청을 보내지 않음
//     if (!nickname.trim()) {
//       setErrorMessage("닉네임을 입력해 주세요.");
//       return;
//     }
//     if (selectedCategories.length === 0) {
//       setErrorMessage("카테고리를 한 개 이상 선택해 주세요.");
//       return;
//     }

//     try {
//       const accessToken = localStorage.getItem('accessToken'); 
//       const response = await apiClient.patch(
//         '/v1/auth/user/update',
//         {
//           nickname:nickname,
//           favoriteGenre: selectedCategories,
//           // profileImageUrl:profileImage,
//           content: introduceText
//         },
//         {
//           headers: {
//             'Authorization': `Bearer ${accessToken}`, // 토큰을 Authorization 헤더에 추가
//           }
//         }
//       );
//       console.log("User updated successfully:", response.data);
      
//       // 전역 상태 업데이트
//       setUser((prevUser) => ({
//         ...prevUser,
//         nickname,
//         favoriteGenre: selectedCategories,
//         content: introduceText,
//         profileImageUrl:profileImage
//       }));
      
//       navigate('/mypage'); // 업데이트 후 마이페이지로 이동
//     } catch (error) {
//       console.error("Error updating user info:", error);
//       alert("프로필 업데이트에 실패했습니다.");
//     }
//   };


//   return (
//     <div>
//       <S.Component>
//       <S.Button onClick={handleSubmit} >적용</S.Button>
//         <S.Title>
//           <div>프로필 수정</div>
//           <div></div>
//         </S.Title>

//         <S.ProfilePicture>
//           <div>프로필 사진</div>
//           <S.Profile>
//             <img src={profileImage} alt="Profile" />
//           </S.Profile>

//           <S.ImageButtonContainer>
//             <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
//               <img
//                 src={process.env.PUBLIC_URL + '/global/images/postpage/pictureButton.png'}
//                 alt="Upload"
//               />
//             </div>
//           </S.ImageButtonContainer>

//           {/* 이미지 업로드 input */}
//           <input
//             type="file"
//             accept="image/png, image/jpeg"
//             ref={fileInputRef}
//             onChange={handleImageUpload}
//             style={{ display: 'none' }}
//           />
//         </S.ProfilePicture>

//         <S.Introduce>
//           <div>한 줄 소개</div>
//           <input 
//             type="text" 
//             value={introduceText}
//             onChange={handleIntroduceChange} 
//           />
//           <div className='count'>{introduceText.length}/20</div>
//         </S.Introduce>

//         <S.NickName>
//           <div>닉네임</div>
//           <input 
//             type="text" 
//             value={nickname}
//             onChange={handleNicknameChange}
//           />
//           <div className='count'>{nickname.length}/10</div>
          
//         </S.NickName>
//         {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>} 
//         {visible && <Category applySelectedCategories={applySelectedCategories} />}
//             <S.Category>
//                 <div>관심 카테고리</div>
//                  <S.SelectedContainer>
//                      {selectedCategories.map(category => (
//                     <S.SelectedButton key={category}>
//                        {category}
//                          </S.SelectedButton>
//                        ))}
//                     </S.SelectedContainer>
//                   <S.SelectCategoryButton onClick={toggleCategory}>선택</S.SelectCategoryButton>
                  
//             </S.Category>
//             {errorMessage2 && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}             
       
//       </S.Component>
//     </div>
//   );
// };

// export default UpdateProfilePage;

