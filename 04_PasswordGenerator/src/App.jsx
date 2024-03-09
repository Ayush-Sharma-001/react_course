import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [Length, setLength] = useState(8);
  const [UseNumber, setUseNumber] = useState(false);
  const [UseCharacter, setUseCharacter] = useState(false);
  const [Password, setPassword] = useState();
  // useRef hook 

  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz"

    if (UseCharacter) str += "0123456789"
    if (UseNumber) str += "@#&$*!%?^_-+~=<>:{}"


    for (let i = 0; i < Length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [Length, UseCharacter, UseNumber, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()


    // we can also select particular number of characters 
    // passwordRef.current?.setSelectionRange(0,4) 

    window.navigator.clipboard.writeText(Password)
  }, [Password])



  useEffect(() => {
    PasswordGenerator() 
  }, [
    Length, UseCharacter, UseNumber, PasswordGenerator
  ])

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-[url(C:\Users\ayush\Desktop\React-course\RandomPass\src\assets\IMG_0124.PNG)] bg-center bg-no-repeat bg-cover '>


        <div className=' max-w-5xl mx-auto   px-20 py-2 text-orange-500 bg-gray-700  rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20
'>
          <h1 className='text-white text-center py-4 text-2xl'>
            Password generator
          </h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4  '>

            <input
              type='text'
              value={Password} 
              className='outline-none w-full py-1 px-3 '
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className='outline-none bg-blue-700 hover:bg-blue-600 text-white px-3 py-0.5 shrink-0'>
              copy
            </button>
          </div>
          <div className='flex flex-wrap text-sm gap-x-2 py-3'>
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={6}
                max={50}
                value={Length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }} 
              />
              <label >
                Length: {Length}
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={UseNumber}
                id='numberInput'
                onChange={() => {
                  setUseNumber((prev) => !prev)
                }}
              />
              <label>
                character
              </label>
            </div>
            <div className='flex items-center gap-x-1'>

              <input
                type='checkbox'
                defaultChecked={UseCharacter}
                id='characterInput'
                onChange={() => {
                  setUseCharacter((prev) => !prev)
                }}
              />
              <label>
                number
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

