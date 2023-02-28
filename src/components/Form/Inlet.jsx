import React from 'react'

const Input = ({type, label, placeholder, name, error}) => {
    return (
        <div className='w-96'>
            <label className='pb-1.5 text-dark text-sm font-Nunito font-black' htmlFor={name}>{label}</label>
            <div>
                <input className='w-full px-1 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins' type={type} placeholder={placeholder} id={name} />
            </div>
            <div>{error}</div>
        </div>
    )
}

export default Input
