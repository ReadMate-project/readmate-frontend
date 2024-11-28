import React, { useState } from 'react';
import S from './style';

const BookClubNotificationContainer = () => {
    const dummyNotifications = [
        {
            boardId: 1,
            title: 'New Book Club Event!',
            content: 'Join us for a discussion on "The Great Gatsby" next week.'
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
                                        <S.PostTitle>{notification.title} 운영자</S.PostTitle>
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
