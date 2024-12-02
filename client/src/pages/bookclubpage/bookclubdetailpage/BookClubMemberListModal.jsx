import React, { useState } from 'react';
import S from './style';
import BookClubGreetingModal from './BookClubGreetingModal';

const BookClubMemberListModal = () => {
    const [isMemberListModalOpen, setIsMemberListModalOpen] = useState(false);
    const [isGreetingModalOpen, setIsGreetingModalOpen] = useState(false);

    const handleMemberListModalOpen = () => {
        setIsMemberListModalOpen(true);
    };

    const handleMemberListModalClose = () => {
        setIsMemberListModalOpen(false);
    };

    const handleGreetingModalOpen = () => {
        setIsGreetingModalOpen(true);
    };

    const handleGreetingModalClose = () => {
        setIsGreetingModalOpen(false);
    };

    const dummyMembers = [
        { id: 1, name: "독서핑", isNew: true, avatar: "avatar1.png" },
        { id: 2, name: "책사랑", isNew: false, avatar: "avatar2.png" },
        { id: 3, name: "문학소녀", isNew: true, avatar: "avatar3.png" },
        { id: 4, name: "책읽기", isNew: false, avatar: "avatar4.png" }
    ];

    return (
        <>
            <S.OpenButton onClick={handleMemberListModalOpen}>멤버 보기</S.OpenButton>
            {isMemberListModalOpen && (
                <S.ModalContainer>
                    <S.ModalHeader>클럽 멤버 목록</S.ModalHeader>
                    <S.MemberList>
                        {dummyMembers.map(member => (
                            <S.MemberItem key={member.id}>
                                <S.Avatar src={member.avatar} alt="Avatar" />
                                {member.isNew && <S.NewLabel>NEW!</S.NewLabel>}
                                <S.MemberName>{member.name}</S.MemberName>
                                <S.JoinButton onClick={handleGreetingModalOpen}>가입인사</S.JoinButton>
                            </S.MemberItem>
                        ))}
                    </S.MemberList>
                    <S.CloseButton onClick={handleMemberListModalClose}>닫기</S.CloseButton>
                </S.ModalContainer>
            )}
            {isGreetingModalOpen && <BookClubGreetingModal onClose={handleGreetingModalClose} />}
        </>
    );
};

export default BookClubMemberListModal;
