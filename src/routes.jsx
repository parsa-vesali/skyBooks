import Home from "./Pages/Home"
import RegisterForm from "./Pages/RegisterForm"
import LoginForm from "./Pages/LoginForm"
import Categories from "./Pages/Categories"
import ShoppingCart from "./Pages/ShoppingCart"

let routes = [
    { path: '/', element: <Home /> },
    { path: '/register', element: <RegisterForm /> },
    { path: '/login', element: <LoginForm /> },
    { path: '/categories/:category', element: <Categories /> },
    { path: '/shopping-cart', element: <ShoppingCart /> },
]


export default routes