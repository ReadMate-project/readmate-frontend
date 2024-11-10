import { createBrowserRouter, RouterProvider, Route, Navigate, Outlet } from "react-router-dom";

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


// 로그인 필요 페이지 
import { isAuthenticated } from "../auth";

import MyPage from "../pages/mypage(Auth)/mypage/MyPage";
import UpdateProfilePage from "../pages/mypage(Auth)/updateprofilepage(Auth)/UpdateProfilePage";

import MyLibraryPage from "../pages/mylibrarypage(Auth)/MyLibraryPage";
import BookRecordPage from "../pages/mylibrarypage(Auth)/bookrecordpage(Auth)/BookRecordPage";
import PostingPage from "../pages/mylibrarypage(Auth)/postingpage(Auth)/PostingPage";


import MyBookClubPage from "../pages/mybookclubpage(Auth)/MyBookClubPage";
import MakingBookClubPage from "../pages/mybookclubpage(Auth)/makingbookclubpage(Auth)/MakingBookClubPage";
// 로그인 필요 페이지

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


const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
  };

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
    
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/login",
            element: <LoginMain />,
            children:[
                {
                    path: "/login",
                    element: <LoginPage />,
                    
                },
                {
                    path:"/login/account",
                    element: <CreateNickNamePage />,
                    
                },
            ]
            
        },
        {
            path:"/api/v1/auth/oauth2/kakao/code",
            element:<KakaoRedirect/>
        },
        {
            path: "/bookclubs",
            element: <BookClubPage />,
             children: [
                {
                 path: "bookclubinfo/:bookclubid",
                 element: <BookClubDetailPage />,
                },
           ],
        },

        {
           path: "/essay",
           element: <EssayMain/>,
           children:[
            {
                path:"/essay",
                element:<EssayList/>
            },
            {
                path:"/essay/essaydetail",
                element:<EssayDetailPage/>
            },
            {
                path: "/essay/createEssay",
                element: <ProtectedRoute element={<PostingPage />} />,
            },
           ]
        },
    
        {
           path: "/books",
           element: <LibraryPage />,
            children: [
                {
                  path: "bookinfo/:isbn",
                 element: <BookInfoPage />,
              },
             ],
        },

        {
            path: "/posts",
            element: <PostMain />,
            children: [
                {
                    path: "/posts",
                    element: <PostPage />,
                },
                {
                //   path: "postinfo/:postid",
                    path:"/posts/postdetail",
                    element: <PostDetailPage />,
                },
                {//내가 쓴 postdetail일 때만 보이게 해야함
                        path:"/posts/postdetail/modifypost",
                        element: <ProtectedRoute element={<ModifyPost />} />,
                },
                {
                    path: "/posts/createPost",
                    element: <ProtectedRoute element={<CreatePostPage />} />,
                },
                {
                    path: "/posts/myPost",
                    element: <ProtectedRoute element={<MyPost/>} />,
                },
              ],
        },

        {
            path: "/search",
            element: <SearchPage />,
        
        },

        // 로그인 페이지로 리다이렉션 되는 url들 - 시작
    
        {
            path: "/mybookclub",
            element: <ProtectedRoute element={<MyBookClubPage />} />,
            children: [
                {
                  path: "makingclub",
                  element: <ProtectedRoute element={<MakingBookClubPage />} />,
                },
              ],
        },

        {
            path: "/mylibrary",
            element: <ProtectedRoute element={<MyLibraryPage />} />,
            children: [
                {
                    path: "/mylibrary",
                    element: <ProtectedRoute element={<BookRecordPage />} />,
                },

                
            ],
        },
        {
            path: "/bookcalendar",
            element:<ProtectedRoute element={<BookCalendarMain />} />,
            children: [
                {
                    path: "/bookcalendar",
                    element:<ProtectedRoute element={<BookCalendar />} />,
                },

                {
                    path: "/bookcalendar/detail",
                    element:  <ProtectedRoute element={<BookCalendarDetail />} />,
                },
            ],
        },
        
        {
            path: "/mypage",
            element: <ProtectedRoute element={<MyPageMain/>} />,
            children: [
                {
                    path: "/mypage",
                    element: <ProtectedRoute element={<MyPage />} />,
                    
                },
                {
                    path: "/mypage/updateprofile",
                    element: <ProtectedRoute element={<UpdateProfilePage />} />,

                },
            ],
        },


            // 로그인 페이지로 리다이렉션 되는 url들 - 끝 
        
        {
            path: "*",
            element: <PageNotFound />,
        },
        ]
    }
])
export default router;