import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

import Mainlayout from "../layouts/Mainlayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllFood from "../pages/AllFoods/AllFood";
import Blogs from "../pages/Blogs/Blogs";
import FoodDetails from "../components/FoodDetails/FoodDetails";
import OrderNow from "../components/OrderNow/OrderNow";
import Orders from "../components/Orders/Orders";
import Update from "../components/Update/Update";
import AddFood from "../components/AddFood/AddFood";
import MyAddedFoods from "../components/MyAddedFoods/MyAddedFoods";
import UpdateAddedFood from "../components/UpdateAddedFood/UpdateAddedFood";
import PrivateRoute from "./PrivateRoute";


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
                element:<AllFood></AllFood>,
            },
            {
                path: 'blogs',
                element:<Blogs></Blogs>,
                loader: ()=> fetch(`https://fire-up-restaurant-server.vercel.app/blogs`)
            },
            {
                path: '/foodDetails/:id',
                element: <FoodDetails></FoodDetails>,
                loader: ({params})=> fetch(`https://fire-up-restaurant-server.vercel.app/allFoods/${params.id}`)
            },
            {
                path: 'allFoods/foodDetails/:id',
                element: <FoodDetails></FoodDetails>,
                loader: ({params})=> fetch(`https://fire-up-restaurant-server.vercel.app/allFoods/${params.id}`)
            },
            {
                path: '/orderNow/:id',
                element: <PrivateRoute><OrderNow></OrderNow></PrivateRoute>,
                loader: ({params})=> fetch(`https://fire-up-restaurant-server.vercel.app/allFoods/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params})=> fetch(`https://fire-up-restaurant-server.vercel.app/orders/${params.id}`)
            },
            {
                path: '/addFoods',
                element: <AddFood></AddFood>
            },
            {
                path: '/MyAddedFoods',
                element: <MyAddedFoods></MyAddedFoods>
            },
            {
                path: '/updateAddedFood/:id',
                element: <UpdateAddedFood></UpdateAddedFood>,
                loader: ({params})=> fetch(`https://fire-up-restaurant-server.vercel.app/allFoods/${params.id}`)
            },
            
        ]
    }
])

export default routes;