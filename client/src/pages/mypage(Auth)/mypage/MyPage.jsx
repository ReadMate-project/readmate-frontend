import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet, Link } from 'react-router-dom';
import S from './style';
import DeleteAccount from './DeleteAccount';
import { useUser } from '../../../context/UserContext';
import axios from 'axios';

const MyPage = () => {

    const { user, logout } = useUser();
    const [introduceText, setIntroduceText] = useState("");
    const [nickname, setNickname] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const navigate=useNavigate();
    const [showDeleteAccount, setShowDeleteAccount] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      if (user) {
        setProfileImage(user.profileImageUrl || process.env.PUBLIC_URL + '/global/images/mypage/defaultProfile.png');
        setIntroduceText(user.content || "");
        setNickname(user.nickname || "");
      }
    }, [user]);

    const goToUpdateProfile=()=>{
      navigate('/mypage/updateprofile');
    }

    const goToBookCalendar=()=>{
      navigate('/bookcalendar');
    }

    const goToMyLibrary=()=>{
      navigate('/myLibrary');
    }

    const handleDeleteClick = () => {
      setShowDeleteAccount(true); // 탈퇴하기 버튼 클릭 시 DeleteAccount 컴포넌트를 보여줌
    };

    const handleCancelClick = () => {
      setShowDeleteAccount(false); // 취소 버튼 클릭 시 DeleteAccount 컴포넌트를 숨김
    };

    //로그아웃
    const handleLogout = async () => {
      try {
          const accessToken = localStorage.getItem('accessToken');

          const response = await axios.post(
              'http://3.35.193.132:8080/api/v1/auth/logout',
              {}
          );

          if (response.status === 200) {
            logout(); //UserContext 함수: isMember, accessToken 삭제, user 초기화
            navigate('/login'); 
          }
      } catch (error) {
          console.error("Logout error:", error);
      }
  };

    return (
      <div>
        
        <S.Background >
          
        {/* <S.GrayBackground className={visible ? "grayBackground" : ""}> */}
          <S.Component>
          
        
          {visible && <DeleteAccount visible={visible} setVisible={setVisible} />}
            <S.Profile>
              <img src={profileImage}/>
              {/* <img src={process.env.PUBLIC_URL + '/global/images/mypage/defaultProfile.png'}/> */}
            </S.Profile>
            
            <S.NickNameContainer>
              <S.NickName>{nickname}</S.NickName>
              <S.ModifyButton onClick={goToUpdateProfile}>수정하기</S.ModifyButton>
            </S.NickNameContainer>
            <S.Introduce>{introduceText}</S.Introduce>
            
            <S.ImageContainer>
              <S.IconWrapper onClick={goToMyLibrary}>
                <img src={process.env.PUBLIC_URL + '/global/images/mypage/myLibrary.png'}/>
                <S.ImageTitle>내 서재</S.ImageTitle>
                <S.ImageCount>3</S.ImageCount>
              </S.IconWrapper>
              <S.IconWrapper>
                <img className='myClub' src={process.env.PUBLIC_URL + '/global/images/mypage/myClub.png'}/>
                <S.ImageTitle>내 클럽</S.ImageTitle>
                <S.ImageCount>3</S.ImageCount>
              </S.IconWrapper>
              <S.IconWrapper onClick={goToBookCalendar}>
                <img src={process.env.PUBLIC_URL + '/global/images/mypage/bookCalendar.png'}/>
                <S.ImageTitle >북 캘린더</S.ImageTitle>
                <S.ImageCount>3</S.ImageCount>
              </S.IconWrapper>
            </S.ImageContainer>
            <S.ButtonContainer>
              <S.Button onClick={handleLogout} >로그아웃</S.Button>
              <S.Button  onClick={() => { setVisible(!visible);}}>탈퇴하기</S.Button>
            </S.ButtonContainer>
            {showDeleteAccount && (
            <DeleteAccount onCancel={handleCancelClick} />  
          )}
          
          </S.Component>
          {/* </S.GrayBackground> */}
          
        </S.Background>
        
      </div>
    );
  };

export default MyPage;
