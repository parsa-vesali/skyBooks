import Home from "./Pages/Home"
import RegisterForm from "./Pages/RegisterForm"
import LoginForm from "./Pages/LoginForm"

let routes = [
    { path: '/', element: <Home /> },
    { path: '/register', element: <RegisterForm /> },
    { path: '/login', element: <LoginForm /> },
]


export default routes