import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { PrivateRoutes } from "./PrivateRoutes";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <RegisterPage /> },
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
