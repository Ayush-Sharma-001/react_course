
import React, { useState, useRef, useEffect } from 'react';

export default function Home() {
    const [isCameraOn, setIsCameraOn] = useState(false);
    const videoRef = useRef(null);

    const toggleCamera = () => {
        if (!isCameraOn) {
            openCamera();
        } else {
            closeCamera();
        }
    };

    const openCamera = () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    console.log('Camera opened successfully:', stream);
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                    setIsCameraOn(true);
                })
                .catch(error => {
                    console.error('Error opening camera:', error);
                });
        } else {
            console.error('getUserMedia not supported on this browser');
        }
    };

    const closeCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
        setIsCameraOn(false);
    };
    

    useEffect(() => {
        return () => {
            closeCamera(); // Close camera when component unmounts
        };
    }, []);

    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative  text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-4 sm:py-24 mx-auto sm:px-6 lg:px-8 ">
                    <div className="max-w-full sm:mt-[-1vh] mt-6 space-y-8 text-center sm:ml-auto ">
                        <h2 className="text-4xl font-bold sm:text-[20vh] leading-none ">
                            Never lose your Productivity    
                            <span className="hidden sm:block text-xl mt-4 text-center">Stay Focused</span>
                        </h2>

                        <button
                            className="inline-flex text-white items-center px-12 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            onClick={toggleCamera}
                        >
                            {isCameraOn ? 'Stop Studying' : 'Start Studying'}
                        </button>
                    </div>
                </div>

                <div className=" w-full sm:my-2 sm:pt-1 pt-12   h-full mt-5">
                    {/* Video element to display camera output */}
                    <video
                        ref={videoRef}
                        autoPlay
                        className="w-screen h-[80vh] border-dotted border-4 border-red-500 p-2"
                        style={{ display: isCameraOn ? 'block' : 'none' }}
                    ></video>
                </div>
            </aside>


            <div className="grid place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://img.freepik.com/free-vector/hand-drawn-college-entrance-exam-illustration_23-2150359353.jpg?t=st=1715711431~exp=1715715031~hmac=3c70daaa2fbd10088edc451f52156fdaf5284c1bca59c7c8a7c0d08d44948f67&w=996" alt="image2" />
            </div>
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Study at your Pace</h1> 
        </div>
    );
}
