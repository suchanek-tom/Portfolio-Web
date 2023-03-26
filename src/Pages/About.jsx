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
        <div className=" h-screen">
            <Nav/>

            {/* SET RESPONSIVE DESIGN */}

            {/* About me */}
            <h1 className="px-12 pt-5 font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                About
            </h1>

            <p className="px-12 py-4 text-xl">I'm web developer from czechia, where I primarily focus on front-end development.</p>
            <p className="px-12 pb-6 text-xl w-3/4"> I am trying to improve my skills in creating website applications, coding, graphic design or the user interface. For me, it is very important that users are able to intuitively use websites and that these websites look aesthetically pleasing. I enjoy learning new technologies and keeping up with trends in front-end development. I really hope that this will help me create beautiful and functional websites for my future clients.</p>

            <h2 className=" px-12 text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">Skills</h2>

            {/* Cards */}
            <div className=" md:flex ml-12 text-2xl justify-center">
                <div className=" w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer flex align-middle items-center">
                    HTML <SiHtml5 className="ml-2 h-6" />
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer flex align-middle items-center">
                    CSS <SiCss3 className="ml-2" />
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer flex align-middle items-center">
                    Javascript <SiJavascript className="ml-2" />
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer flex align-middle items-center">
                    React <SiReact className="ml-2" />
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer flex align-middle items-center">
                    Tailwindcss <SiTailwindcss className="ml-2" />
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer flex align-middle items-center">
                    PHP <SiPhp className="ml-2" />
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer flex align-middle items-center">
                    Symfony <SiSymfony className="ml-2" />
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer flex align-middle items-center">
                    Git <BsGit className="ml-2" />
                </div>
                <div className="w-fit border-2 border-white p-1 m-1 rounded hover:bg-white hover:text-black hover:font-semibold duration-500 cursor-pointer flex align-middle items-center">
                     GitHub <SiGithub className="ml-2" />
                </div>
            </div>

            {/* Footer */}
            <div className=" fixed w-screen bottom-0 left-0">
                <Footer />
            </div>
        </div>
    )
}

export default About