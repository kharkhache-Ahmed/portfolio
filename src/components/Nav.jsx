import React from 'react';
import logo from "../images/loogoo.png";

const Nav = () => {
    const links = ["Home","About","Portfolio","Clients"];
    return (
        <div className='fixed top-0 flex justify-between bg-slate-900 shadow-lg w-screen'>
            <a href="/">
                <img className='
                w-24 
                grayscale-75 
                hover:grayscale-0 
                hover:-translate-y-2 
                duration-200
                ' src={logo} alt="logo" />
            </a>
            <ul className='flex gap-10 mt-5 text-white'>
                {
                    links.map((e,i)=>{
                        return(
                            <li key={i} className='
                            px-3
                            hover:cursor-pointer
                            hover:border-b-2
                            hover:border-b-blue-400
                            hover:text-blue-300
                            duration-50
                            rounded-sm
                            '><a href={`/${e==="Home"? "":e}`}>{e}</a></li>
                        )
                    })
                }
            </ul>
            <div className='mt-2 mr-4'>
                <button className='
                bg-slate-700
                text-white
                hover:bg-blue-600
                hover:text-white
                hover:cursor-pointer
                duration-200
                py-3 
                px-8
                rounded-lg
                shadow-lg
                '>Contact me</button>
            </div>
        </div>
    );
}

export default Nav;