import { React, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate, Link,  } from 'react-router-dom'
import defaultApi from '../apis/index'
import { useFormik } from 'formik'
import { loginSchema } from '../schemas/formSchema'
import swal from 'sweetalert2'

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const validationLogin = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            emailPerson: '',
            passwordPerson: '',
        },
        validationSchema: loginSchema,
        onSubmit
    })

    const navigator = useNavigate();
    const [showPassword, setShowPassword] = useState(false)

function loginPerson() {
    var loginP = {
        emailPerson: '',
        passwordPerson: '',
    };
    console.log(loginP);
    defaultApi
    .post("/login", loginP)
    .then((res) => {
        alert("OK");
        // navigator("/")
    })
    .then((err) => {
        console.log(err);
    })
    .catch((err) => {
        if (err.response.status === 401) {
            swal.fire({
                text: 'Usuario no encontrado',
                confirmButtonText: 'OK',
                timer: '3000',
                color: '#262425',
                confirmButtonColor: '#FBC209',
                background: '#FFFFFF',
            });
        } else if (err.response.status === 403) {
            swal.fire({
                text: 'Contraseña incorrecta',
                confirmButtonText: 'OK',
                timer: '3000',
                color: '#262425',
                confirmButtonColor: '#FBC209',
                background: '#FFFFFF',
            });
        }
    });
}

    return (
        <div className='relative'>
        <Link to='/'><img className='absolute w-1/6 left-6 top-4 hidden md:block' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} alt='Imagen personalizados'/></Link>
        <div className='h-screen grid grid-rows-3 md:grid-rows-1 md:grid-cols-2'>
            <div className='row-span-1 bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/foto-header.png?raw=true")] bg-cover bg-center'>
            </div>
            <form onSubmit={handleSubmit} autoComplete='off' className='last:row-span-2 bg-light py-6 my-auto'>
                <h1 className='mx-12 sm:mx-12 md:mx-12 lg:mx-26 pb-3 text-center text-yellow text-lg sm:text-2xl md:text-2xl lg:text-3xl font-Poppins font-black uppercase'>¡Sigue educándote<br/>para el futuro!</h1>
                <Link to='/Singup'><img className='mx-auto w-[25%] pb-6 md:hidden' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-negros.png?raw=true'} alt=''/></Link>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Usuario:</label>
                    <input 
                    value={values.emailPerson}
                    onChange={handleChange}
                    id='emailPerson'
                    type='text'
                    placeholder='correo@correo.edu.co'
                    onBlur={handleBlur}
                    className={errors.emailPerson && touched.emailPerson ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
                    {errors.emailPerson && touched.emailPerson && <p className='w-full px-1 text-red text-[0.65rem] font-Poppins'>{errors.emailPerson}</p>}
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 relative'>
                    <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Contraseña:</label>
                    <input 
                    value={values.passwordPerson}
                    onChange={handleChange}
                    id='passwordPerson'
                    type='text'
                    placeholder='∗∗∗∗∗∗∗∗∗∗∗∗∗'
                    onBlur={handleBlur}
                    className={errors.passwordPerson && touched.passwordPerson ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
                    {errors.passwordPerson && touched.passwordPerson && <p className='w-full px-1 text-red text-[0.65rem] font-Poppins'>{errors.emailPerson}</p>}
                        <button className='absolute top-8 right-2 px-1' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiOutlineEye className='fill-dark hover:fill-red'/> : <AiOutlineEyeInvisible className='fill-dark hover:fill-red'/>}
                        </button>
                    <h5 className='pt-1 text-center text-dark text-xs font-Nunito italic '>Olvidaste tu contraseña, <a href='https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT' target='_blank'><b className='hover:text-red'>recupérala aquí</b></a></h5>
                </div>
                <button type='submit' onClick={loginPerson} className='flex button md:text-base'>Ingresar</button>
                <h4 className='mx-20 md:mx-16 pt-6 text-center text-dark text-sm font-Nunito'>¿No tienes una cuenta?</h4>
                <Link to='/Singup'><h5 className='mx-20 md:mx-16 text-center text-dark text-sm font-Nunito'><b><button className='text-dark hover:text-red'>Regístrate aquí</button></b>.</h5></Link>
            </form>
        </div>
        </div>
    )
}

export default validationLogin