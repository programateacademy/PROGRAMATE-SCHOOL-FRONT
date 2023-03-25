import React from 'react';

const HelpNotice = () => {
    return (
        <figure className='mx-auto md:py-6 grid grid-cols-1 gap-4 md:gap-5 justify-center ml-6' >

            {/* contact ad if the user has any doubt or problem */}
            <h1 className='mt-4 font-Poppins font-semibold mx-auto text-center text-lg md:text-xl lg:text-2xl'>¿Tienes algún problema o dificultad con tu proceso?</h1>
            <p className='font-Poppins text-sm font-medium text-center md:text-lg'>No dudes en contáctarnos estaremos pendientes a darte una pronta solución</p>
            <button className='button'>Contáctanos</button>
            <hr className="w-full mx-auto mb-7 mt-3  border-2 rounded border-yellow"/>
            <p className='font-Poppins text-sm font-medium text-center md:text-lg'>Agradecemos a nuestros sponsor por brindar apoyo a este programa</p>
            <img className="my-5 mx-auto" src={
                    "https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/brillas-color.png?raw=true"
                } alt="logo-brillas"/>
        </figure>
    )
}

export default HelpNotice