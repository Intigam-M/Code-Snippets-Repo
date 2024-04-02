import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="bg-gray-400 h-[100vh]">
            <NavBar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
