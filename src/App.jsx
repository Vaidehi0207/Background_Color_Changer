import { useState } from "react"

function App() {
  //color ko array me likhna hoga ye sab aayega useState se
  const [color, setcolor] = useState("olive")

  return (
    //width full w-full h-screen screen ki height 
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button
      onClick={() => setcolor("red")}
      //ye onClick ek function call kr rha h aur wo function ek aur function call kr rha h jo ki h res
      //onClick={setcolor("red")}
      className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "red"}}
      >Red</button>
      <button
      onClick={() => setcolor("gree n")}
      className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "green"}}
      >Green</button>
      <button
      onClick={() => setcolor("blue")}
      className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "blue"}}
      >Blue</button>
      <button
      onClick={() => setcolor("purple")}
      className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "purple"}}
      >Purple</button>
      <button
      onClick={() => setcolor("pink")}
      className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "pink"}}
      >Pink</button>
      <button
      onClick={() => setcolor("orange")}
      className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "orange"}}
      >Orange</button>
      <button
      onClick={() => setcolor("grey")}
      className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "grey"}}
      >Grey</button>
      <button
      onClick={() => setcolor("black")}
      className="outline-none px-4 px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "black"}}
      >Black</button>



      </div>
    </div>
    </div>
  )
}

export default App
