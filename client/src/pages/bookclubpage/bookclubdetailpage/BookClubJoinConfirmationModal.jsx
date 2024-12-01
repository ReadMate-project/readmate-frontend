import React, { useState } from 'react';
import S from './style';

const BookClubJoinConfirmationModal = () => {
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

    const handleConfirmationModalOpen = () => {
        setIsConfirmationModalOpen(true);
    };

    const handleConfirmationModalClose = () => {
        setIsConfirmationModalOpen(false);
    };

    return (
        <>
            <S.OpenButton onClick={handleConfirmationModalOpen}>제출하기</S.OpenButton>
            {isConfirmationModalOpen && (
                <S.ConfirmationModalContainer>
                    <S.ModalHeader>여름의 기억을 만들어볼까요?</S.ModalHeader>
                    <S.ConfirmationMessage>
                        클럽장에게 가입 승인을 요청했어요! 승인은 알림을 통해 알려드릴게요!
                    </S.ConfirmationMessage>
                    <S.CloseButton onClick={handleConfirmationModalClose}>확인</S.CloseButton>
                </S.ConfirmationModalContainer>
            )}
        </>
    );
};

export default BookClubJoinConfirmationModal;
