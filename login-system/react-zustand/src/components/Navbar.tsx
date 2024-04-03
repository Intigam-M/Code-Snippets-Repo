import { NavLink } from "react-router-dom";
import useAuth from "../auth/store";

const Navbar = () => {
    const { logout, user } = useAuth();
    console.log(user);
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
                    <button onClick={() => logout()}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
