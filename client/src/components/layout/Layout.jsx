import { NavLink, Outlet} from 'react-router-dom';
import S from './style';
import NavigationBar from '../NavigationBar';
import SearchForm from '../../pages/searchpage/SearchForm';


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
                        <Outlet />
                    </S.Main>
                <S.Footer>Read Mate</S.Footer>
            </S.Container>
            
        </div>
    );
};

export default Layout;
