import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // 유저 정보 상태
    const accessToken = localStorage.getItem('accessToken'); 

    
        const fetchUserInfo = async () => {
            try {
                
                const response = await axios.post(
                    'http://3.35.193.132:8080/api/token/user',
                    {accessToken:accessToken},
                    {
                        headers: {
                            'Content-Type': 'application/json', 
                        },
                    }
                );
                console.log(response.data);
                const userData = response.data.data;
                setUser({
                    userId:userData.userId,
                    profileImageUrl: userData.profileImageUrl,
                    nickname: userData.nickname,
                    favoriteGenre: userData.favoriteGenre,
                    content: userData.content,
                
                });

            } catch (err) {
                console.error("Error fetching user info:", err);
            }
        };

        useEffect(() => {
            if (accessToken) {
                fetchUserInfo();
            }
        }, [accessToken]);  

    // 로그아웃 함수 
    const logout = () => {
        setUser(null); // 유저 정보 초기화
        localStorage.removeItem('accessToken'); // 토큰 삭제
        localStorage.removeItem('isMember'); // isMember 정보 삭제
    };


    return (
        <UserContext.Provider value={{ user, setUser, logout, fetchUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);