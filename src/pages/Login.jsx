import { React, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate, Link } from 'react-router-dom';
import defaultApi from '../apis/index';
import swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';

function LoginPerson() {
    //Hooks
    const [emailPerson, setEmailPerson] = useState("");
    const [passwordPerson, setPasswordPerson] = useState("");
    const navigator = useNavigate();
    const [showPassword, setShowPassword] = useState(false)


    function loginPerson() {
        var loginP = {
            emailPerson: emailPerson,
            passwordPerson: passwordPerson,
        };
        console.log(loginP);
        defaultApi
            .post("/auth/login", loginP)
            .catch((err) => {
                if (err.response.status === 401) {
                    swal.fire({
                        text: "Usuario no encontrado",
                        confirmButtonText: "OK",
                        timer: "3000",
                        color: "#262425",
                        confirmButtonColor: "#FBC209",
                        background: "#FFFFFF",
                    });
                } else if (err.response.status === 403) {
                    swal.fire({
                        text: "Contraseña incorrecta",
                        confirmButtonText: "OK",
                        timer: "3000",
                        color: "#262425",
                        confirmButtonColor: "#FBC209",
                        background: "#FFFFFF",
                    });
                }
            })
            .then((res) => {
                // swal.fire({
                //     text: "Ingreso exitoso",
                //     confirmButtonText: "OK",
                //     timer: "3000",
                //     color: "#262425",
                //     confirmButtonColor: "#FBC209",
                //     background: "#FFFFFF",
                // });
                const access_token = res.data.sessionToken;
                localStorage.setItem("token", access_token);

                const decodedToken = jwt_decode(localStorage.getItem("token"));

                console.log(decodedToken);

                if (decodedToken.profilePerson === "SuperAdmin") {
                    navigator("/Superadminspace");
                }
                if (decodedToken.profilePerson === "Admin") {
                    navigator("/Adminspace");
                }
                if (decodedToken.profilePerson === "Student") {
                    navigator("/Studentspace");
                }
            });
    }
    return (
        <div className='relative'>
            <Link to='/'><img className='absolute w-1/6 left-6 top-4 hidden md:block' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} alt='Imagen personalizados' /></Link>
            <div className='h-screen grid grid-rows-3 md:grid-rows-1 md:grid-cols-2'>
                <div className='row-span-1 bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/foto-header.png?raw=true")] bg-cover bg-center'>
                </div>
                <div className='row-span-2 bg-light py-6 my-auto'>
                    <h1 className='mx-12 sm:mx-12 md:mx-12 lg:mx-26 pb-3 text-center text-yellow text-lg sm:text-2xl md:text-2xl lg:text-3xl font-Poppins font-black uppercase'> A un click de <br /> cambiar tu futuro</h1>
                    <Link to='/Singup'><img className='mx-auto w-[25%] pb-6 md:hidden' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} alt='' /></Link>
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Usuario:</label>
                        <input value={emailPerson} onChange={(e) => { setEmailPerson(e.target.value) }} type='email' required placeholder='correo@correo.edu.co' className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    </div>
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 relative'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Contraseña:</label>
                        <input value={passwordPerson} onChange={(e) => { setPasswordPerson(e.target.value) }} type={showPassword ? 'text' : 'password'} required placeholder='∗∗∗∗∗∗∗∗∗∗∗∗∗' className='w-full pl-1 pr-8 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                        <button className='absolute top-8 right-2 px-1' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiOutlineEye className='fill-dark hover:fill-red' /> : <AiOutlineEyeInvisible className='fill-dark hover:fill-red' />}
                        </button>
                        <h5 className='pt-1 text-center text-dark text-xs font-Nunito italic '>Olvidaste tu contraseña, <a href='https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT' target='_blank'><b className='hover:text-red'>recupérala aquí</b></a></h5>
                    </div>
                    <button onClick={loginPerson} className='flex button md:text-base'>Ingresar</button>
                    <h4 className='mx-20 md:mx-16 pt-6 text-center text-dark text-sm font-Nunito'>¿No tienes una cuenta?</h4>
                    <Link to='/Singup'><h5 className='mx-20 md:mx-16 text-center text-dark text-sm font-Nunito'><b><button className='text-dark hover:text-red'>Regístrate aquí</button></b>.</h5></Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPerson;