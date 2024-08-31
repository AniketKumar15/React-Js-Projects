import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import TextArea from './Components/TextArea'
import Alert from './Components/Alert';

const App = () => {

  const [isDark, setDark] = useState(false);
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    setDark(!isDark);
    isDark ? document.body.style.backgroundColor = "white" : document.body.style.backgroundColor = "#121212";
    isDark === false ? setAlert("Dark mode has been enable") : setAlert("Light mode has been enable");
    // console.log(isDark);
  }

  setTimeout(()=> {
    setAlert(null);
  }, 1000);

  return (
    <div>
      <NavBar toggleMode = {toggleMode} mode = {isDark}/>
      <TextArea setAlert = {setAlert}/>
      <Alert alert={alert}/>
    </div>
  )
}

export default App
