import { NavLink } from "react-router-dom"


const Error = () => {
  return (
    <div>
       <div className="px-40 rounded-md h-screen py-28">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-yellow-500 text-9xl">404</h1>

            <h6 className="mb-2 text-xl font-bold text-center text-white md:text-3xl">
              <span className="text-yellow-500">Oops!</span> Page was not found
            </h6>

            <p className="mb-8 text-center text-gray-400 text-base md:text-lg">
              The page you are looking for doesn't exist
            </p>

            <a>
              <NavLink to="/" className="hover:text-yellow-500 duration-500 active:text-yellow-500 text-2xl">
                Home
              </NavLink>
            </a>

          </div>
        </div>
    </div>  
  )
}


export default Error