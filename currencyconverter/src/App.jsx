import React from 'react'
import NavBar from './Components/NavBar'
import InputArea from './Components/InputArea'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './Components/About';

const App = () => {
  return (
    <div className='w-full h-screen min-h-full text-black'>

      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<InputArea />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App