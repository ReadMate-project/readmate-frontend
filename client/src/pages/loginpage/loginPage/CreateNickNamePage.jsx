import React, { useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import Category from './category/Category';
import axios from 'axios';
import { useUser } from '../../../context/UserContext';

const CreateNickNamePage = ({userEmail}) => {
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
            setErrorMessage("닉네임은 10글자 이하로 설정해주세요.");
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
        console.log(userEmail);
        const userData = {
            email: userEmail,
            nickname: nickname,
            favoriteGenre: selectedCategories,
        };
        try {
           
            const response = await fetch(`http://3.35.193.132:8080/api/v1/auth/signup/kakao/step1`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log(response);
            console.log("회원가입 성공! 로그인 페이지로 이동합니다.");
            // 회원가입 성공 후, isMember 플래그 설정 및 KakaoRedirect로 이동
            localStorage.setItem("isMember", "true");
            navigate("/login");
            // navigate(`/api/v1/auth/oauth2/kakao?code=${code}`); // KakaoRedirect로 이동
        } catch (error) {
            console.error("Error during account creation:", error);
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