import { NavLink } from "react-router-dom"


const Error = () => {
  return (
    <div>
       <div className="px-40 py-20 rounded-md ">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-yellow-500 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
              <span className="text-yellow-500">Oops!</span> Stránka nenalezena
            </h6>

            <p className="mb-8 text-center text-gray-400 md:text-lg">
              Stránku, kterou hledáte zřejmě neexistuje
            </p>

            <a>
              <NavLink to="/" className="hover:text-yellow-500 duration-500 active:text-yellow-500 text-xl">
                Zpět
              </NavLink>
            </a>

          </div>
        </div>
    </div>  
  )
}


export default Error