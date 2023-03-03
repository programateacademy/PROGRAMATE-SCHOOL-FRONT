import React from 'react'
import Call from '../components/StudentSpace/CallComp'

const StudentSpace = () => {
    return (
        <main className='container'>

            {/* session convocations */}

                <h1 className=' font-bold font-Poppins text-md md:text-3xl md:pt-10'>Convocatorias abiertas</h1>
            <section className='flex justify-around items-center gap-8'>
                <Call />
                <Call />
                <Call />


                <figure className='flex flex-col justify-center items-center md:col-start-4'>
                    <h3 className='font-Poppins font-semibold m-2 mt-10 text-sm md:text-xl'>¿Tienes algún problema o dificultad con tu proceso?</h3>
                    <p className=' font-Nunito m-2 md:text-lg'>No dude en contáctarnos estaremos pendiente a darte una pronta solución</p>
                    <button className='bg-yellow shadow-md shadow-dark/50 hover:bg-dark w-32 h-8 rounded text-center text-light font-Poppins font-semibold my-8 md:text-lg'>Contáctanos</button>


                    <hr className='border-2 rounded border-yellow w-full my-4 md:my-16' />
                    <p className='font-Nunito md:text-lg'>Agradecemos a nuestros sponsor por brindar apoyo a este programa</p>
                    <img className='my-10'
                        src={
                            "https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/brillas-color.png?raw=true"
                        }
                        alt="logo-brillas"
                    />
                </figure>

            </section>


        </main>
    )
}

export default StudentSpace