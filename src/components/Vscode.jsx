import React from 'react';

const Vscode = ({notDark,setNotDark}) => {
    return (
        <>

        {/* Top side of vsCode style */}
        <div className={`
            rounded-t-xl
            flex
            items-center
            gap-2
            px-4
            h-8
            w-full 
            bg-gray-950/70`}>
            <span className='bg-red-500 vsCodeCircle'></span>
            <span className='bg-yellow-500 vsCodeCircle'></span>
            <span className='bg-green-500 vsCodeCircle'></span>
            <span className='text-sm'>My story</span>
        </div>

        {/* vsCode Divider line style */}
        
        <div className='
            h-[1px]
            w-full
            bg-white/30
        '></div>

        {/* Body of vscode style */}

        <div className='
            shadow-xl
            w-full
            bg-slate-950/70
            rounded-b-xl
            p-4
        '>
            <p className='h-full font-semibold text-white' >
                <span className='text-red-400'>
                    const </span>
                aboutMe <span className='text-green-500'>
                =</span> <span
                className='text-cyan-300'
                >
                " I'm Ahmed Kharkhache, a Full Stack Web Developer driven by a passion for creating clean, efficient, and visually engaging web solutions. I work across the stack — building dynamic front-ends with React and Tailwind CSS, and powerful back-ends using Node.js, Express, or Laravel. I love turning ideas into functional, high-performing applications that deliver real value and seamless user experiences. "
                </span> ;
            </p>
        </div>

        </>
    );
}

export default Vscode;
