import { NavLink } from "react-router-dom"

const Nav = () =>{
    return(
        <div>
            <nav className=" ">
                <ul className=" flex py-4 text-white text-3xl justify-end mx-8">
                <span className=" block mr-auto ml-5">
                    Portfolio
                </span>
                    <li className="mx-5 hover:text-yellow-500 duration-500 active:text-yellow-500">
                        <NavLink to="/"  className={({ isActive }) =>
                            isActive ? "text-yellow-500" : ""
                        }>Home</NavLink>
                    </li>
                    <li className="mx-5 hover:text-yellow-500 duration-500 active:text-yellow-500">
                        <NavLink to="/projects" className={({ isActive }) =>
                            isActive ? "text-yellow-500" : ""
                        }>Projects</NavLink>
                    </li>
                    <li className="mx-5 hover:text-yellow-500 duration-500 active:text-yellow-500">
                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "text-yellow-500" : ""
                        }>Contact</NavLink>
                    </li>
                    <li className=" ml-3">
                        <button className=" bg-gradient-to-l from-orange-800 to-yellow-700 px-4 py-1 text-2xl rounded-full hover:text-black duration-500">
                            Resume
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav