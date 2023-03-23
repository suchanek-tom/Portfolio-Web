import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Projects from "./components/Projects"


const App = () => {
  return(
    <div className=" bg-slate-800 h-screen text-white">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App