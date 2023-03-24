import Nav from "./Nav"
import { TypeAnimation } from "react-type-animation"
import Image from "../images/Web-designer.webp"

const Home = () => {

    return(
        <>
            <Nav />

            <section className="flex">

                {/* Left */}
                <div className="w-1/2 ">
                    <h1 className="mt-24 px-12 text-4xl">Hello, I am</h1>
                    <h1 className=" px-12 mt-2 font-semibold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                        Tomáš Suchanek
                    </h1>

                    <p className="px-14 mt-8 text-3xl text-white font-semibold">
                        <TypeAnimation
                            sequence={[
                                'Web developer', 
                                4000, 
                                'Frontend developer',
                                4000,
                            ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                        />
                    </p>

                    {/* Accounts */}
                    <div className="flex px-14 mt-10">

                        <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-4 py-1 font-semibold text-2xl hover:text-black duration-500 mr-4 rounded"
                                type="button"
                                >
                            <a href="https://www.instagram.com/tsuchanek_/" target="_blank">instagram</a>
                        </button>
                        
                        <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-4 py-1 font-semibold text-2xl hover:text-black duration-500 mx-4 rounded"
                                type="button"
                                >
                            <a href="https://github.com/suchanek-tom" target="_blank">GitHub</a>
                        </button>

                        <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-4 py-1 font-semibold text-2xl hover:text-black duration-500 mx-4 rounded"
                                type="button"
                                >
                            <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-suchanek/" target="_blank">LinkedIn</a>
                        </button>

                    </div>
                </div>

                {/* Right */}
                <div className="w-1/2 ">
                    <img src={Image} alt="Img" className=" h-96 block mx-auto mt-20" />
                </div>

            </section>
          
        </>
    )
}

export default Home