import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function Modal({ visible, onClose }) {

    const handleOnClose = (e) => {
        if (e.target.id === 'box')
        onClose()
    }

    if (!visible) return null
    
    return (
        <div id='box' onClick={handleOnClose} className='fixed inset-0 bg-dark bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>
            <div className='w-10/12 md:w-6/12 h-3/4  my-auto bg-light border-2 border-yellow p-2 rounded-md drop-shadow-2xl overflow-y-auto'>
                <button onClick={onClose} className='w-full mx-auto flex justify-end'><AiFillCloseCircle size={20} className='fill-dark hover:fill-red'/></button>
                <h1 className='w-11/12 md:w-8/12 mx-auto mt-2 py-1 px-2 bg-dark rounded-md font-Poppins font-semibold text-center text-yellow text-base md:text-xl'> 
                Términos y Condiciones
                </h1>
                <p className='w-11/12 mx-auto my-4  py-2 px-2  rounded-md font-Poppins text-justify text-xs md:text-sm text-dark'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sagittis luctus dis facilisi odio aliquet integer cursus, enim dapibus etiam cum molestie tristique. Semper augue hac cursus aliquam rhoncus gravida facilisi litora bibendum, tristique vehicula ornare mauris tincidunt nam aptent orci libero molestie, integer quam mollis pharetra nunc montes erat mus. Sollicitudin dictum habitant cursus lectus aliquet arcu neque tristique hendrerit, egestas vitae netus rhoncus magnis interdum himenaeos ornare quam consequat, nostra dignissim cras leo molestie vivamus convallis lobortis.<br/> <br/>

                    Fringilla cum nostra integer litora hendrerit euismod orci phasellus, erat nullam duis at taciti quam mi. Varius conubia nec sociis nascetur fermentum interdum ultrices, eros porttitor nibh cursus fringilla hendrerit eu, condimentum pharetra facilisi congue eleifend mollis. Dictumst arcu sed tempor pretium dui elementum accumsan mollis, nec nunc dignissim nisi orci phasellus consequat blandit.
                </p>
                <div className='grid grid-cols pb-4'>
                    {/* <button className='flex mx-auto px-6 py-1 bg-dark shadow-md shadow-dark/50 hover:bg-purple text-center text-yellow hover:text-light text-sm font-Poppins font-medium'>Aceptar</button> */}
                    <button onClick={onClose} className='flex mx-auto px-6 py-1 rounded bg-dark shadow-md shadow-dark/50 hover:bg-red text-center text-yellow hover:text-light font-Poppins font-medium'>Cancelar</button>
                </div>
            </div>
        </div>
    )
}