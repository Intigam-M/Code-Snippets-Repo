import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="bg-gray-400 h-[100vh]">
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
