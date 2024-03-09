import React from 'react'
import { useState , useContext } from 'react'
import UseContext from '../context/UseContext'


function Login() {
const [Username, setUsername] = useState("");
const [password, setpassword] = useState("");

const {setuser} = useContext(UseContext)

const handleForm = (e) =>{
    e.preventDefault()
    // e.currentTarget.reset(); 
    // trying to reset the form content after submit clicked
    setuser({ Username , password})
    console.log(Username,password)
}
  return (
    <div>
        <h2>Login Page</h2>
        <input
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
         type="text"
          placeholder='Username' 
          />
          <br />
          <br />
        <input 
         value={password}
         onChange={(e) => setpassword(e.target.value)}
        type="text" 
        placeholder='password'
         />
         <br />
         <br />
        <button onClick={handleForm} >Submit</button>
    </div>
  )
}

export default Login