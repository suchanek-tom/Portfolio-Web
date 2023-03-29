import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom"


const Nav = () => {

 const [isOpen, setIsOpen] = useState(false);

        return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center text-3xl flex-shrink-0 text-white mr-6 lg:mr-72">
                Portfolio
            </div>

            {/* Hamburger */}
            <div className="block lg:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                <svg
                className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg
                className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
            </button>
            </div>
            
            {/* Links */}
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                <div className="text-sm lg:flex lg:flex-grow justify-end text-center">

                    <div className="lg:mx-3 hover:text-yellow-500 text-3xl duration-500 active:text-yellow-500 py-2 md:py-0">
                        <NavLink to="/"  className={({ isActive }) =>
                            isActive ? "text-yellow-500" : ""
                        }>Home</NavLink>
                    </div>
                    <div className="lg:mx-3 hover:text-yellow-500 text-3xl duration-500 active:text-yellow-500 py-2 md:py-0">
                        <NavLink to="/about"  className={({ isActive }) =>
                            isActive ? "text-yellow-500" : ""
                        }>About</NavLink>
                    </div>
                    <div className="lg:mx-3 hover:text-yellow-500 text-3xl duration-500 active:text-yellow-500 py-2 md:py-0">
                        <NavLink to="/projects" className={({ isActive }) =>
                            isActive ? "text-yellow-500" : ""
                        }>Projects</NavLink>
                    </div>
                    <div className="lg:mx-3 hover:text-yellow-500 text-3xl duration-500 active:text-yellow-500 py-2 md:py-0">
                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "text-yellow-500" : ""
                        }>Contact</NavLink>
                    </div>

                    {/* RESUME Button */}
                    <div>
                        <button className=" lg:ml-3 bg-gradient-to-l from-orange-800 to-yellow-700 px-4 py-1  text-2xl rounded-full hover:text-black duration-500">
                            Resume
                        </button>
                    </div>

                </div>
            </div>
        </nav>
        );
}
export default Nav;