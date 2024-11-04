import React, { useState } from 'react';
import S from './style';

// 더미 댓글 데이터
const dummyComments = [
    {
      id: 1,
      profileImage: '/global/images/mypage/defaultProfile.png',
      username: 'User1',
      content: '첫 번째 댓글입니다.',
      time: '2023-10-01 10:00',
    },
    {
      id: 2,
      profileImage: '/global/images/mypage/defaultProfile.png',
      username: 'User2',
      content: '두 번째 댓글입니다.',
      time: '2023-10-01 11:00',
    },
    {
      id: 3,
      profileImage: '/global/images/mypage/defaultProfile.png',
      username: 'User3',
      content: '세 번째 댓글입니다.',
      time: '2023-10-01 12:00',
    },
    {
      id: 4,
      profileImage: '/global/images/mypage/defaultProfile.png',
      username: 'User4',
      content: '네 번째 댓글입니다. 네 번째 댓글입니다. 네 번째 댓글입니다.네 번째 댓글입니다.네 번째 댓글입니다.네 번째 댓글입니다.네 번째 댓글입니다.네 번째 댓글입니다.네 번째 댓글입니다.네 번째 댓글입니다.네 번째 댓글입니다.네 번째 댓글입니다.네 번째 댓글입니다.네 번째 댓글입니다.',
      time: '2023-10-01 13:00',
    },
    {
      id: 5,
      profileImage: '/global/images/mypage/defaultProfile.png',
      username: 'User5',
      content: '다섯 번째 댓글입니다.',
      time: '2023-10-01 14:00',
    },
  ];

const Comment = () => {
    const [comment, setComment] = useState('');
    const [sortOrder, setSortOrder] = useState('등록순');
    
    const maxCharacters = 300;

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleRegisterClick = () => {
        // 댓글 등록 로직
    };

      // 댓글 정렬 함수
    const sortedComments = [...dummyComments].sort((a, b) => {
        if (sortOrder === '최신순') {
        return new Date(b.time) - new Date(a.time);
        }
        return new Date(a.time) - new Date(b.time);
    });

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === '등록순' ? '최신순' : '등록순'));
    };
    return (
        <>  
            <S.Background1>
                
                <S.Profile>
                    <span><img src={process.env.PUBLIC_URL + '/global/images/mypage/defaultProfile.png'}/> </span>
                    <S.Username>유저이름</S.Username>
                </S.Profile>
                
                <S.CommentInput
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="댓글을 작성하세요"
                    maxLength={maxCharacters}
                />

                <S.CommentFooter>
                        <S.CharacterCount>{`${comment.length}/${maxCharacters}`}</S.CharacterCount>
                        <S.RegisterButton onClick={handleRegisterClick}>등록</S.RegisterButton>
                </S.CommentFooter>
            
            </S.Background1>
            
            <S.Background2>
                <S.CommentToggle>
                    <div onClick={() => setSortOrder('등록순')} style={{ cursor: 'pointer', color: sortOrder === '등록순' ? 'black' : '#717171' }}>등록순</div>
                    <div onClick={() => setSortOrder('최신순')} style={{ cursor: 'pointer', color: sortOrder === '최신순' ? 'black' : '#717171' }}>최신순</div>
                </S.CommentToggle>
                <S.CommentContainer>
                    {sortedComments.map((comment) => (
                    <S.Comment key={comment.id}>
                        <span>
                            <img src={comment.profileImage} alt="프로필" />
                        </span>
                        <div>
                            <S.Username>{comment.username}</S.Username>
                            <S.CommentContent>{comment.content}</S.CommentContent>
                            <S.CommentTime>{comment.time}</S.CommentTime>
                        </div>
                    </S.Comment>
                    ))}
                </S.CommentContainer>
            </S.Background2>
        </>
    );
};

export default Comment;