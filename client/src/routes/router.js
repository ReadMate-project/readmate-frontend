import { createBrowserRouter, RouterProvider, Route, Navigate, Outlet } from "react-router-dom";

import Layout from "../components/layout/Layout";
import MainPage from "../pages/mainpage/MainPage";

import LoginPage from "../pages/loginpage/LoginPage";
import SignUpPage from "../pages/loginpage/signuppage/SignUpPage";

import LibraryPage from "../pages/librarypage/LibraryPage";
import BookInfoPage from "../pages/librarypage/bookinfopage/BookInfoPage";

import FeedPage from "../pages/feedpage/FeedPage";

import BookClubPage from "../pages/bookclubpage/BookClubPage";
import BookClubDetailPage from "../pages/bookclubpage/bookclubdetailpage/BookClubDetailPage";

import PostPage from "../pages/postpage/PostPage";
import PostDetailPage from "../pages/postpage/postdetailpage/PostDetailPage";

import SearchPage from "../pages/searchpage/SearchPage";


// 로그인 필요 페이지 
import { isAuthenticated } from "../auth";

import MyPage from "../pages/mypage(Auth)/MyPage";
import UpdateProfilePage from "../pages/mypage(Auth)/updateprofilepage(Auth)/UpdateProfilePage";

import MyLibraryPage from "../pages/mylibrarypage(Auth)/MyLibraryPage";
import BookRecordPage from "../pages/mylibrarypage(Auth)/bookrecordpage(Auth)/BookRecordPage";
import PostingPage from "../pages/mylibrarypage(Auth)/postingpage(Auth)/PostingPage";


import MyBookClubPage from "../pages/mybookclubpage(Auth)/MyBookClubPage";
import MakingBookClubPage from "../pages/mybookclubpage(Auth)/makingbookclubpage(Auth)/MakingBookClubPage";
// 로그인 필요 페이지

import PageNotFound from "../components/PageNotFound";

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
            element: <LoginPage />,
            
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
           path: "/feeds",
           element: <FeedPage />,
        },
    
        {
           path: "/books",
           element: <LibraryPage />,
            children: [
                {
                  path: "bookinfo/:bookid",
                 element: <BookInfoPage />,
              },
             ],
        },

        {
            path: "/posts",
            element: <PostPage />,
            children: [
                {
                  path: "postinfo/:postid",
                  element: <PostDetailPage />,
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
                    path: "bookrecord",
                    element: <ProtectedRoute element={<BookRecordPage />} />,
                },

                {
                    path: "posting",
                    element: <ProtectedRoute element={<PostingPage />} />,
                },
            ],
        },
        
        {
            path: "/mypage",
            element: <ProtectedRoute element={<MyPage />} />,
            children: [
                {
                    path: "updateprofile",
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