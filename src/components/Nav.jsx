import React from 'react';
import logo from "../images/loogoo.png";
const Nav = () => {
    const links = ["Home","About","Portfolio","Clients"];
    return (
        <div className='flex justify-between bg-white shadow-sm w-screen'>
            <a href="/">
                <img className='
                w-24 
                grayscale-75 
                hover:grayscale-0 
                hover:-translate-y-2 
                duration-200
                ' src={logo} alt="logo" />
            </a>
            <ul className='flex gap-10 mt-5'>
                {
                    links.map((e,i)=>{
                        return(
                            <li key={i} className='
                            px-3
                            hover:cursor-pointer
                            hover:border-4
                            hover:border-b-blue-900
                            hover:border-t-0
                            hover:border-x-0
                            hover:text-blue-900
                            duration-50
                            rounded-sm
                            '><a href={`/${e==="Home"? "":e}`}>{e}</a></li>
                        )
                    })
                }
            </ul>
            <div className='mt-2 mr-4'>
                <button className='
                bg-slate-50
                text-black
                hover:bg-blue-900
                hover:text-gray-50
                hover:cursor-pointer
                duration-200
                py-3 
                px-8
                rounded-lg
                shadow-sm
                '>Contact me</button>
            </div>
        </div>
    );
}

export default Nav;
