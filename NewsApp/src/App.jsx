import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import Footer from './Components/Footer';

const App = () => {

  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  return (
    <div>
      <Navbar setCategory={setCategory} setCountry={setCountry}/>
      <NewsBoard category={category} country = {country}/>
      <Footer/>
    </div>
  )
}

export default App