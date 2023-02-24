import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'

export const Footer = () => {
    return (
        <>
            {/* Phrase of Educamas */}
            <footer>
                <div className='flex justify-center items-center bg-yellow p-4 w-'>
                    <h1 className='text-2xl font-Poppins font-semibold text-light '>La tecnología esta revolucionando nuestro presente, pero tu eres nuestro futuro</h1>
                </div>
                {/* Talk about the program */}
                <section className=' w-30  bg-dark'>

                    <sub className=' '>
                        <h2 className='flex justify-center items-center text-xs text-light font-Poppins font-semibold' >Sobre el programa</h2>
                        <h3 className=' flex justify-center items-center  text-xs text-light font-Poppins font-semibold' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Eget sit amet tellus cras adipiscing enim. Ac orci phasellus egestas tellus rutrum. Eget arcu dictum varius duis .</h3>
                    </sub>
                 <BsFillTelephoneFill />
                   {/* <FaMapMarkerAlt/> */}
                </section>
            </footer>
        </>
    )
}

export default Footer