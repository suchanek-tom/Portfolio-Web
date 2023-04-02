import { useState } from "react";

import data from "../data"


const OneProjectSlider = () =>{

    const[projectList, setProjectList] = useState(data)

    return (
        <section className=" md:grid md:grid-cols-2 xl:grid-cols-3 px-12 md:p-5">
             {
                projectList.map( (oneProject) =>{
                    const {id, image, title, description, link} = oneProject

                    return (
                        <div key={id} className=" my-4 mx-2 border-2 bg-white text-black">
                            <img src={image} alt="image" className=" h-64 w-full "/>
                            <h2 className=" font-semibold text-center text-2xl my-1">{title}</h2>
                            <p className=" text-center w-3/4 block mx-auto mb-3">{description}</p>

                            {/* <button 
                                className=" block mx-auto my-2 bg-gradient-to-l from-yellow-900 to-yellow-700 px-3 py-2 font-semibold text-2xl text-white hover:text-black duration-500 rounded"
                                type="button">
                                    <a href={link} target="_blank">
                                        View here
                                    </a>
                                </button> */}
                        </div>
                    )    
                })
             }
        </section>
    )
}

export default OneProjectSlider