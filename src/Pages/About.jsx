import Nav from "../components/Nav"

const About = () =>{
    return(
        <div className=" h-screen">
            <Nav/>
            <h1 className="px-12 pt-5 font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                About
            </h1>

            <p className="px-12 py-6">I'm self-taught junior web developer from czechia.</p>

            <h2 className=" px-12 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">Skills</h2>

            <div className=" md:flex ml-12 text-xl justify-center">
                <div className=" w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    HTML
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    CSS
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    Javascript
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    React
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    PHP
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    Symfony
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    Tailwindcss
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    Git/GitHub
                </div>
            </div>
        </div>
    )
}

export default About