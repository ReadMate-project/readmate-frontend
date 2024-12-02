import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import BookClubCreateContainer from './BookClubCreateContainer';
import BookClubAddBooksContainer from './BookClubAddBooksContainer';

// 더미 데이터
const dummyData = {
    0: { userRole: 'create' },
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

const BookClubManagePage = () => {
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

        // 권한 검사를 통해 호스트 또는 생성자만 접근 가능하도록 설정
        if (data && data.userRole !== 'host' && data.userRole !== 'create') {
            alert('접근 권한이 없습니다.');
            navigate('/bookclubs'); // 접근 권한이 없을 경우 리디렉션
        }
    }, [bookclubid, navigate]);

    return (
        <div>
            {/* {userRole === 'create' && <BookClubCreateContainer />}
            {userRole === 'host' && <BookClubAddBooksContainer />} */}
            <BookClubCreateContainer />
            <BookClubAddBooksContainer />
        </div>
    );
}

export default BookClubManagePage;
