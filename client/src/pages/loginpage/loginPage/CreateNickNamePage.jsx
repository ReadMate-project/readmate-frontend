import React, { useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import Category from './category/Category';
import axios from 'axios';
import { useUser } from '../../../context/UserContext';

const CreateNickNamePage = () => {
    const { setUser, fetchUserInfo } = useUser();
    const [visible,setVisible]=useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [nickname, setNickname] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');
    const navigate=useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");

    const toggleCategory = () => {
        setVisible(!visible);
    };

    const applySelectedCategories = (categories) => {
        setSelectedCategories(categories);
        setVisible(false); 
        setErrorMessage2('');
    };
   
    const handleNicknameChange = (e) => {
        const input = e.target.value;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
        
        if (specialCharRegex.test(input)) {
            setErrorMessage("닉네임에 특수 문자를 포함할 수 없습니다.");
        } else if (input.length > 10) {
            // setErrorMessage("닉네임은 10글자 이하로 설정해주세요.");
        } else {
            setErrorMessage('');
            setNickname(input);
        }
    };

    //서버에 닉네임, 관심카테고리 포함한 계정 등록
    const CreateAccount = async () => {
        
       // 닉네임이나 카테고리 선택이 유효하지 않으면 함수 종료
       if (errorMessage || selectedCategories.length === 0) {
            if (selectedCategories.length === 0) {
                setErrorMessage2("카테고리를 한 개 이상 선택해주세요.");
            }
            return;
        }

        const userData = {
            nickname: nickname,
            favoriteGenre: selectedCategories,
        };
        try {
            const response = await fetch(`http://3.35.193.132:8080/api/v1/auth/login/kakao?code=${code}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
        
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log("Response Data:", data);
            console.log(response.headers);
        
            // Authorization 헤더에 있는 토큰 가져오기
            let accessToken = response.headers.get('authorization') || response.headers.get('Authorization');
            if (accessToken && accessToken.startsWith("Bearer ")) {
                accessToken = accessToken.replace("Bearer ", ""); // "Bearer " 제거
            }
            console.log(accessToken );
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("isMember", "true");
            
            // 바로 사용자 정보를 가져오도록 fetchUserInfo 실행
            // await fetchUserInfo();
            window.location.href = '/';
            // navigate('/');
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    return (
        <div>
            <S.Background>
                <S.NickNameComponent>
                    <S.Title>
                        <div>닉네임 생성</div>
                        <div></div>
                    </S.Title>
                    <S.NickName>
                        <div>닉네임</div>
                        <input type="text"
                        value={nickname} 
                        onChange={handleNicknameChange}/>
                        <div>{nickname.length}/10</div>
                        
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
                    {errorMessage2 && <S.ErrorMessage2>{errorMessage2}</S.ErrorMessage2>}
                    <S.SignUp onClick={CreateAccount}>
                        등록
                    </S.SignUp>
                </S.NickNameComponent>
            </S.Background>
        </div>
    );
};

export default CreateNickNamePage;