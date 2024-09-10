import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import light from "./assets/light.svg"
import dark from "./assets/dark.svg"
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Blogs from './Components/Blogs'
import ContactMe from './Components/ContactMe'

const App = () => {
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    setMode(!mode); //set value to the setDark state var
    mode ? document.body.style.backgroundColor = "white" : document.body.style.backgroundColor = "black";
    // isDark === false ? setAlert("Dark mode has been enable") : setAlert("Light mode has been enable");
    mode ? document.body.style.backgroundImage = `url(${dark})` : document.body.style.backgroundImage = `url(${light})`;
  }
  return (
    <div>
      <Router>
        <Navbar toggleMode = {toggleMode} mode={mode}/>
        <Routes>
            <Route exact path="/" element={<HeroSection mode={mode} />}/>
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/skills" element={<Skills mode={mode}/>}/>
            <Route exact path="/projects" element={<Projects mode={mode}/>}/>
            <Route exact path="/blog" element={<Blogs mode={mode}/>}/>
            <Route exact path="/contact" element={<ContactMe mode={mode}/>}/>
            <Route exact path="/hire" element={<ContactMe mode={mode}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
