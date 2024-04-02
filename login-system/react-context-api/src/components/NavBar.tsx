import { NavLink } from "react-router-dom";
import useAuth from "../state-managment/auth/useAuth";

export const NavBar = () => {
    const { user, dispatch } = useAuth();
    return (
        <nav>
            <ul className="flex space-x-8">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <button onClick={() => dispatch({ type: "DELETE" })}>
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};
