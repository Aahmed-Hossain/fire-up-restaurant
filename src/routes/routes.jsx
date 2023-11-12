import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

import Mainlayout from "../layouts/Mainlayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllFood from "../pages/AllFoods/AllFood";
import Blogs from "../pages/Blogs/Blogs";
import FoodDetails from "../components/FoodDetails/FoodDetails";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'allFoods',
                element:<AllFood></AllFood>
            },
            {
                path: 'blogs',
                element:<Blogs></Blogs>
            },
            {
                path: '/foodDetails/:id',
                element: <FoodDetails></FoodDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/allFoods/${params.id}`)
            },
            {
                path: 'allFoods/foodDetails/:id',
                element: <FoodDetails></FoodDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/allFoods/${params.id}`)
            }
            
        ]
    }
])

export default routes;