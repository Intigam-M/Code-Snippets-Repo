import { NavLink } from "react-router-dom";

export const NavBar = () => {
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
                    <button >
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};
