import React from 'react';
import AhmedKharkhache from "../images/AhmedKharkhache.jpg";
const Home = () => {
    return (
        <div className="h-screen grid grid-cols-3 w-screen">
            <div className="col-span-2 flex items-center justify-center">
                <h1 className='
                    text-blue-600
                    text-5xl'>Hello, I'm <span className='text-6xl'>Ahmed Kharkhache</span> <br /> i am a Full stack web developer</h1>
            </div>
            <div className="col-span-1 flex justify-center items-center">
                <div className="w-48
                    h-48 
                    overflow-hidden 
                    rounded-full 
                    hover:shadow-2xl
                    hover:shadow-blue-600
                    duration-300
                    shadow-lg">
                <img
                    className="
                    hover:scale-105
                    duration-300
                    object-cover
                    w-full
                    h-full"
                    src={AhmedKharkhache}
                    alt="road1"
                />
                </div>
            </div>
        </div>

    );
}

export default Home;
