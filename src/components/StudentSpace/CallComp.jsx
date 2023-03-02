import React from 'react'

const CallComp = () => {
 

    return (
        <main className='shadow shadow-yellow/50 rounded p-3 md:w-5/12 lg:w-4/12'>
            <section className='flex flex-col items-center '>
                    <h1 className='font-bold font-Poppins my-4'>Desarrollador Frontend Web Jr</h1>
                <figure className='flex flex-col justify-around '>
                    <p className='font-nonito my-4'>Estado de la aplicación <span className='text-dark font-bold ml-10'>En progreso</span></p>
                    <p className='font-nonito my-4'>Etapas de la selección <span id='Numbers' className='text-dark font-bold ml-20'>2/6</span></p>
                </figure>
                <hr className='border-1 rounded border-yellow w-48 my-10' />
                <figure className='flex flex-col items-center'>
                    <p className='font-nonito my-4'>Proceso de selección <span className='text-dark font-bold ml-16'>Activo</span></p>
                    <button className='bg-yellow shadow-md shadow-dark/50 hover:bg-dark w-32 h-8 rounded text-center text-light font-Poppins font-semibold my-6'>Continuar</button>
                </figure>
            </section>
        </main>
    )
}

export default CallComp