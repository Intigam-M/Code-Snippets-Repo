import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes.tsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./state-managment/auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
);
