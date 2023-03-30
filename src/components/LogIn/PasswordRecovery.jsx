import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Modal({ visible, onClose }) {

    const handleOnClose = (e) => {
        if (e.target.id === 'box')
            onClose()
    }

    if (!visible) return null

    return (
        <div id='box' onClick={handleOnClose} className='fixed inset-0 bg-dark bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>
            <div className='w-10/12 md:w-6/12 max-h-96 my-auto bg-light border-2 border-yellow p-2 rounded-md drop-shadow-2xl overflow-y-auto scrollbar scrollbar-track scrollbar-thumb'>
                <button onClick={onClose} className='w-full mx-auto flex justify-end'><AiFillCloseCircle size={20} className='fill-dark hover:fill-red' /></button>
                <h1 className='w-11/12 md:w-8/12 mx-auto mt-2 py-1 px-2 bg-dark rounded-md font-Poppins font-semibold text-center text-yellow text-base md:text-xl'>
                    Recuperación de contraseña
                </h1>
                <h3 className='w-11/12 mx-auto my-4  py-2 px-2  rounded-md font-Poppins text-center text-xs md:text-sm text-dark'>
                Para recuperar tu contraseña, por favor escribe tu correo electrónico en el siguiente campo y haz clic en el botón "enviar".
                </h3>
                <div className='px-8 md:px-20 pb-4 flex gap-2 justify-center'>
                    <label className='text-dark font-Poppins font-medium text-base'>Correo:</label>
                    <input placeholder='correo@correo.edu.co' type="text" className='px-1 text-dark/70 text-sm text-center font-Poppins font-semibold'/>
                </div>
                <div className='grid grid-cols pb-4'>
                    <button className='flex mx-auto px-6 py-1 rounded bg-dark shadow-md shadow-dark/50 hover:bg-purple text-center text-yellow hover:text-light font-Poppins font-medium'>Enviar</button>
                </div>
            </div>
        </div>
    );
};