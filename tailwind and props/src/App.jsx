
import { useState } from 'react'

import './App.css'
import Cards from './Components/Card'
import Test from './Components/Test';

function App() {
  const [UserName, setUserName] = useState("Ayush");

  let myObject = {
    name : "Ayush",
    age : "22"
  }


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-10' >Tailwind CSS {UserName} </h1>


      < Test   Test = "Success" someObj = {myObject} />

    <Cards username = "Ayushi" btn= "daba bhai" />
    <Cards username = "Bhavya" btn= "daba bhai" />
    <Cards username = "Maiyar" btn= "daba bhai" />

    </>
  )
}

export default App
