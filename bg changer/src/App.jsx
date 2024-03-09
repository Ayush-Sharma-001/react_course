import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("white");
  return (
    <div className="w-full h-screen duration-150  "
      style={{ backgroundColor: color }} >


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' >
          <button 
          onClick={() => setColor("Teal")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "Teal" }}>
            Teal
          </button>
          <button 
          onClick={() => setColor("grey")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "grey" }}>
            grey
          </button>
          <button 
          onClick={() => setColor("Orange")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "Orange" }}>
            Orange
          </button>
          <button 
          onClick={() => setColor("#D24545")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "#D24545" }}>
            Red
          </button>
          <button 
          onClick={() => setColor("#436850")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "#436850" }}>
            Sage
          </button>
          <button 
          onClick={() => setColor("#ECB159")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "#ECB159" }}>
            Fall
          </button>
          <button 
          onClick={() => setColor("olive")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "olive" }}>
            olive
          </button>
          <button 
          onClick={() => setColor("black")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "black" }}>
             black
          </button>
          <button 
          onClick={() => setColor("Brown")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "Brown" }}>
            Brown
          </button>

        </div>
      </div>

    </div>
  )
}

export default App

