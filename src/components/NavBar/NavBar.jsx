import logoMobile from "../../assets/logo_full.png";
import logoPc from "../../assets/logo_full_pc.png";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { navBarItems } from "./constants";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function NavBar() {
    const [openModal, setOpenModal] = useState(false);
    const [menuIcon, setMenuIcon] = useState(<TiThMenuOutline />);

    return (
        <div>
            <nav className="bg-white dark:bg-gray-900 w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="flex flex-wrap items-center justify-between mx-auto p-2 sm:px-4">
                    <NavLink
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src={logoPc}
                            className="h-full max-h-20 hidden sm:block"
                            alt="Flowbite Logo"
                        />
                        <img
                            src={logoMobile}
                            className="h-12 sm:hidden"
                            alt="Flowbite Logo"
                        />
                    </NavLink>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link
                            to={"/admission"}
                            type="button"
                            className="hidden sm:inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                        >
                            Admission Open
                        </Link>
                        <button
                            type="button"
                            className={`inline-flex items-center p-2 w-full h-full justify-center text-2xl ease-in-out outline-none rounded sm:hidden ${
                                openModal ? "bg-blue-700 text-white" : ""
                            }`}
                            onClick={() => setOpenModal(!openModal)}
                            aria-controls="navbar-sticky"
                            aria-expanded={openModal ? "true" : "false"}
                        >
                            <span className="sr-only">Open main menu</span>
                            <TiThMenuOutline />
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                            openModal ? "block" : "hidden"
                        }`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navBarItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            [
                                                isActive
                                                    ? "bg-blue-700 text-white sm:text-blue-700 sm:underline sm:underline-offset-4 sm:font-bold"
                                                    : "",
                                                "block py-2 px-3 rounded sm:bg-transparent sm:p-0",
                                            ].join(" ")
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <MobileMenu
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        navBarItems={navBarItems}
                    />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
