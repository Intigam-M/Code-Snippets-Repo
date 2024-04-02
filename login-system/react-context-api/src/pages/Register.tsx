import { Navigate } from "react-router-dom";
import useAuth from "../state-managment/auth/useAuth";

const Register = () => {
    const { user } = useAuth();
    if (user) return <Navigate to="/" />;

    return <div>Register</div>;
};

export default Register;
