export const isAuthenticated = () => {
    // 실제 인증 로직을 여기에 추가
    return localStorage.getItem('authToken') !== null;
  };