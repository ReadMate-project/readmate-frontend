import React from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../../context/UserContext';

const DeleteAccount = ({visible,setVisible}) => {
    const { user, logout } = useUser(); 
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        try {
            await axios.post(
                'http://3.35.193.132:8080/api/v1/auth/withdraw',
                {},
                {
                    headers: {
                        'userId': user.userId, 
                        'Content-Type': 'application/json',
                    },
                }
            );
            localStorage.removeItem('isMember');
            logout(); // 유저 정보 초기화
            navigate('/'); // 메인 페이지로 리다이렉트
        } catch (error) {
            console.error("Error during account deletion:", error);
        }
    };

    return (
        <div>
            {visible&&
                <S.DeleteAccountContainer>
                    <S.DeleteText>
                        <div>정말 회원탈퇴를 진행하시겠습니까?</div>
                        <div> 탈퇴한 후 정보는 복구가 불가능합니다.</div>
                    </S.DeleteText>
                    <S.DeleteButtonContainer>
                        <S.CancelButton onClick={()=>{setVisible(false)}}>취소</S.CancelButton>
                        <S.DeleteButton onClick={handleDeleteAccount} >탈퇴</S.DeleteButton>
                    </S.DeleteButtonContainer>
                </S.DeleteAccountContainer>
            }
        </div>
    );
};

export default DeleteAccount;