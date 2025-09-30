import React from 'react';
import logo from "../images/loogoo.png";

const Nav = () => {
    const links = ["Home","About","Portfolio","Clients"];
    return (
        <div className='fixed top-0 flex justify-between items-center bg-slate-900 shadow-lg w-screen h-20'>
            <a href="/">
                <img className='
                    w-24 
                    grayscale-75 
                    hover:grayscale-0 
                    hover:-translate-y-2 
                    duration-200
                    ' src={logo} alt="logo" />
            </a>
            <ul className='flex items-center gap-10 text-white h-full'>
                {
                    links.map((e,i)=>{
                        return(
                            <li key={i} className='
                            h-full
                            flex items-center
                            px-3
                            hover:cursor-pointer
                            hover:text-blue-300
                            duration-200
                            '><a href={`/${e==="Home"? "":e}`}>{e}</a></li>
                        )
                    })
                }
            </ul>
            <div className='mr-4 flex justify-center items-center gap-4'>
                <button className='
                    bg-slate-700
                    text-white
                    hover:bg-blue-600
                    hover:text-white
                    hover:cursor-pointer
                    duration-200
                    py-1
                    px-4
                    rounded-lg
                    shadow-lg
                    '>Contact me</button>
                <i className='
                    bx bx-sun
                    text-2xl
                    hover:cursor-pointer
                    duration-300
                    hover:text-white
                    text-gray-400
                    '></i>
            </div>
        </div>
    );
}

export default Nav;