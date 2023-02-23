import React from 'react'
import { CgBoy } from "react-icons/cg"

const Requirements = () => {
    return (
        <div className='mx-3'>
            <h2 className=' font-Poppins text-dark  font-bold '>
                ¿Cuales son los requerimientos para participar?
            </h2>
            <section className='m-auto sm:flex items-center md:grid grid-cols-4 gap-10'>
                {/* Imagen del mokups remplazar con imagenes */}
                <div className='flex justify-center sd:flex items-center flex-col md:'>
                    <p>
                        <CgBoy className='text-9xl' />
                    </p>
                    <p className='text-center font-Nunito sm:'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis consequuntur dolorum debitis id a laboriosam libero amet
                    </p>
                </div>
                {/* Imagen del mokups remplazar con imagenes */}
                <div className='flex justify-center sm:flex flex-col md:row-span-5'>
                    <p>
                        <CgBoy className='text-9xl' />
                    </p>
                    <p className='text-center font-Nunito sm:text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis consequuntur dolorum debitis id a laboriosam libero amet
                    </p>
                </div>

                {/* Imagen del mokups remplazar con imagenes */}
                <div className='flex justify-center md:flex flex-col'>
                    <p>
                        <CgBoy className='text-9xl' />
                    </p>
                    <p className='text-center font-Nunito sm:text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis consequuntur dolorum debitis id a laboriosam libero amet
                    </p>
                </div>

                {/* Imagen del mokups remplazar con imagenes */}
                <div className='flex justify-center md:flex flex-col'>
                    <p>
                        <CgBoy className='text-9xl' />
                    </p>
                    <p className='text-center font-Nunito sm:flex flex-col md:row-span-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis consequuntur dolorum debitis id a laboriosam libero amet
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Requirements