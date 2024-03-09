import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(null)



  const countIncrease = () => {

    if (counter < 20){
    counter = counter + 1
    setCounter(counter)
  }
}
  
    const countDecrease = () => {
      if(counter > 0 ){

      setCounter(counter - 1)
    }
  }

  return (
    <>

      <h1>Counter Using React</h1>
      <h2>
        Value {counter}
      </h2>
      <br />
      <button
        onClick={countIncrease}
      >
        Add Value

      </button>
      <button onClick={countDecrease}>
        Minus Value
      </button>

    </>
  )
}

export default App
