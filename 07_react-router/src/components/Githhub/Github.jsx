    // import React, { useEffect ,useState } from 'react'


    // function Github() {
    //     const [data, setData] = useState([]);
    //     useEffect = (() => {
    //         fetch('https://api.github.com/users/Ayush-Sharma-001')
    //         .then(Response => Response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    //     })
    //   return (
    //     <div className='text-3xl  p-8 w-full h-96   
    //     text-center'>Github Folloiwers : {data.followers}</div>
    //   )
    // }

    // export default Github

    import React, { useEffect, useState } from 'react';
    import { useLoaderData } from 'react-router-dom';

    function Github() {
        const data = useLoaderData() // using loader can optomize the load time of the api fetching 



        // const [data, setData] = useState({});

        // useEffect(() => {
        //     fetch('https://api.github.com/users/Ayush-Sharma-001')
        //         .then(response => response.json())
        //         .then(data => {
        //             console.log(data);
        //             setData(data);
        //         })
        //         .catch(error => {
        //             console.error('Error fetching data:', error);
        //         });
        // }, []);  
        // useEffect is used and its working perfectly but to decrease the lag in api fetching we have use loader in react-router 

        return (
            <>
            <div className='text-3xl p-8  h-96 text-center mt-9'>
                    Followers: {data.followers}
                <div className='flex flex-col items-center justify-evenly p-9'>
                <img src={data.avatar_url} alt="Github profile picture" width={100} />
                <h1 className='text-3xl mt-5'>
                {data.name}
                </h1>
                </div>
                </div>
                <div className='w-full h-[50vh] bg-red-100'>
                    
                </div>
                
                
            </>
        );
    }

    export default Github;


    // GitInfoLoader is does the same work as above api fetching method but it is more optimized 
    export const GitInfoLoader = async () => {
        const response = await fetch('https://api.github.com/users/Ayush-Sharma-001')
        return response.json()
    }
 