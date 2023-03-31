import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import data from "../data"
import { useState, useEffect } from "react";

const OneProjectSlider = () =>{
    const[index, setIndex] = useState(0)
    
    return(
        <section className="">
            <div className=" flex flex-row w-96 h-96 text-center relative">
                {data.map( (oneProject, oneMovieIndex) =>{
                    const { id, image, title, description} = oneProject

                    return <article key={id} className="">
                        <img src={image} alt="picture" className=" h-10"/>
                        <h2 className="">{title}</h2>
                        <p className="">{description}</p>
                    </article>
                })}
            </div>
             
        </section>
    )
}

export default OneProjectSlider