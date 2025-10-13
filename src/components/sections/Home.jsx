import React from 'react';
import AhmedKharkhache from "../../images/AhmedKharkhache.jpg";
import { TypeAnimation } from 'react-type-animation';
import Vscode from '../Vscode';
const Home = ({notDark,setNotDark}) => {
    return (
        <div id='container' className=
            {`
            min-h-full
            w-screen
            p-4
            mx-auto
            pt-30
            flex
            justify-between
            duration-300
            gap-4
            max-[650px]:pt-25
            max-[650px]:flex
            max-[650px]:flex-col
            max-[650px]:justify-normal
            max-[650px]:gap-10
            max-[650px]:container
            max-[650]:mx-auto
            ${notDark?'bg-white':'bg-slate-900'}
            `}
            >
            <div id='leftSide' className='
                w-2/3 
                flex 
                flex-col 
                justify-around
                items-center
                max-[650px]:order-2
                max-[650px]:w-full
                max-[650px]:gap-4
                '>
                <div className="flex items-center justify-center">
                    <h1 className={`
                        welcomeText
                        max-[1000px]:text-3xl
                        max-[650px]:text-lg
                        text-4xl
                        text-shadow-lg
                        ${notDark?'text-black':'text-white'}
                        `}>&lt;
                        Hello, I'm 
                        <span className='
                            max-[1000px]:text-4xl
                            max-[650px]:text-xl
                            text-5xl
                            font-bold 
                            text-blue-700'> Ahmed Kharkhache</span>
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

                <div className='
                    w-4/5
                    flex
                    flex-col
                    max-[1000px]:text-sm
                    '>
                    <Vscode notDark={notDark} setNotDark={setNotDark}/>
                </div>

            </div>

            <div id='rightSide' className='
                flex
                flex-col
                w-1/3
                max-[650px]:order-1
                max-[650px]:w-full
                max-[650px]:gap-4
            '>

                <div className="
                    flex
                    justify-center 
                    items-center">
                    <div className="
                        max-[650px]:w-38
                        max-[650px]:h-38
                        max-[650px]:border-4
                        w-48
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

                <div className='
                h-full
                flex
                flex-col
                justify-center
                items-center
                gap-5
                text-slate-200
                '>
                    <button className='btn'>Contact me</button>
                    <button className='btn'>Check my CV</button>
                </div>
            
            </div>
        </div>

    );
}

export default Home;
