import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookClubMVPContainer from './BookClubMVPContainer';
import BookClubPostListContainer from './BookClubPostListContainer';
import BookClubNotificationContainer from './BookClubNotificationContainer';

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
    13: { userRole: '' }
};

const BookClubBoardPage = () => {
    const { bookclubid } = useParams();
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        // bookclubid에 따라 더미 데이터에서 사용자 역할을 설정
        const data = dummyData[bookclubid];
        if (data) {
            setUserRole(data.userRole);
        } else {
            setUserRole('');
        }

        // 권한 검사를 통해 멤버 또는 호스트가 아닌 경우 접근 차단
        if (data && data.userRole !== 'member' && data.userRole !== 'host') {
            alert('접근 권한이 없습니다.');
            navigate('/bookclubs'); // 접근 권한이 없을 경우 리디렉션
        }
    }, [bookclubid, navigate]);

    return (
        <div>
            <BookClubMVPContainer />
            <BookClubNotificationContainer />
            <BookClubPostListContainer />
        </div>
    );
}

export default BookClubBoardPage;
