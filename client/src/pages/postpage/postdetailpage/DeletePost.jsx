import React from 'react';
import S from './style';

const DeletePost = ({visible,setVisible}) => {
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
                        <S.DeleteButton>탈퇴</S.DeleteButton>
                    </S.DeleteButtonContainer>
                </S.DeleteAccountContainer>
            }
        </div>
    );
};

export default DeletePost;