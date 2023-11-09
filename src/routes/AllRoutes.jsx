import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/signIn/SignIn";
import About from "../pages/about/About";
import SignUp from "../pages/signIn/SignUp";
import Destination from "../pages/destination/Destination";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/destination',
                element:<Destination></Destination>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },     
            
        ]
    },
 
 
])





const AllRoutes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default AllRoutes;