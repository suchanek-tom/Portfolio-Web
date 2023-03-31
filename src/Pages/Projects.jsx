import Nav from "../components/Nav";
import Footer from "../components/Footer";
import OneProjectSlider from "../components/OneProjectSlider";

const Projects = () =>{

    return(
        <div className=" lg:h-screen">
            <Nav/>
                <h1 className="px-12 py-3 font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                    Projects
                </h1>

            {/* Project Slider */}
            <div className=" flex flex-row justify-center items-center h-screen">
                <OneProjectSlider />
            </div>
            
            {/* Footer */}
            <div className=" fixed bottom-0 left-0 w-screen">
                <Footer  />
            </div>
        </div>
    )
}

export default Projects