import React  from "react";
import Nav from "../components/Nav"
import { TypeAnimation } from "react-type-animation"

import  Image  from '../public/Web-designer.webp'


// ICONS
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

const Home = () => {

    return(
        <div className=" md:h-screen">
            <Nav />

            <section className=" flex-grow md:flex md:items-center">

                {/* Left */}
                <div className="md:w-1/2 w-screen">
                    <h1 className="mt-24 px-12 text-2xl text-center md:text-left md:text-4xl 2xl:text-6xl">Hello, I am</h1>
                    <h1 className=" hover:animate-pulse px-12 mt-2 font-semibold text-transparent text-center md:text-left text-5xl md:text-7xl 2xl:text-9xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                        Tomáš Suchanek
                    </h1>

                    <p className="px-14 mt-8 text-xl text-center md:text-left md:text-3xl 2xl:text-5xl text-white font-semibold">
                        <TypeAnimation
                            sequence={[
                                'Web developer', 
                                4000, 
                                'Student',
                                4000,
                                ''
                            ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                        />
                    </p>

                    {/* Accounts */}
                    <div className="flex justify-center md:justify-start px-14 mt-10">

                        <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-3 py-2 font-semibold text-2xl hover:text-black duration-500 mr-4 rounded"
                                type="button"
                                >
                            <a href="https://www.instagram.com/tsuchanek_/" target="_blank"><SiInstagram/></a>
                        </button>
                        
                        <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-3 py-2 font-semibold text-2xl hover:text-black duration-500 mx-4 rounded"
                                type="button"
                                >
                            <a href="https://github.com/suchanek-tom" target="_blank" className=" flex items-center"><SiGithub/></a>
                        </button>

                        <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-3 py-2 font-semibold text-2xl hover:text-black duration-500 mx-4 rounded"
                                type="button"
                                >
                            <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-suchanek/" target="_blank"><SiLinkedin/></a>
                        </button>

                    </div>
                </div>

                {/* Right */}
                <div className="md:w-1/2 w-full">
                    <img src={Image} alt="Img" className=" h-96 block mx-auto mt-20" />
                </div>

            </section>
          
        </div>
    )
}

export default Home