import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PrivateRoutes from "./PrivateRoutes";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/about", element: <AboutPage /> },
        ],
    },
]);

export default router;
