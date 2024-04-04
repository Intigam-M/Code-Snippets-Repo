import Layout from "./Layout";
import { useAppSelector } from "./store/hooks";
import { Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const user = useAppSelector((state) => state.auth.user);

    if (!user) return <Navigate to="/login" />;

    return <Layout />;
};

export default PrivateRoutes;
