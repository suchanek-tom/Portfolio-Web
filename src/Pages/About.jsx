import Nav from "../components/Nav"
import Footer from "../components/Footer"

// ICONS
import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiSymfony } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

const About = () =>{
    return(
        <div className=" lg:h-screen">
            <Nav/>

            {/* About me */}
            <h1 className="px-12 pt-5 font-semibold text-transparent text-center md:text-left text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                About
            </h1>

            <p className="px-12 py-4 md:text-xl text-center md:text-left">I'm web developer from czechia, where I primarily focus on front-end development.</p>
            <p className="px-12 pb-6 md:text-xl text-center md:text-left md:w-3/4"> I am trying to improve my skills in creating website applications, coding, graphic design or the user interface. For me, it is very important that users are able to intuitively use websites and that these websites look aesthetically pleasing. I enjoy learning new technologies and keeping up with trends in front-end development. I really hope that this will help me create beautiful and functional websites for my future clients.</p>

            <h2 className=" px-12 text-6xl font-semibold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">Skills</h2>

            {/* Cards */}
            <div className=" mt-4 px-12 lg:flex lg:ml-12 text-xl md:text-2xl md:justify-center">
                <div className=" border-2 border-white flex justify-center items-center text-center p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    HTML <SiHtml5 className="mx-1" />
                </div>
                <div className=" border-2 border-white flex justify-center items-center text-center p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    CSS <SiCss3 className="mx-1" />
                </div>
                <div className=" border-2 border-white flex justify-center items-center text-center p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    Javascript <SiJavascript className="mx-1" />
                </div>
                <div className=" border-2 border-white flex justify-center items-center text-center p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    React <SiReact className="mx-1" />
                </div>
                <div className=" border-2 border-white flex justify-center items-center text-center p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    Tailwindcss <SiTailwindcss className="mx-1" />
                </div>
                <div className=" border-2 border-white flex justify-center items-center text-center p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    PHP <SiPhp className="mx-1" />
                </div>
                <div className="border-2 border-white flex justify-center items-center text-center p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    Symfony <SiSymfony className="mx-1" />
                </div>
                <div className="border-2 border-white flex justify-center items-center text-center p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                    Git <BsGit className="mx-1" />
                </div>
                <div className=" border-2 border-white flex justify-center items-center text-center p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer">
                     GitHub <SiGithub className="mx-1" />
                </div>
            </div>

            {/* Footer */}
            <div className="lg:fixed w-screen bottom-0 left-0">
                <Footer />
            </div>
        </div>
    )
}

export default About