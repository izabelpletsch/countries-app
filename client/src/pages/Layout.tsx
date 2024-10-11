import { Outlet, Link } from "react-router-dom";
import { Menu } from "../components";

function Layout() {
    return (
        <>
            <Menu>
                <Link
                    to="/"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                    Home
                </Link>
                <Link
                    to="/countries"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                    Countries
                </Link>
            </Menu>

            <Outlet />
        </>
    );
}

export default Layout;
