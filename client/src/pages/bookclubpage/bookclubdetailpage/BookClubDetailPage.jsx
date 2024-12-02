import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookClubChallengeContainer from './BookClubChallengeContainer';
import BookClubJoinRequestContainer from './BookClubJoinRequestContainer';
import BookClubDetailContainer from './BookClubDetailContainer';
import BookClubDetailContainerForMember from './BookClubDetailContainerForMember';
import BookClubDetailContainerForHost from './BookClubDetailContainerForHost';
import BookListContainer from './BookListContainer';

// 더미 데이터
const dummyData = {
    1: { userRole: 'host' },
    2: { userRole: 'member' },
    3: { userRole: '' },
    4: { userRole: '' },
    5: { userRole: '' },
    6: { userRole: '' },
    7: { userRole: '' },
    8: { userRole: '' },
    9: { userRole: '' },
    10: { userRole: '' },
    11: { userRole: '' },
    12: { userRole: '' },
    13: { userRole: '' },
};

const BookClubDetailPage = () => {
    const { bookclubid } = useParams();
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        // bookclubid에 따라 더미 데이터에서 사용자 역할을 설정
        const data = dummyData[bookclubid];
        if (data) {
            setUserRole(data.userRole);
        } else {
            setUserRole('');
        }
    }, [bookclubid]);

    // 디버깅 목적으로 host 역할 설정
    // useEffect(() => {
    //     setUserRole('host');
    // }, []);

    const renderDetailContainer = () => {
        if (userRole === '') {
            return <BookClubDetailContainer />;
        } else if (userRole === 'member') {
            return <BookClubDetailContainerForMember />;
        } else if (userRole === 'host') {
            return <BookClubDetailContainerForHost />;
        }
    };

    const renderChallengeContainer = () => {
        if (userRole === '') {
            return <BookClubJoinRequestContainer />;
        } else {
            return <BookClubChallengeContainer />;
        }
    };

    return (
        <div>
            {renderDetailContainer()}
            <BookListContainer />
            {renderChallengeContainer()}
        </div>
    );
};

export default BookClubDetailPage;
