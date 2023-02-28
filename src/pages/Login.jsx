import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


function LoginPerson() {
    //Hooks
    const [emailPerson, setEmailPerson] = useState("");
    const [passwordPerson, setPasswordPerson] = useState("");

    const navigator = useNavigate();
    const [showPassword, setShowPassword] = useState(false)

    function loginPerson() {
        var loginP = {
            emailPerson: emailPerson,
            passwordPerson: passwordPerson
        }
        console.log(loginP)
        axios.post("http://localhost:3000/api/login", loginP)
        .then(res => {
            alert("OK")
            // navigator("/")
        })
        .then(err => {console.log(err)})
    }


    return (
        <div className='relative'>
        <Link to='/'><img className='absolute w-1/6 left-6 top-4 hidden md:block' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} alt='Imagen personalizados'/></Link>
        <div className='h-screen grid grid-rows-3 md:grid-rows-1 md:grid-cols-2'>
            <div className='row-span-1 bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/foto-header.png?raw=true")] bg-cover bg-center'>
            </div>
            <div className='row-span-2 bg-light py-6 my-auto'>
                <h1 className='mx-12 sm:mx-12 md:mx-12 lg:mx-26 pb-3 text-center text-yellow text-lg sm:text-2xl md:text-2xl lg:text-3xl font-Poppins font-black uppercase'>¡Sigue educándote<br/>para el futuro!</h1>
                <Link to='/Singup'><img className='mx-auto w-[25%] pb-6 md:hidden' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} alt=''/></Link>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Usuario:</h3>
                    <input value={emailPerson} onChange={(e) => {setEmailPerson(e.target.value)}} type='email' placeholder='correo@correo.edu.co' className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 relative'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Contraseña:</h3>
                    <input value={passwordPerson}  onChange={(e) => {setPasswordPerson(e.target.value)}} type={showPassword ? 'text' : 'password'} placeholder='∗∗∗∗∗∗∗∗∗∗∗∗∗' className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                        <div className='absolute top-8 right-2' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiOutlineEye className='fill-dark'/> : <AiOutlineEyeInvisible className='fill-dark'/>}
                        </div>
                    <h5 className='pt-1 text-center text-dark text-xs font-Nunito italic '>Olvidaste tu contraseña, <a href='https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT' target='_blank'><b className='hover:text-red'>recupérala aquí</b></a></h5>
                </div>
                <button onClick={loginPerson} className='flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Ingresar</button>
                <h4 className='mx-20 md:mx-16 pt-6 text-center text-dark text-sm font-Nunito'>¿No tienes una cuenta?</h4>
                <Link to='/Singup'><h4 className='mx-20 md:mx-16 text-center text-dark text-sm font-Nunito hover:text-red'><b>Ingresa aquí</b>.</h4></Link>
            </div>
        </div>
        </div>
    )
}

export default LoginPerson