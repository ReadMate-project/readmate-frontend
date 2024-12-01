import React, { useState } from 'react';
import S from './style';

const ClubLeaderSelection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLeader, setSelectedLeader] = useState(null);

    const dummyLeaders = [
        { id: 1, name: "독서핑", avatar: "/global/images/bookclubpage/ID_Image.png" },
        { id: 2, name: "책사랑", avatar: "/global/images/bookclubpage/ID_Image2.png" },
        { id: 3, name: "문학소녀", avatar: "/global/images/bookclubpage/ID_Image.png" },
        { id: 4, name: "책읽기", avatar: "/global/images/bookclubpage/ID_Image2.png" }
    ];

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSelection = (id) => {
        setSelectedLeader(id);
    };

    return (
        <>
            <S.OpenButton onClick={handleOpen}>모달 열기</S.OpenButton>
            {isOpen && (
                <S.ModalContainer>
                    <S.ModalHeader>클럽장 선택</S.ModalHeader>
                    <S.MemberList>
                        {dummyLeaders.map(leader => (
                            <S.LeaderItem key={leader.id} onClick={() => handleSelection(leader.id)} selected={leader.id === selectedLeader}>
                                <S.Avatar src={leader.avatar} alt="Avatar" />
                                <S.LeaderName>{leader.name}</S.LeaderName>
                                {leader.id === selectedLeader && <S.SelectedCheck>✔</S.SelectedCheck>}
                            </S.LeaderItem>
                        ))}
                    </S.MemberList>
                    <S.CloseButton onClick={handleClose}>닫기</S.CloseButton>
                </S.ModalContainer>
            )}
        </>
    );
};

export default ClubLeaderSelection;
