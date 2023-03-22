import React from 'react';
import { Link } from 'react-router-dom';

const EmailVerificationWindow = () => {
    return (
        <div className='h-screen bg-yellow/30'>
            <div className='h-full m-auto flex items-center'>
                <section className='w-10/12 md:w-8/12 m-auto grid grid-row justify-items-center py-8 md:py-16 bg-light border-4 border-yellow rounded shadow-lg shadow-yellow/50'>
                    <div className='px-7 md:px-24 grid content-end font-Nunito font-bold text-lg md:text-3xl text-dark text-center'>
                        <h1>¡Tu correo ha sido verificado exitosamente!</h1>
                        <h2 className='font-medium text-base md:text-xl pt-4'>Revisa tu correo nuevamente para conocer tus credenciales</h2>
                    </div>
                    <div className='pt-8 px-7 md:px-24 grid content-center md:content-end justify-self-end'>
                        <Link to="/Login"><button className='button md:text-2xl'>Ingresa</button></Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EmailVerificationWindow 