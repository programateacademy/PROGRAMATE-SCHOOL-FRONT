import React from 'react'

export const Header = () => {
    return (
        // image 
        <section className='container bg-gradient-to-t from-slate-900  relative'>
            
            <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/foto-header.png?raw=true'} className=' object-cover absolute mix-blend-overlay h-full'></img>

            <div className='flex flex-col  p-2 pt-44 sm: md: lg: xl: 2xl:  '>
                <h3 className=' font-Nunito text-light text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  '>Convocatoria virtual</h3>
                <h1 className='font-Poppins font-bold  text-light text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>Aprende a desarrollar aplicaciones Web</h1>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/icon-flecha.png?raw=true'} className='backdrop-saturate-200 m-auto my-2 sm:text-7xl md:text-8xl lg:text-9xl ' />
            </div>
        </section>
    )
}

export default Header