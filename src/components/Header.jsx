import React from 'react'
import { TbTriangles } from "react-icons/tb";

export const Header = () => {
    return (
        // image 
        <section className='//container// bg-header  bg-no-repeat bg-cover bg-center  '>
            <div className='  color-gradient-to-b from-slate-300 via-black to-neutral-900 mx-auto opacity-50 '></div>
            <div className=' '></div>
            <div className='flex flex-col  p-2 pt-44 sm: md: lg: xl: 2xl:'>
                <h3 className=' font-Nunito text-light text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  '>Convocatoria virtual</h3>
                <h1 className='font-Poppins font-bold  text-light text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>Aprende a desarrollar aplicaciones Web</h1>
                <TbTriangles className='text-yellow rotate-180 text-5xl m-auto my-2 sm:text-7xl md:text-8xl lg:text-9xl ' />
            </div>
        </section>
    )
}

export default Header