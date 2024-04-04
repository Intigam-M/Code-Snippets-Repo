import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { logout } from "../store/features/authSlice";

const Navbar = () => {
    const dispatch = useAppDispatch();
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
                    <button onClick={() => dispatch(logout())}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
