import React, { useState } from 'react';
import S from './style';

const BookClubNotificationContainer = () => {
    const dummyNotifications = [
        {
            boardId: 1,
            title: '※자유게시판 이용 안내',
            content: '자유게시판은 여러분이 책과 관련된 다양한 이야기를 자유롭게 나눌 수 있는 공간입니다. 새로운 책 추천, 독서 후기, 문학과 관련된 자유로운 토론 등 다양한 주제의 글을 언제든지 환영합니다. 아래 몇 가지 이용 안내를 참고해 주세요.  1. 책과 관련된 자유로운 소통을 환영합니다! 이곳은 책을 사랑하는 회원들이 서로 영감을 주고받는 소중한 공간입니다. 책과 관련된 모든 주제의 글을 자유롭게 남겨 주세요.  2. 서로를 존중하며 예의를 지켜주세요.  서로의 의견을 존중하며, 건전하고 긍정적인 커뮤니티 문화'
        }
        // ,{
        //     boardId: 2,
        //     title: 'Monthly Book Club Meeting',
        //     content: 'Don\'t miss our monthly meeting to discuss our latest read.',
        // },        
    ];

    const [notifications, setNotifications] = useState(dummyNotifications);

    return (
        <div>
            <S.Container className='Noti'>

                <S.NotificationContainer>
                    <S.NotiTitle>
                        <S.NotiImg src={process.env.PUBLIC_URL + '/global/images/bookclubpage/Noti.png'}/>
                        공지사항
                    </S.NotiTitle>
                    
                    <S.NotiSection>

                        <S.PostList>
                            {notifications.map((notification) => (
                                <S.PostItem key={notification.boardId}>
                                    <S.TitleBody>
                                        <S.PostTitle>{notification.title} <p>운영자</p></S.PostTitle>
                                        <S.PostContent>{notification.content}</S.PostContent>
                                    </S.TitleBody>
                                </S.PostItem>
                            ))}
                        </S.PostList>

                    </S.NotiSection>
                </S.NotificationContainer>

            </S.Container>    
        </div>
    );
};

export default BookClubNotificationContainer;
