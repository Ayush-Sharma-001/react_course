import React, { useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState({
 "setup": "What goes after USA?",
  "punchline": "USB."
  });

const fetchData = async () => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

return (
  <div className='p-4 text-3xl w-full  h-screen '>
    <div className='bg-red-50 p-2 h-full rounded-lg flex justify-center items-center flex-col bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 '>  
    <h2 className='p-2 mt-3 border-b-2  absolute top-6 text-2xl font-medium   '>Random Joke Generator</h2>
    
    <div className='p-5 bg-orange-300 rounded-xl  shadow-xl outline-none'>

      <p className='p-3' > {JSON.stringify(data.setup)}</p>
      <p className='p-3'>{JSON.stringify(data.punchline, null, 2)}</p>

    </div>
  
  <button className='p-5 
     text-center  text-white bg-[#16A34A] rounded-xl  shadow-xl font-medium mt-6' onClick={fetchData}>Get a joke 😂</button>
    </div>
  </div>
);
}

export default MyComponent;
