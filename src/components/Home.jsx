import Nav from "./Nav"
import { TypeAnimation } from "react-type-animation"

const Home = () => {
    return(
        <>
            <Nav />
            <h1 className=" font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                Tomáš Suchanek
            </h1>
    
            <p className="m-3 text-xl text-white font-semibold">
                <TypeAnimation
                    sequence={[
                        'Web developer', 
                        4000, 
                        'Frontend developer',
                       
                    ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                />
            </p>
        </>
    )
}

export default Home