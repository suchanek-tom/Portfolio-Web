import Nav from "../components/Nav"
import Footer from "../components/Footer"


const Contact = () =>{
    return(
        <div className=" h-screen">
            <Nav/>
            <h1 className=" px-12 p-5 font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                Contact
            </h1>

            {/* Footer */}
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Contact