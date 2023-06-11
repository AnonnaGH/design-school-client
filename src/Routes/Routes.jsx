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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                element: <AdminManageClass></AdminManageClass>
            },


        ]
    }
]);


export default router;