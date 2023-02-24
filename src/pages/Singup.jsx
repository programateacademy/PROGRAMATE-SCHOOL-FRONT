import React from 'react'

export const Singup = () => {

    return (
        <div className='relative'>
        <img className='absolute w-1/6 left-6 top-4' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} alt='Imagen personalizados'/>
        <div className='h-full grid grid-rows-3 md:grid-rows-1 md:grid-cols-2'>
            <div className='row-span-1 bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/foto-header.png?raw=true")] bg-cover bg-center'>
            </div>
            <div className='row-span-2 bg-light py-6 my-auto'>
                <h1 className='mx-12 sm:mx-52 md:mx-12 lg:mx-26 pb-5 text-center text-yellow text-lg sm:text-2xl md:text-2xl lg:text-3xl font-Poppins font-black uppercase'>¡Da el primer paso<br/>e inscribete!</h1>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 grid grid-cols-2 gap-x-2'>
                    <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Nombres:</h3>
                    <input type='text' placeholder='primer nombre' className='px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    <input type='text' placeholder='segundo nombre' className='px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 grid grid-cols-2 gap-x-2'>
                    <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Apellidos:</h3>
                    <input type='text' placeholder='primer apellido' className='px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    <input type='text' placeholder='segundo apellido' className='px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Correo:</h3>
                    <input type='email' placeholder='correo@correo.edu.co' className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>N° de Documento:</h3>
                    <input type='number' placeholder='123456789' className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Institución:</h3>
                    <input type='email' placeholder='' className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Edad:</h3>
                    <input type='number' placeholder='00' className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <button className='flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-center text-light text-sm font-Poppins font-medium'>Registrarse</button>
            </div>
        </div>
        </div>
    )
}

export default Singup