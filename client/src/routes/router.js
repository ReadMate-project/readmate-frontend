import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/error/PageNotFound";
import LogIn from "../pages/login/LogIn";
import Layout from "../pages/layout/Layout";

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