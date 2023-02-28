import React from 'react'
import Modal from '../components/Modal'
import { useState } from 'react'

export const Singup = () => {

    const [showModal, setShowModal] = useState(false)

    const handleOnClose = () => setShowModal(false)

    return (
        <div className='h-full grid grid-rows-5 md:grid-rows-1 md:grid-cols-2'>
            <div className='row-span-1 bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoOCHO_50.png?raw=true")] bg-cover bg-center grid'>
                <div className='w-7/12 sm:w-5/12 md:w-9/12 m-auto'>
                    <img className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'}/>
                </div>
            </div>
            <div className='row-span-4 bg-light py-6 my-auto'>
                <h1 className='mx-12 sm:mx-52 md:mx-12 lg:mx-26 pb-5 text-center text-yellow text-lg sm:text-2xl md:text-2xl lg:text-3xl font-Poppins font-black uppercase'>¡Da el primer paso<br/>y regístrate!</h1>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 grid grid-cols-2 gap-x-2'>
                    <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Nombres:</h3>
                    <input type='text' placeholder='1er nombre' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    <input type='text' placeholder='2do nombre' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 grid grid-cols-2 gap-x-2'>
                    <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Apellidos:</h3>
                    <input type='text' placeholder='1er apellido' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    <input type='text' placeholder='2do apellido' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Correo:</h3>
                    <input type='email' placeholder='correo@correo.edu.co' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>N° de Documento:</h3>
                    <input type='number' placeholder='123456789' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Institución:</h3>
                    <select id='instituciones' data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                        <option className='font-medium text-dark'>Selecciona una opción</option>
                        <option className='font-medium text-dark'>Uno</option>
                        <option className='font-medium text-dark'>Dos</option>
                        <option className='font-medium text-dark'>Tres</option>
                        <option className='font-medium text-dark'>Cuatro</option>
                    </select>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Edad:</h3>
                    <input type='number' placeholder='00' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                </div>
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 flex flex-row justify-center'>
                    <input type='checkbox' className='w-3 h-3 accent-red self-center'></input>
                    <label className='ml-2 text-center text-dark text-sm font-Nunito'>He leído y acepto los <button onClick={() => setShowModal(true)} className='text-red'><b>términos y condiciones</b></button>.</label>
                    <Modal onClose={handleOnClose} visible={showModal}/>
                </div>
                <button className='flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Registrarse</button>
            </div>
        </div>
    )
}

export default Singup