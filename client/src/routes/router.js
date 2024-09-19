import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import LogIn from "../pages/loginpage/LoginPage";
import Layout from "../components/layout/Layout";
import MainPage from "../pages/mainpage/MainPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        // children: [
        //     {
        //         path: 
        //         element: 
        //     },
        // ]
    },
    {
        path: "/logIn",
        element: <LogIn />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },

])

export default router;