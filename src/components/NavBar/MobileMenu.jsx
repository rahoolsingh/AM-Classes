import { Modal } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_full.png";
import { IoClose } from "react-icons/io5";

function MobileMenu({ openModal, setOpenModal, navBarItems }) {
    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>
                    <div className="flex justify-between mb-8">
                        <img className="h-8" src={logo} />
                        <button>
                            <button
                                type="button"
                                className="inline-flex items-center p-2 justify-center text-xl ease-in-out outline-none rounded sm:hidden bg-red-700 text-white"
                                onClick={() => setOpenModal(!openModal)}
                                aria-controls="navbar-sticky"
                                aria-expanded={openModal ? "true" : "false"}
                            >
                                <span className="sr-only">close main menu</span>
                                <IoClose />
                            </button>
                        </button>
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navBarItems?.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    onClick={() => setOpenModal(false)}
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
                </Modal.Body>
            </Modal>
        </>
    );
}

export default MobileMenu;
