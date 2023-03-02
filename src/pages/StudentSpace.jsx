import React from 'react'
import Call from '../components/StudentSpace/CallComp'

const StudentSpace = () => {
    return (
        <main className='container py-10'>

            {/* session convocations */}

            <section className='flex'>
                <h1 className='font-bold font-Poppins text-md md:text-lg lg:text-3xl lg:col-start-1 py-10'>Convocatorias abiertas</h1>
                <Call />

                    <figure className='col-start-2 flex flex-col justify-center items-center '>
                        <h3 className='font-Poppins font-semibold m-2 mt-10 text-sm'>¿Tienes algún problema o dificultad con tu proceso?</h3>
                        <p className=' font-Nunito m-2'>No dude en contáctarnos estaremos pendiente a darte una pronta solución</p>
                        <button className='bg-yellow shadow-md shadow-dark/50 hover:bg-dark w-32 h-8 rounded text-center text-light font-Poppins font-semibold my-8'>Contáctanos</button>
                    </figure>

                    <figure className='flex flex-col items-center'>
                        <hr className='border-2 rounded border-yellow w-full my-4' />
                        <p className='font-Nunito m-3'>Agradecemos a nuestros sponsor por brindar apoyo a este programa</p>
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