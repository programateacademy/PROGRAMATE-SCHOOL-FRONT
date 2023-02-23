import React from 'react'
import { TbTriangles } from "react-icons/tb";

export const Header = () => {
    return (
        // image 
        <div className='container bg-gradient-to-b from-slate-300 via-black to-neutral-900 h-full  '>
            <div className='flex flex-col  p-2 pt-56 sm: md: lg: xl: 2xl: '>
                <h3 className=' font-Nunito text-light text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  '>Convocatoria virtual</h3>
                <h1 className='font-Poppins font-bold  text-light text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  '>Aprende a desarrollar aplicaciones Web</h1>
                <TbTriangles className='text-yellow rotate-180 text-6xl m-auto my-2 sm:text-7xl md:text-8xl lg:text-9xl ' />
            </div>
            
            {/* <div className='w-0 h-0 border-t-[100px] border-l-[50px] border-r-[50px] border-r-transparent border-l-transparent border-yellow'></div> */}
        </div>
    )
}

export default Header