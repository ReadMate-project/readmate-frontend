import axios from 'axios';

// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: 'http://3.35.193.132:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// 401 에러 발생 시 액세스 토큰 갱신 함수
const refreshAccessToken = async () => {
    try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
            handleUnauthorized();
            return null;
        }

        const response = await axios.post('http://3.35.193.132:8080/api/v1/auth/user/refresh', {
            refreshToken
        });

        console.log("Response from refresh:", response); // 디버깅용 로그

        const newAccessToken = response.data.accessToken;
        if (newAccessToken) {
            setAccessToken(newAccessToken); // 새 액세스 토큰 설정
            return newAccessToken;
        } else {
            handleUnauthorized();
            return null;
        }
    } catch (error) {
        console.error("Failed to refresh access token:", error);
        handleUnauthorized();
        return null;
    }
};

// 401 에러 발생 시 처리 함수
const handleUnauthorized = () => {
    alert("세션이 만료되었습니다. 다시 로그인 해주세요.");

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // Axios 기본 헤더에서 Authorization 제거
    delete apiClient.defaults.headers.common['Authorization'];

    // 로그인 페이지로 이동
    window.location.href = '/login';
};

// 응답 인터셉터 설정
apiClient.interceptors.response.use(
    (response) => response, //정상응답 그대로 반환
    async (error) => {
        const originalRequest = error.config;

        // 401 에러 발생 시
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // 무한 재시도를 방지하기 위해 플래그 설정
            const newAccessToken = await refreshAccessToken();

            if (newAccessToken) {
                // 새로운 토큰을 설정하고 요청을 다시 보냄
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return apiClient(originalRequest);
            }
        }
        
        return Promise.reject(error);
    }
);

// 요청 인터셉터 설정
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// 새로운 토큰 설정 함수
export const setAccessToken = (newToken) => {
    // 새로 로그인한 후 새로운 accessToken을 localStorage에 저장하고, Axios 기본 헤더에 설정
    localStorage.setItem("accessToken", newToken);
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
};

export default apiClient;


