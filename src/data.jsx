import React from "react"

import image1 from "./images/Projects/Green-Deal-Web-1.png"
import image2 from "./images/Projects/PC-Pohotovost-Web.png"
import image3 from "./images/Projects/informationBoard.png"

const allProjects = [
    {
        id: 1,
        image: image1,
        title: "Green Deal",
        description: "Simple website on the topic of green deal, which I won in competiton for students",
        
    },
    {
        id: 2,
        image: image2,
        title: "PC Pohotovost Karvina",
        description: "One of my first project. This project was created only in HTML and CSS",
        link: "https://1-pc-pohotovost.cz/",
    },
    {
        id: 3,
        image: image3,
        title: "Information Board",
        description: "This advanced school project based on Symfony and Tailwindcss",
    },
]

export default allProjects