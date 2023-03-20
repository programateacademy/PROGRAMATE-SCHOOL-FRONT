import React from 'react';
import { Link } from 'react-router-dom';

const SuccessfulRegistration = () => {
    return (
        <>
            <section className='flex items-center justify-center flex-col h-screen bg-yellow/30 '>
                <h1 className='text-2xl font-Poppins font-bold w-7/12'>Tu nombre de usuario y contraseña ha sido enviado al siguiente correo ejemplo@gmail.com</h1>
                <section className='absolute inset-3/4'>
                    <Link to="/Login">
                        <button className="flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium">Inicio</button>
                    </Link>
                </section>
            </section>
        </>
    );
};

export default SuccessfulRegistration;