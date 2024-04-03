import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import useAuth from "./auth/store";

const PrivateRoutes = () => {
    const { user } = useAuth();

    if (!user) return <Navigate to="/login" />;

    return <Layout />;
};

export default PrivateRoutes;
