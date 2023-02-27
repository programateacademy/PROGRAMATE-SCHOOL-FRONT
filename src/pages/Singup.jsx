import React from 'react'

export const Singup = () => {

    return (
        <div className='relative'>
        <img className='absolute w-1/6 left-6 top-4 hidden md:block' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} alt='Imagen personalizados'/>
        <div className='h-full grid grid-rows-5 md:grid-rows-1 md:grid-cols-2'>
            <div className='row-span-1 bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/foto-header.png?raw=true")] bg-cover bg-center'>
            </div>
            <div className='row-span-4 bg-light py-10 my-auto'>
                <h1 className='mx-12 sm:mx-52 md:mx-12 lg:mx-26 pb-5 text-center text-yellow text-lg sm:text-2xl md:text-2xl lg:text-3xl font-Poppins font-black uppercase'>¡Da el primer paso<br/>y regístrate!</h1>
                <img className='mx-auto w-[25%] pb-6 md:hidden' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} alt='Imagen personalizados'/>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 grid grid-cols-2 gap-x-2'>
                    <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Nombres:</h3>
                    <input type='text' placeholder='1er nombre' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    <input type='text' placeholder='2do nombre' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 grid grid-cols-2 gap-x-2'>
                    <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Apellidos:</h3>
                    <input type='text' placeholder='1er apellido' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    <input type='text' placeholder='2do apellido' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Correo:</h3>
                    <input type='email' placeholder='correo@correo.edu.co' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>N° de Documento:</h3>
                    <input type='number' placeholder='123456789' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Institución:</h3>
                    <select id='instituciones' data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                        <option className='font-medium text-dark'>Selecciona una opción</option>
                        <option className='font-medium text-dark'>Uno</option>
                        <option className='font-medium text-dark'>Dos</option>
                        <option className='font-medium text-dark'>Tres</option>
                        <option className='font-medium text-dark'>Cuatro</option>
                    </select>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Edad:</h3>
                    <input type='number' placeholder='00' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 flex-row'>
                    <input type='checkbox' className='w-3 h-3 accent-red self-center'></input>
                    <label className='ml-2 text-center text-dark text-sm font-Nunito'>He leído y acepto los <a href='https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT' target='_blank' className='text-red'><b>términos y condiciones</b></a>.</label>
                </div>
                <button className='flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-center text-light text-sm font-Poppins font-medium'>Registrarse</button>
            </div>
        </div>
        </div>
    )
}

export default Singup