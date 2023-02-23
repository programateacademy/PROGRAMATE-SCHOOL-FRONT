import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export const Login = () => {
    return (
        <div className='h-full grid grid-rows-5 md:h-screen md:grid-rows-1 md:grid-cols-2'>
            <div className='row-span-1 bg-yellow'>
            </div>
            <div className='row-span-4 bg-light py-8 my-auto'>
                <h1 className='mx-12 pb-10 text-center text-yellow text-lg font-Poppins font-black uppercase'>¡Sigue educándote para el futuro!</h1>
                <div className='mx-12 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Usuario:</h3>
                    <input type='email' placeholder='correo@correo.edu.co' className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Contraseña:</h3>
                    <input type='password' placeholder='**********' className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    <AiOutlineEye className='fill-dark'/><AiOutlineEyeInvisible className='fill-dark'/>
                    <h5 className='pt-1 text-center text-dark text-xs font-Nunito italic'>Olvidaste tu contraseña, <a href='https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT'>recupérala aquí</a></h5>
                </div>
                <button className='flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-center text-light text-sm font-Poppins font-medium'>Ingresar</button>
                <h4 className='mx-20 pt-6 text-center text-dark text-sm font-Nunito'>¿No tiene una cuenta? <a href='https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT'>Ingresa aquí.</a></h4>
            </div>
        </div>
    )
}

export default Login