import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const KakaoRedirect = () => {
    
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    

    useEffect(() => {
        fetch(`/api/v1/auth/login/kakao?code=${code}`, {
            method: "GET", 
        }).then((response) => response.json())
        .then((data) => {
            console.log("sdfser")
            console.log(data);
            console.log(data.data.name);
            navigate('/');
        })
        .catch((error) => {
            console.error("오류 발생", error); 
        });
    }, []);
    
    return (
        <div>
            ssdf
        </div>
    );
};

export default KakaoRedirect;