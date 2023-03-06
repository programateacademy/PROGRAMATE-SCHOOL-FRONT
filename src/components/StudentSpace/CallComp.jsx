import React from 'react'

const CallComp = () => {

    function fillId(id) {

        const numerator = 0;
        const denominator = 6;
        const fraction = numerator + '/' + denominator;

        document.getElementById(id).innerHTML = fraction;

        const interval = setInterval(function () {

            numerator++;
            if (numerator > denominator) {
                clearInterval(interval);
            } else {
                fraction = numerator + '/' + denominator;
                document.getElementById(id).innerHTML = fraction;
            }

        });
    }

    fillId('Numbers');

    return (
        <main className='shadow shadow-yellow/50 rounded p-3 md:w-3/5'>
            <section className=''>
                <h1 className='font-bold font-Poppins my-4 md:text-2xl'>Desarrollador Frontend Web Jr</h1>
                <figure className='flex flex-col justify-around items-center'>
                    <p className='font-nonito my-4 md:my-4 md:text-lg'>Estado de la aplicación <span className='text-dark font-bold ml-10 md:ml-0'>En progreso</span></p>
                    <p className='font-nonito my-4 md:my-4 md:text-lg'>Etapas de la selección <span id='Numbers' className='text-dark font-bold ml-20 md:ml-18'>2/6</span></p>
                    <hr className='border-1 rounded border-yellow w-full my-10' />
                </figure>
                <figure className='flex flex-col justify-center items-center'>
                    <p className='font-nonito my-4 md:my-4 md:text-lg'>Proceso de selección <span className='text-dark font-bold ml-16 md:ml-19'>Activo</span></p>
                    <button className='bg-yellow shadow-md shadow-dark/50 hover:bg-dark w-32 h-8 rounded text-center text-light font-Poppins font-semibold my-6'>Continuar</button>
                </figure>
            </section>
        </main>
    )
}

export default CallComp