import React from 'react'
import { Link } from 'react-router-dom';

const Psychological = () => {
    return (
        <div>Psychological
            <Link to='/Guardian'>
                <button className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Atras</button>
            </Link>

            <Link className='flex justify-end' to='/Interest'>
                <button className='flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Siguiente</button>
            </Link> 
        </div>
    )
}

export default Psychological