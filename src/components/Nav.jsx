import { NavLink } from "react-router-dom"

const Nav = () =>{
    return(
        <div>
            <nav className="">
                <ul className=" flex py-4 text-white text-2xl w-full">
                    <li className="mx-3 hover:text-yellow-500 duration-500 active:text-yellow-500">
                        <NavLink to="/"  className={({ isActive }) =>
                            isActive ? "text-yellow-500" : ""
                        }>Domů</NavLink>
                    </li>
                    <li className="mx-3 hover:text-yellow-500 duration-500 active:text-yellow-500">
                        <NavLink to="/projects" className={({ isActive }) =>
                            isActive ? "text-yellow-500" : ""
                        }>Projekty</NavLink>
                    </li>
                    <li className="mx-3 hover:text-yellow-500 duration-500 active:text-yellow-500">
                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "text-yellow-500" : ""
                        }>Kontakt</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav