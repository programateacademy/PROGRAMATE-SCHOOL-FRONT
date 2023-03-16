import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function Modal({ visible, onClose }) {

    const handleOnClose = (e) => {
        if (e.target.id === 'box')
        onClose()
    }

    if (!visible) return null
    
    return (
        <div id='box' onClick={handleOnClose} className='fixed inset-0 bg-dark bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>
            <div className='w-10/12 md:w-6/12 h-3/4  my-auto bg-light border-2 border-yellow p-2 rounded-md drop-shadow-2xl overflow-y-auto'>
                <button onClick={onClose} className='w-full mx-auto flex justify-end'><AiFillCloseCircle size={20} className='fill-dark hover:fill-red'/></button>
                <h1 className='w-11/12 md:w-8/12 mx-auto mt-2 py-1 px-2 bg-dark rounded-md font-Poppins font-semibold text-center text-yellow text-base md:text-xl'> 
                    POLÍTICAS DE TRATAMIENTO DE INFORMACIÓN PERSONAL DE LA FUNDACIÓN  EDUCAMÁS
                </h1>
                <p className='w-11/12 mx-auto my-4  py-2 px-2  rounded-md font-Poppins text-justify text-xs md:text-sm text-dark'>
                    Este documento establece las políticas de Tratamiento de Información Personal de la
                    Fundación Educamás (de ahora en adelante Educamás), cumpliendo con las disposiciones
                    de la Ley 1581 de 2012 y el Decreto 1377 de 2013, y se describen los mecanismos por medio
                    de los cuales Educamás garantiza un adecuado manejo de los datos personales
                    recolectados y tratados en sus bases de datos, permitiendo a los titulares el ejercicio del
                    derecho de Hábeas Data.<br/> <br/>
                    <p className='font-Poppins font-semibold'>
                    ALCANCE:
                </p>
                    La Política de Protección de Datos Personales se aplicará a todas las Bases de Datos y/o
                    archivos que contengan Datos Personales, que sean objeto de tratamiento por EDUCAMÁS
                    como responsable y/o encargado del tratamiento de los mismos.<br /> <br />
                    El Tratamiento de los Datos Personales se deberá hacer en los términos, condiciones y
                    alcances mencionados en este documento, en la autorización del Titular y/o en aplicación
                    de las normas especiales cuando proceda alguna excepción legal para hacerlo. 

                </p> 
               <p>
                
               </p>
                <div className='grid grid-cols pb-4'>
                    {/* <button className='flex mx-auto px-6 py-1 bg-dark shadow-md shadow-dark/50 hover:bg-purple text-center text-yellow hover:text-light text-sm font-Poppins font-medium'>Aceptar</button> */}
                    <button onClick={onClose} className='flex mx-auto px-6 py-1 rounded bg-dark shadow-md shadow-dark/50 hover:bg-red text-center text-yellow hover:text-light font-Poppins font-medium'>Cancelar</button>
                </div>
            </div>
        </div>
    )
}