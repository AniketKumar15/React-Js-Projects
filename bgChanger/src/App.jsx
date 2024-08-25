import { useState } from "react"

function App() {
    const [color, setColor] = useState("Olive");
  return (
    <div className="w-full h-screen" style={{background: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-3 py-2">

          <button onClick={() => setColor("Olive")} className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-2xl" style={{backgroundColor : "Olive"}}>Olive</button>

          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-2xl" style={{backgroundColor : "red"}}>Red</button>

          <button onClick={() => setColor("Black")} className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-2xl" style={{backgroundColor : "Black"}}>Black</button>
          
          <button onClick={() => setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-2xl" style={{backgroundColor : "Green"}}>Green</button>

          <button onClick={() => setColor("Yellow")} className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-2xl" style={{backgroundColor : "Yellow"}}>Yellow</button>

        </div>
      </div>
    </div>
  )
}

export default App
