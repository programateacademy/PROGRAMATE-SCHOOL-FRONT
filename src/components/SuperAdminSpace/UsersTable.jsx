import React from 'react';
import { BsFillPlusSquareFill } from 'react-icons/bs';

const UsersTable = () => {
    return (
        <div>
            
            {/* Header */}        
            <section className='md:pl-4 grid grid-row-2 md:grid-cols-2 text-dark'>
                <h1 className='my-4 font-bold text-xl font-Poppins md:my-8 md:text-xl lg:text-3xl'>
                    Tabla de usuarios registrados
                </h1>
                <h2 className='mb-4 flex items-center md:justify-end font-Poppins font-bold text-right'>Crear un usuario<BsFillPlusSquareFill className='scale-[1.5] md:scale-[2] ml-5 rounded-md'/></h2>
            </section>

            {/* Table */}
            <section className=''>
                <br/><br/><br/><br/><br/>
            </section>
        </div>
    )
}

export default UsersTable