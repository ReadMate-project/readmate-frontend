import React, { useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import Category from './category/Category';

const CreateNickNamePage = () => {
    const [visible,setVisible]=useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [nickname, setNickname] = useState('');
    const navigate=useNavigate();

    const toggleCategory = () => {
        setVisible(!visible);
    };

    const applySelectedCategories = (categories) => {
        setSelectedCategories(categories);
        setVisible(false); // 적용 후 Category 컴포넌트 숨기기
    };
   
    const handleNicknameChange = (e) => {
        const input = e.target.value;
        if (input.length <= 10) { // 10글자 제한
            setNickname(input);
        }
    };

    const goToAccount=()=>{
        navigate('/created/kakaoLogin/account', { state: { nickname, selectedCategories } });
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
                    
                    <S.SignUp onClick={goToAccount}>
                        등록
                    </S.SignUp>
                </S.NickNameComponent>
            </S.Background>
        </div>
    );
};

export default CreateNickNamePage;