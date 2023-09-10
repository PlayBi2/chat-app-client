import Home from "../pages/home-page";
import Login from "../pages/login-page";
import Register from "../pages/register-page";
import routes from "../routes";

const publicRoute = [
    {
        path: routes.home,
        component: Home
    },
    {
        path: routes.login,
        component: Login
    },
    {
        path: routes.register,
        component: Register
    }
]

export default publicRoute