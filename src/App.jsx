import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Error from "./Pages/Error"
import Projects from "./Pages/Projects"
import About from "./Pages/About"


const App = () => {
  return(
    <div className=" bg-slate-800 text-white">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/About" element={<About />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App