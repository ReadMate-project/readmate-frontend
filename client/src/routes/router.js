import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import MainPage from "../pages/mainpage/MainPage";
import LoginPage from "../pages/loginpage/loginPage/LoginPage";
import LibraryPage from "../pages/librarypage/LibraryPage";
import BookInfoPage from "../pages/librarypage/bookinfopage/BookInfoPage";
import BookClubPage from "../pages/bookclubpage/BookClubPage";
import BookClubDetailPage from "../pages/bookclubpage/bookclubdetailpage/BookClubDetailPage";
import PostPage from "../pages/postpage/postlistpage/PostPage";
import PostDetailPage from "../pages/postpage/postdetailpage/PostDetailPage";
import SearchPage from "../pages/searchpage/SearchPage";
import MyPage from "../pages/mypage(Auth)/mypage/MyPage";
import UpdateProfilePage from "../pages/mypage(Auth)/updateprofilepage(Auth)/UpdateProfilePage";
import MyLibraryPage from "../pages/mylibrarypage(Auth)/MyLibraryPage";
import BookRecordPage from "../pages/mylibrarypage(Auth)/bookrecordpage(Auth)/BookRecordPage";
import PostingPage from "../pages/mylibrarypage(Auth)/postingpage(Auth)/PostingPage";
import MyBookClubPage from "../pages/mybookclubpage(Auth)/MyBookClubPage";
import MakingBookClubPage from "../pages/mybookclubpage(Auth)/makingbookclubpage(Auth)/MakingBookClubPage";
import PageNotFound from "../components/PageNotFound";
import KakaoRedirect from "../pages/loginpage/loginPage/KakaoRedirect";
import CreateNickNamePage from "../pages/loginpage/loginPage/CreateNickNamePage";
import CreatePostPage from "../pages/postpage/createpostpage/CreatePostPage";
import PostMain from "../pages/postpage/PostMain";
import LoginMain from "../pages/loginpage/LoginMain";
import MyPost from "../pages/postpage/mypostpage/MyPost";
import MyPageMain from "../pages/mypage(Auth)/MyPageMain";
import BookCalendarMain from "../pages/bookcalendarpage/BookCalendarMain";
import BookCalendar from "../pages/bookcalendarpage/Main/BookCalendar";
import EssayMain from "../pages/essaypage/EssayMain";
import EssayList from "../pages/essaypage/essayListPage/EssayList";
import ModifyPost from "../pages/postpage/modifyPostPage/ModifyPost";
import EssayDetailPage from "../pages/essaypage/essayDetailPage/EssayDetailPage";
import BookCalendarDetail from "../pages/bookcalendarpage/Detail/BookCalendarDetail";
import { isAuthenticated } from "../auth";

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 메인 페이지 */}
          <Route index element={<MainPage />} />

          {/* 로그인 */}
          <Route path="/login" element={<LoginMain />}>
            <Route index element={<LoginPage />} />
            <Route path="account" element={<CreateNickNamePage />} />
          </Route>
          <Route path="/api/v1/auth/oauth2/kakao/code" element={<KakaoRedirect />} />

          {/* 북클럽 */}
          <Route path="/bookclubs" element={<BookClubPage />}>
            <Route path="bookclubinfo/:bookclubid" element={<BookClubDetailPage />} />
          </Route>

          {/* 에세이 */}
          <Route path="/essay" element={<EssayMain />}>
            <Route index element={<EssayList />} />
            <Route path="essaydetail" element={<EssayDetailPage />} />
            <Route path="createEssay" element={<ProtectedRoute element={<PostingPage />} />} />
          </Route>

          {/* 라이브러리 */}
          <Route path="/books" element={<LibraryPage />} />
          <Route path="/books/bookinfo/:isbn" element={<BookInfoPage />} />

          {/* 포스트 */}
          <Route path="/posts" element={<PostMain />}>
            <Route index element={<PostPage />} />
            <Route path="postdetail" element={<PostDetailPage />} />
            <Route path="postdetail/modifypost" element={<ProtectedRoute element={<ModifyPost />} />} />
            <Route path="createPost" element={<ProtectedRoute element={<CreatePostPage />} />} />
            <Route path="myPost" element={<ProtectedRoute element={<MyPost />} />} />
          </Route>

          {/* 검색 */}
          <Route path="/search" element={<SearchPage />} />

          {/* 로그인 필수 */}
          <Route path="/mybookclub" element={<ProtectedRoute element={<MyBookClubPage />} />}>
            <Route path="makingclub" element={<ProtectedRoute element={<MakingBookClubPage />} />} />
          </Route>

          <Route path="/mylibrary" element={<ProtectedRoute element={<MyLibraryPage />} />}>
            <Route index element={<ProtectedRoute element={<BookRecordPage />} />} />
          </Route>

          <Route path="/bookcalendar" element={<ProtectedRoute element={<BookCalendarMain />} />}>
            <Route index element={<ProtectedRoute element={<BookCalendar />} />} />
            <Route path="detail" element={<ProtectedRoute element={<BookCalendarDetail />} />} />
          </Route>

          <Route path="/mypage" element={<ProtectedRoute element={<MyPageMain />} />}>
            <Route index element={<ProtectedRoute element={<MyPage />} />} />
            <Route path="updateprofile" element={<ProtectedRoute element={<UpdateProfilePage />} />} />
          </Route>

          {/* 404 페이지 */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
