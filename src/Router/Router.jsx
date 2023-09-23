import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../LayOut/MainLayout'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Home from '../components/Home/Home'
import Favorites from '../components/Favorites/Favorites'
import Login from '../components/Login/Login'
import PhoneDetails from '../components/PhoneDetails/PhoneDetails'
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/public/phones.json')    
            },
            {
                path: "favorites",
                element: <Favorites></Favorites>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "/phones/:id",
                element: <PhoneDetails></PhoneDetails>,
                loader: () => fetch('/public/phones.json') 
            }
        ]
    }

])
export default router