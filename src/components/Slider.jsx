import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import data from "../data"
import { useState, useEffect } from "react";
import allProjects from "../data";

const projectSlider = () => {
    const [index, setIndex] = useState(0)

    return <section>
            <div className=" flex flex-row w-96 text-center relative">
                {data.map( (allProjects) => {
                    const {id, image, title, description} = oneProject

                    return <article key={id}>
                        <img src={image} alt="" />
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </article>
                })}
            </div>
            <button>
                <FaArrowAltCircleLeft />
            </button>
            
            <button>
                <FaArrowAltCircleRight />
            </button>

        </section>
}

export default projectSlider