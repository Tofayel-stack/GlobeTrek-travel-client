import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/signIn/SignIn";
import AboutPage from "../pages/about/AboutPage";
import SignUp from "../pages/signIn/SignUp";
import Destination from "../pages/destination/Destination";
import PlaceDetails from "../components/placeDetails/PlaceDetails";



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
                element:<AboutPage></AboutPage>
            },
            {
                path:'/destination',
                element:<Destination></Destination>
            },
            {
                path:'/destination-details/:id',
                loader: ({params})=>  fetch(`http://localhost:5000/destination-details/${params.id}`),
                element:<PlaceDetails></PlaceDetails>
            },
               
            
        ]
    },
    {
        path:'/signIn',
        element:<SignIn></SignIn>
    },
    {
        path:'/signUp',
        element:<SignUp></SignUp>
    }, 

   
 
 
])





const AllRoutes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default AllRoutes;