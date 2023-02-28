import React from 'react'
import Call from '../components/StudentSpace/CallComp'

const StudentSpace = () => {
    return (
        <main className='container py-10'>
            {/* session convocations */}
            <section className='flex justify-around'>

                <h1 className='font-bold font-Poppins'>Convocatorias abiertas</h1>

                <figure className='flex flex-col justify-end items-center'>
                    <h3 className='font-Poppins font-semibold'>¿Tienes algún problema o dificultad con tu proceso?</h3>
                    
                    <p className=' font-Nunito py-4'>No dude en contáctarnos estaremos pendiente a darte una pronta solución</p>
                    <button className='bg-yellow shadow-md shadow-dark/50 hover:bg-dark w-32 h-8 rounded text-center text-light font-Poppins font-semibold'>Contáctanos</button>

                    <hr className='border-2 rounded border-yellow w-48' />
                    <p>Agradecemos a nuestros sponsor por brindar apoyo a este programa</p>
                    <img className=''
                        src={
                            "https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/brillas-color.png?raw=true"
                        }
                        alt="logo-brillas"
                    />

                </figure>
            </section>
            <Call />
        </main>
    )
}

export default StudentSpace