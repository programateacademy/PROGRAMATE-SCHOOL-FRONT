import React from 'react';
import { useNavigate } from "react-router-dom";

const UnauthorizedWindow = () => {
    const navigate = useNavigate();

    return (
        <div className='h-screen bg-yellow/30'>
            <div className='h-full m-auto flex items-center'>
                <section className='w-10/12 lg:w-7/12 m-auto md:py-8 bg-light border-4 border-yellow rounded-lg shadow-lg shadow-yellow/50'>
                    <div className='px-7 pt-2 pb-4 md:pt-0 md:pb-0 font-Poppins font-bold text-md md:text-3xl text-dark text-center'>
                        <h1 className='md:pb-4'>¡No estás autorizado!</h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 justify-between'>
                            <div className='w-3/6 mx-auto py-2 flex md:col-span-1 items-center'>
                                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/Robotcito@300x.png?raw=true'} alt="Robotcio" />
                            </div>
                            <h2 className='mx-auto flex md:col-span-2 items-center text-xs font-medium md:text-lg lg:text-xl'>Vaya, no cuentas con las credenciales necesarias para acceder a esta sección</h2>
                        </div>
                        <div className='pt-4 px-7 md:px-24 flex justify-center md:justify-end'>
                            <button onClick={() => { navigate(-3); }} className="button md:text-2xl" >Regresar</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UnauthorizedWindow;
