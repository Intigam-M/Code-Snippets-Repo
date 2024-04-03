import { NavLink } from "react-router-dom";
import useAuth from "../auth/store";

const Navbar = () => {
    const { logout, user } = useAuth();
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <button onClick={() => logout()}>Logout</button>
                </li>
            </ul>
            <div>{user}</div>
        </nav>
    );
};

export default Navbar;
