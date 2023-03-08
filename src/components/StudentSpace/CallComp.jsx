import { React, useState } from 'react'

const CallComp = () => {
    // const [activeBtn, setActiveBtn] = useState('Continuar')


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
    //     });
    // }

    // fillId('Numbers');


    // function apply() {
    //     var progress = 0;
    //     var applyButton = document.getElementById("applyButton");
    //     applyButton.innerHTML = "Continue (" + progress + "0/6)";

    //     applyButton.onclick = function () {
    //         if (progress < 6) {
    //             progress++;
    //             applyButton.innerHTML = "Continue (" + progress + "6/6)";
    //         } else {

    //             alert("Process complete!");
    //         }
    //     };
    // }

    //  onClick={() => setActiveBtn('Continuar')} className={activeBtn === '#' ? 'active' : ''} 

    return (
        <main className='m-auto w-11/12 shadow shadow-yellow/70 rounded'>
            <section className=''>
                <section className='mt-12 md:mt-0'>
                    <h1 className='font-bold font-Poppins pt-4 md:text-xl lg:text-2xl'>Desarrollador Frontend Web Jr</h1>

                    <figure className='md:flex md:flex-col md:justify-around md:items-center'>
                        <p className='font-nonito my-4 md:my-4 md:text-lg'>Estado de la aplicación <span className='text-dark font-bold ml-10 md:ml-0'>En progreso</span></p>
                        <p className='font-nonito my-4 md:my-4 md:text-lg'>Etapas de la selección <span id='Numbers' className='text-dark font-bold ml-20 md:ml-18'>0/6</span></p>
                    </figure>
                    <hr className='mx-4 border-1 rounded border-yellow my-10' />

                    <figure className='flex flex-col justify-center items-center'>
                        <p className='font-nonito md:my-4 md:text-lg'>Proceso de selección <span className='text-dark font-bold ml-16 md:ml-19'>Activo</span></p>
                        <button className='bg-yellow shadow-md shadow-dark/50 hover:bg-dark w-32 h-8 rounded text-center text-light font-Poppins font-semibold my-6'>Aplicar</button>
                    </figure>
                </section>

            </section>
        </main>
    )
}

export default CallComp