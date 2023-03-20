import React from 'react'

export const Header = () => {
    return ( 
        <section className=' bg-gradient-to-t from-slate-900 relative '>
            <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/foto-header.png?raw=true'} className='  absolute mix-blend-overlay object-cover h-full w-full '></img>
            <div className='flex flex-col p-2 justify-end pt-44 sm:h-[600px] lg:h-[800px] xl:h-[999px]  '>
                <h3 className=' font-Nunito text-light text-lg text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl '>Convocatoria virtual</h3>
                <h1 className='font-Poppins font-extrabold text-light text-2xl text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-8 md:leading-[4rem] lg:leading-[5rem] xl:leading-[6rem]'>Aprende a desarrollar<br/>aplicaciones Web</h1>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/icon-flecha.png?raw=true'} className='backdrop-saturate-200 pt-6 m-auto my-2 w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24' />
            </div>
        </section>
    )
}

export default Header