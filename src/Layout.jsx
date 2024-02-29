import { Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";

function Layout() {
    return (
        <div className="text-black dark:bg-black dark:text-white p-2 w-full flex flex-col gap-2">
            <div className="overflow-hidden rounded">
                <NavBar />
            </div>
            <div className=" w-full h-auto rounded flex-1 ">
                <Outlet />
                <div className="p-4 mt-2 text-center flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:gap-2 leading-tight bg-white rounded-lg">
                    <p className="w-fit sm:text-left">
                        <p>Made with ❤️ in India</p>
                        <p className="text-xs">
                        <a
                            href="https://linkedin.in/in/rahoolsingh/"
                            target="_blank"
                        >
                            © Copyright Veer Rajpoot
                        </a></p>
                    </p>
                    <p className="w-fit hidden sm:block">
                        <a
                            href="https://linkedin.in/in/rahoolsingh/"
                            target="_blank"
                            rel="noreferrer "
                            className="text-xs text-red-700 sm:bg-blue-700 p-2 px-3 sm:text-white rounded font-semibold"
                        >
                            Credit: Veer Rajpoot
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Layout;
