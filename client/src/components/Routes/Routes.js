import { createBrowserRouter } from "react-router-dom";
import ExpTracker from "../ExpTracker/ExpTracker";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Login-Signup/Login";
import SignUp from "../Login-Signup/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/myCalculation',
                element:<ExpTracker></ExpTracker>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])