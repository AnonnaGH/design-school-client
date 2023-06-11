import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AdminManageClass from "../Pages/Dashboard/ManageClasses/AdminManageClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyBookedClasses from "../Pages/Dashboard/MyBookedClasses";
import AllInstructor from "../Pages/AllInstructor/AllInstructor";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'allinstructors',
                element: <AllInstructor></AllInstructor>,
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>,
            },
            {
                path: 'allclasses',
                element: <AllClasses></AllClasses>,
                loader: () => fetch('http://localhost:5000/classes')
            },

        ]

    },



    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'adminmanageclass',
                element: <AdminRoute><AdminManageClass></AdminManageClass></AdminRoute>
            },
            {
                path: 'manageclasses',
                element: <ManageClasses></ManageClasses>
            },

            {
                path: 'mybookedclasses',
                element: <MyBookedClasses></MyBookedClasses>
            },


        ]
    }
]);


export default router;