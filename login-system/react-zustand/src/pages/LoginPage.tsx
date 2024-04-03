import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../auth/store";

const Login = () => {
    const navigate = useNavigate();
    const { user, login } = useAuth();

    if (user) return <Navigate to="/" />;

    const onclickHandler = () => {
        login("intigam");
        navigate("/about");
    };
    return (
        <div>
            <button onClick={onclickHandler}>login</button>
        </div>
    );
};

export default Login;
