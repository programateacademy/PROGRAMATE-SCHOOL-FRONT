import React from 'react';
import { Link } from 'react-router-dom';
import Robotcito from '../assets/img/Robotcito@300x.png'

const UnauthorizedWindow = () => {
    return (
        <div className='h-screen bg-yellow/30'>
            <div className='h-full m-auto flex items-center'>
                <section className='w-10/12 lg:w-7/12 m-auto md:py-16 bg-light border-4 border-yellow rounded-lg shadow-lg shadow-yellow/50'>
                    <div className='px-7 pt-2 md:pt-0 font-Poppins font-bold text-md md:text-3xl text-dark text-center'>
                        <h1>¡No estás autorizado!</h1>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className='flex justify-center items-center'>
                                <img className='scale-75' src={Robotcito} alt="Robotcio" />
                            </div>
                            <h2 className='flex items-center text-xs font-medium md:text-xl lg:text-3xl md:mt-16'>Vaya, no cuentas con las credenciales necesarias para acceder a esta sección</h2>
                        </div>
                        <div className='pt-4 lg:pt-0 px-7 md:px-24 flex justify-center md:justify-end'>
                            <Link to="/Login"><button className='button md:text-2xl mb-4 md:mb-0'>Regresar</button></Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UnauthorizedWindow;