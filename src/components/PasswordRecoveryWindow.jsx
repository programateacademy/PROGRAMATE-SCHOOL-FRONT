import React from 'react';
import { Link } from 'react-router-dom';

const PasswordRecoveryWindow = () => {

    return (
        <div className='h-screen bg-yellow/30'>
            <div className='h-full m-auto flex items-center'>
                <section className='w-10/12 lg:w-7/12 m-auto md:py-8 bg-light border-4 border-yellow rounded-lg shadow-lg shadow-yellow/50'>
                    <div className='px-7 pt-2 pb-4 md:pt-0 md:pb-0 font-Poppins font-bold text-md md:text-3xl text-dark text-center'>
                        <h1 className='md:pb-4'>¡Revisa tu correo electrónico!</h1>
                        <div className='grid justify-between'>
                            <h2 className='mx-auto flex md:col-span-2 items-center text-xs font-medium md:text-lg lg:text-xl'>Te hemos enviado las credenciales de ingreso</h2>
                        </div>
                        <div className='pt-4 px-7 md:px-24 flex justify-center'>
                            <Link to="/Login">
                                <button className="button md:text-2xl">Ingresar</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PasswordRecoveryWindow;
