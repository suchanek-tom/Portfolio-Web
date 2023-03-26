import Nav from "../components/Nav"
import Footer from "../components/Footer"

// ICONS
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";


const Contact = () =>{
    return(
        <div className=" h-screen">
            <Nav/>
            <h1 className=" px-12 p-5 font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                Contact
            </h1>

            {/* Accounts */}
                <div className="flex px-14 mt-10">
                    <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-3 py-2 font-semibold text-2xl hover:text-black duration-500 mr-4 rounded"
                            type="button"
                            >
                        <a href="https://www.instagram.com/tsuchanek_/" target="_blank"><SiInstagram/></a>
                    </button>

                    <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-3 py-2 font-semibold text-2xl hover:text-black duration-500 mx-4 rounded"
                            type="button"
                            >
                        <a href="https://github.com/suchanek-tom" target="_blank"> <SiGithub/> </a>
                    </button>

                    <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-3 py-2 font-semibold text-2xl hover:text-black duration-500 mx-4 rounded"
                            type="button"
                            >
                        <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-suchanek/" target="_blank"><SiLinkedin/></a>
                    </button>
                </div>


            {/* Footer */}
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Contact