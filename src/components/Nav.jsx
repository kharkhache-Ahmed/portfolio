import React from 'react';
import logo from "../images/loogoo.png";

const Nav = () => {
    const links = ["Home","About","Portfolio","Clients"];
    return (
        <div className='fixed top-0 flex justify-between items-center bg-slate-900 shadow-lg w-screen h-20'>
            <a href="/">
                <img className='w-24 grayscale-75 hover:grayscale-0 hover:-translate-y-1 duration-200
                ' src={logo} alt="logo" />
            </a>
            <div className='flex items-center gap-10 text-white h-full'>
                {
                    links.map((e,i)=>{
                        return(
                            <a key={i} className='
                                group
                                px-3
                                hover:cursor-pointer
                                hover:text-blue-300
                                duration-200
                                relative
                                tracking-wide
                                h-full
                                flex
                                items-center
                                '
                                href={`/${e==="Home"? "":e}`}>{e}
                                <span className='
                                    absolute
                                    bottom-0
                                    left-0
                                    w-full
                                    h-[2px]
                                    bg-blue-500
                                    scale-x-0
                                    group-hover:scale-x-100
                                    origin-right
                                    group-hover:origin-left
                                    transition-transform
                                    ease-in-out
                                    duration-200
                                    '></span>
                            </a>
                        )
                    })
                }
            </div>
            <div className='mr-4 flex justify-center items-center gap-4'>
                <button className='
                    bg-slate-700
                    text-white
                    hover:bg-blue-600
                    hover:text-white
                    hover:cursor-pointer
                    duration-200
                    py-2
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