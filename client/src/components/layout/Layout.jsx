import { NavLink, Outlet, useLocation} from 'react-router-dom';
import S from './style';
import NavigationBar from '../NavigationBar';
import SearchForm from '../../pages/searchpage/SearchForm';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const { pathname } = useLocation(); // 현재 경로 감지
  
    useEffect(() => {
      // 경로 변경 시 스크롤 최상단으로 이동
      window.scrollTo(0, 0);
    }, [pathname]); // 경로 변경을 의존성으로 지정
  
    return null;
  };

const Layout = () => {

    return (
        <div>
            <S.Container>
                <S.Header>
                    <NavLink to={"/"}>
                        <S.Logo>Read mate</S.Logo>
                    </NavLink>
                    <NavigationBar />
                    <SearchForm />
                </S.Header>
                    <S.Main>
                        <ScrollToTop/>
                        <Outlet />
                    </S.Main>
                <S.Footer>Read Mate</S.Footer>
            </S.Container>
            
        </div>
    );
};

export default Layout;
