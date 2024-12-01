import React from 'react';
import S from './style';

const BookClubGreetingModal = ({ onClose }) => {
    return (
        <S.GreetingModalContainer>
            <S.ModalHeader>가입 인사</S.ModalHeader>
            <S.MemberItem>
                <S.Avatar src="avatar1.png" alt="Avatar" />
                <S.MemberName>독서핑</S.MemberName>
                <S.Timestamp>2024.10.6. 15:30</S.Timestamp>
            </S.MemberItem>
            <S.GreetingMessage>
                안녕하세요! 저는 이번에 새로 가입한 독서핑입니다. 어릴 때부터 책을 좋아하지만, 바쁜 일상에 치여 많이 접하지 못해 시간이 흘러버렸어요. 그래서 이번 기회에 다시 책과 가까워지고 싶어서 북클럽에 가입하게 되었습니다.
            </S.GreetingMessage>
            <S.ButtonGroup>
                <S.RejectButton onClick={onClose}>거부</S.RejectButton>
                <S.ApproveButton onClick={onClose}>승인</S.ApproveButton>
            </S.ButtonGroup>
        </S.GreetingModalContainer>
    );
};

export default BookClubGreetingModal;
