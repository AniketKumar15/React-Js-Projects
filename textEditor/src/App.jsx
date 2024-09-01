import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import TextArea from './Components/TextArea'
import Alert from './Components/Alert';

const App = () => {

  const [isDark, setDark] = useState(false); //state variable to check whether dark mode is on or off.
  const [alert, setAlert] = useState(null); //state variable to set the value of custome alerts

  // function to toggle the dark mode (dark mode true then false and if false then true) 
  const toggleMode = () => {
    setDark(!isDark); //set value to the setDark state var
    isDark ? document.body.style.backgroundColor = "white" : document.body.style.backgroundColor = "#121212";
    isDark === false ? setAlert("Dark mode has been enable") : setAlert("Light mode has been enable");
  }

  // alerts will null after a 1s.
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
