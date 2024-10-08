import React from 'react';
import S from './style';

const CreateNickNamePage = () => {
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
                        <input type="text"/>
                        <div>중복 확인</div>
                    </S.NickName>

                    <S.Category>
                        <div>관심 카테고리</div> 
                        <div> 관심 카테고리를 검색해보세요.
                            <img src={process.env.PUBLIC_URL + '/global/images/loginpage/search_icon.png'}/>
                        </div> 
                    </S.Category>
                    <S.SignUp>
                        회원가입
                    </S.SignUp>
                </S.NickNameComponent>
                <S.Bottom>Read Mate</S.Bottom>
            </S.Background>
        </div>
    );
};

export default CreateNickNamePage;