import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='relative'>
        <img className='absolute w-1/6 left-6 top-4' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} alt='Imagen personalizados'/>
        <div className='h-full grid grid-rows-3 md:h-screen md:grid-rows-1 md:grid-cols-2'>
            <div className='row-span-1 bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/foto-header.png?raw=true")] bg-cover bg-center'>
            </div>
            <div className='row-span-2 bg-light py-6 my-auto'>
                <h1 className='mx-12 sm:mx-52 md:mx-12 lg:mx-26 pb-10 text-center text-yellow text-lg sm:text-2xl md:text-2xl lg:text-3xl font-Poppins font-black uppercase'>¡Sigue educándote<br/>para el futuro!</h1>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Usuario:</h3>
                    <input type='email' placeholder='correo@correo.edu.co' className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 relative'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Contraseña:</h3>
                    <input type={showPassword ? 'text' : 'password'} placeholder='∗∗∗∗∗∗∗∗∗∗∗∗∗' className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                        <div className='absolute top-8 right-2' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiOutlineEye className='fill-dark'/> : <AiOutlineEyeInvisible className='fill-dark'/>}
                        </div>
                    <h5 className='pt-1 text-center text-dark text-xs font-Nunito italic'>Olvidaste tu contraseña, <a href='https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT'><b>recupérala aquí</b></a></h5>
                </div>
                <button className='flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-red text-center text-light text-sm font-Poppins font-medium'>Ingresar</button>
                <h4 className='mx-20 md:mx-16 pt-6 text-center text-dark text-sm font-Nunito'>¿No tiene una cuenta?<br/><a href='https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT'><b>Ingresa aquí.</b></a></h4>
            </div>
        </div>
        </div>
    )
}

export default Login