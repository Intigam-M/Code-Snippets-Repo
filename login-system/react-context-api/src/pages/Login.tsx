import useAuth from "../state-managment/auth/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const { dispatch } = useAuth();
    const navigate = useNavigate();

    const { user } = useAuth();
    if (user) return <Navigate to="/" />;

    const onclickHandler = () => {
        dispatch({ type: "ADD", user: "intgam" });
        navigate("/about");
    };
    return (
        <div>
            <button
                onClick={onclickHandler}
                className="bg-red-500 text-white p-3"
            >
                login
            </button>
        </div>
    );
};

export default Login;
