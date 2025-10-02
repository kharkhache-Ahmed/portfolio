import React from 'react';
import AhmedKharkhache from "../images/AhmedKharkhache.jpg";
import { TypeAnimation } from 'react-type-animation';
const Home = () => {
    return (
        <div className="h-screen grid grid-cols-3 w-screen p-10 container mx-auto gap-1">

            <div className="col-span-2 flex items-center justify-center">
                <h1 className='
                    welcomeText
                    text-white
                    text-5xl'>&lt;Hello, I'm <span className='text-6xl font-bold text-blue-700'>Ahmed Kharkhache</span>
                    <br /> 
                    <TypeAnimation
                        sequence={[
                            'i am a Full stack',
                            3000,
                            'i am a Front end',
                            2000,
                            'i am a Back end',
                            2000
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{ display: 'inline-block'}}
                        repeat={Infinity}
                        className='text-purple-500 font-semibold'
                    />
                    web developer/&gt;
                </h1>
            </div>

            <div className="col-span-1 flex justify-center items-center">
                <div className="w-48
                    h-48 
                    overflow-hidden 
                    rounded-full 
                    hover:shadow-2xl
                    border-8
                    border-purple-900
                    hover:shadow-purple-600
                    hover:border-2
                    duration-200
                    ease-linear
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

            <div className='h-full bg-blue-900 col-span-2'>

            </div>

            <div className='h-full bg-purple-900 col-span-1'>

            </div>
        </div>

    );
}

export default Home;
