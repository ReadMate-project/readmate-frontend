import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import apiClient from '../api/apiClient';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // 유저 정보 상태
    const accessToken = localStorage.getItem('accessToken'); 

    
        const fetchUserInfo = async () => {
            try {
                
                const response = await apiClient.post(
                    '/token/user',
                    {accessToken:accessToken},
                    
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
        }, []);  

    // 로그아웃 함수 
    const logout = () => {
        setUser(null); // 유저 정보 초기화
        localStorage.removeItem('accessToken'); 
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("isMember");
        delete apiClient.defaults.headers.common['Authorization'];
    };


    return (
        <UserContext.Provider value={{ user, setUser, logout, fetchUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);