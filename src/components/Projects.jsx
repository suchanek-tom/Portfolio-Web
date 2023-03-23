import Nav from "./Nav";
import data from "../data";
import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Projects = () =>{
    const [index, setIndex] = useState(0)
    const {image, title, description} = data[index]

    const checkProjectNumber = (projectIndex) => {
        if (projectIndex < 0){
            return data.length - 1
        }
        else if (projectIndex > data.length - 1)
        {
            return 0
        }
        else
        {
            return projectIndex
        }
    }

    const nextProject = () => {
        setIndex( (index) => {
            const newIndex = index + 1
            return checkProjectNumber(newIndex)
        })
    }

    const previousProject = () => {
        setIndex( (index) => {
            const newIndex = index - 1
            return checkProjectNumber(newIndex)
        })
    }


    return(
        <>
            <Nav/>
                <h1 className="p-12 font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                    Projects
                </h1>

            <div className=" border-2 w-fit block mx-auto shadow shadow-white">
                <img src={image} alt="image" className=" h-56 md:h-80 block mx-auto border-b-2"/>
                <h2 className=" text-center text-2xl p-2 font-semibold">{title}</h2>
                <p className=" text-center font-light text-lg">{description}</p>
                    <div className="text-center mt-3">
                        <button className=" text-2xl md:text-3xl cursor-pointer bg-transparent text-yellow-500 px-2 hover:text-yellow-700 duration-500">
                            <FaArrowAltCircleLeft onClick={previousProject} />
                        </button>
                        <button className=" text-2xl md:text-3xl cursor-pointer bg-transparent text-yellow-500 px-2 hover:text-yellow-700 duration-500">
                            <FaArrowAltCircleRight onClick={nextProject}/>
                        </button>
                    </div>
            </div>
        </>
    )
}

export default Projects