import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  
  // Variables using useState hook
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");

  // refrence of password
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( ()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "{}[])(!@#$%^&*|~`?<>+_:"
    }

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password])
  

  return (
    <>
    {/* the Main Container Start */}
    <div className="w-full bg-pink-100 max-w-md mx-auto my-6 p-3 shadow-black rounded-xl">
      {/* Title */}
      <h1 className="text-4xl text-center text-black">Password Generator</h1>

      {/* Password Container start */}
      <div className="my-3 flex justify-evenly mx-10">
        <input type="text" placeholder='password' className="outline-none border-none py-1 px-4 rounded-s-xl w-full" value={password} readOnly ref={passwordRef}/>
        <button className="bg-blue-500 py-1 px-2 rounded-e-xl text-white hover:bg-blue-300 transition-colors" onClick={copyPassword}>COPY</button>
      </div>
      {/* Password container end */}

      {/* Password Changer */}
      <div className="flex text-sm gap-x-5 justify-center">
        {/* Input Range to adjust the length of password */}
        <div className='flex gap-x-2'>
          <input type="range" min={8} max={20} value={length} onChange={(e)=> {setLength(e.target.value)}}/>
          <label>{length}</label>
        </div>
        {/* Checkbox to check password has number or not */}
        <div className='flex gap-x-2'>
          <input type="checkbox" defaultChecked= {numberAllowed} onChange={(e) => {setNumber((prev) => !prev);}}/>
          <label>Number</label>
        </div>
        {/* Checkbox to check password has Symbols or not */}
        <div className='flex gap-x-2'>
          <input type="checkbox" defaultChecked={charAllowed} onChange={(e) => {setChar((prev) => !prev);}}/>
          <label>Symbols</label>
        </div>

      </div>
      {/* Password Changer End */}
    </div>
    {/* the Main Container End */}
    </>
  )
}

export default App
