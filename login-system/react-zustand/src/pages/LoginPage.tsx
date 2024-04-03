import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../auth/store";

const Login = () => {
    const navigate = useNavigate();
    const { user, login } = useAuth();
    console.log(user);

    if (user) return <Navigate to="/" />;

    const onclickHandler = () => {
        login("intigam");
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
