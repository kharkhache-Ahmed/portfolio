import React, { useState } from 'react';
import logo from "../../images/loogoo.png";

const Nav = ({notDark,setNotDark}) => {

    const [hiddenToggle,setHiddenToggle] = useState(true);

    const links = ["Home","Skills","Projects","Experience"];

    const showLinks = links.map((e,i)=>{
        return(
            <a key={i} className={`
                group
                px-3
                hover:cursor-pointer
                hover:text-blue-500
                duration-200
                relative
                tracking-wide
                h-full
                flex
                items-center
                ${notDark&&"text-black"}
                `}
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
        )})

        const handleMobileNav = ()=>{
        setHiddenToggle(!hiddenToggle);
    }

    return (
        <>
        <div className=
            {`fixed
            top-0
            z-50
            flex
            justify-between
            items-center
            bg-slate-900/20
            shadow-md
            w-screen
            h-20
            duration-500
            max-[650px]:shadow-sm
            max-[650px]:h-15
            ${notDark&&"bg-white/20"}
            `}
            >
            <a href="/">
                <img className='
                    w-18
                    grayscale-75
                    hover:grayscale-0
                    hover:-translate-y-1
                    duration-200
                    max-[650px]:w-14
                    ' src={logo} alt="logo" />
            </a>

            {/* Desktop Navbar */}
            <div className=
                {`max-[800px]:hidden
                flex 
                items-center 
                gap-10 
                text-white 
                h-full`}>
                {
                    showLinks
                }
            </div>

            <div className='mr-4 flex justify-center items-center gap-4'>

                <button className={`
                    hover:bg-blue-600
                    hover:cursor-pointer
                    duration-200
                    border
                    border-gray-700
                    py-2
                    px-4
                    rounded-lg
                    shadow-md
                    max-[650px]:text-sm
                    max-[650px]:p-2
                    max-[650px]:hidden
                    ${notDark&&'text-black bg-white border hover:text-white'}
                    `}
                    >Contact me</button>

                <div className='flex justify-center items-center gap-4 mr-0 max-[650px]:mr-0 max-[800px]:mr-0'>
                    {/* Dark mode icon */}
                    <i  onClick={()=>{setNotDark(!notDark)}}
                    className={`
                        bx bx-${notDark?'moon bg-white border':'sun'}
                        text-2xl
                        hover:cursor-pointer
                        duration-300
                        hover:text-white
                        text-gray-400
                        hover:bg-slate-600/70
                        p-1
                        border
                        border-gray-600
                        bg-slate-800/70
                        rounded-md
                        max-[650px]:text-xl`}
                        ></i>

                    {/* Humberger icon */}
                    <div
                        onClick={handleMobileNav}
                        className='
                        group
                        hidden
                        max-[800px]:block
                        mr-4
                        max-[650px]:mr-0
                    '>
                        <i className={`
                            bxr 
                            bx-${hiddenToggle?"menu":"x"}
                            text-slate-400
                            text-2xl
                            border border-gray-600
                            duration-300
                            group-hover:cursor-pointer
                            group-hover:text-white
                            group-hover:bg-slate-600/70
                            p-1
                            bg-slate-800/70
                            rounded-md
                            max-[650px]:text-xl
                            ${notDark&&'text-black bg-white border hover:text-white'}
                            `}></i>
                    </div>
                </div>

            </div>
            
        </div>

        {/* Mobile Navbar */}

        <div id='mobileNav' onMouseLeave={handleMobileNav}
        className={`
            fixed
            top-20
            right-0
            z-50
            bg-slate-800
            shadow-xl
            rounded-bl-xl
            border
            border-black
            border-r-0
            h-fit
            w-1/2
            text-white
            p-8
            max-[650px]:top-15
            transform
            transition-all
            duration-500
            ease-out
            ${hiddenToggle ? 'translate-x-full opacity-0 pointer-events-none min-[800px]:hidden' : 'translate-x-0 opacity-100'}
            ${notDark&&'text-black bg-white'}
        `}>

            <div className='flex flex-col gap-5'>
                {showLinks}
            </div>

        </div>
        </>

    );
}

export default Nav;