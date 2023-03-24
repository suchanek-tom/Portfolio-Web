import Nav from "./Nav"

const About = () =>{
    return(
        <div>
            <Nav/>
            <h1 className="px-12 pt-5 font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                About
            </h1>

            <p className="px-12 py-6">I'm self-taught junior web developer from czechia.</p>

            <h2 className=" px-12 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">Skills</h2>

            <p className="pl-12">
                Html, CSS, Javascript, React, PHP, Symfony, Tailwindcs, Git/GitHub, MSOffice
            </p>
        </div>
    )
}

export default About