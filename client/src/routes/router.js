// import { createBrowserRouter, RouterProvider, Route, Navigate, Outlet } from "react-router-dom";

import Layout from "../components/layout/Layout";
import MainPage from "../pages/mainpage/MainPage";

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
            children: [
                {
                  path: "signup",
                  element: <SignUpPage />,
                },
              ],
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