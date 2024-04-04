import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { login } from "../store/features/authSlice";

const Login = () => {
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.auth.user);
    const dispatch = useAppDispatch();

    if (user) return <Navigate to="/" />;

    const onclickHandler = () => {
        dispatch(login({ user: "intigam" }));
        navigate("/about");
    };
    return (
        <div>
            <button onClick={onclickHandler}>login</button>
        </div>
    );
};

export default Login;
