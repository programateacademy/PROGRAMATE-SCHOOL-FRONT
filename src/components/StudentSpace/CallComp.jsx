import React from 'react'

const CallComp = () => {

    // function fillId(id) {

    //     const numerator = 0;
    //     const denominator = 6;
    //     const fraction = numerator + '/' + denominator;

    //     document.getElementById(id).innerHTML = fraction;

    //     const interval = setInterval(function () {

    //         numerator++;
    //         if (numerator > denominator) {
    //             clearInterval(interval);
    //         } else {
    //             fraction = numerator + '/' + denominator;
    //             document.getElementById(id).innerHTML = fraction;
    //         }

    //     }, 1000);
    // }

    // fillId('Numbers');

    return (
        <main className='shadow shadow-yellow/50 rounded p-3 md:w-5/12 lg:w-4/12'>
            <section className='grid grid-cols-1'>
                <h1 className='font-bold font-Poppins my-4'>Desarrollador Frontend Web Jr</h1>
                <figure className='flex flex-col justify-around items-center'>
                    <p className='font-nonito my-4'>Estado de la aplicación <span className='text-dark font-bold ml-10'>En progreso</span></p>
                    <p className='font-nonito my-4 row-start-3'>Etapas de la selección <span id='Numbers' className='text-dark font-bold ml-20'>2/6</span></p>
                <hr className='border-1 rounded border-yellow w-full my-10' />
                </figure>
                <figure className='flex flex-col justify-center items-center'>
                    <p className='font-nonito my-4'>Proceso de selección <span className='text-dark font-bold ml-16'>Activo</span></p>
                    <button className='bg-yellow shadow-md shadow-dark/50 hover:bg-dark w-32 h-8 rounded text-center text-light font-Poppins font-semibold my-6'>Continuar</button>
                </figure>
            </section>
        </main>
    )
}

export default CallComp