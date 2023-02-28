import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdFacebook } from 'react-icons/md'
import { SlSocialInstagram } from 'react-icons/sl'
import { SiTiktok } from 'react-icons/si'
import { GrLinkedinOption } from 'react-icons/gr'
import { ImSpotify } from 'react-icons/im'

export const Footer = () => {
    return (
        <>
            {/* Phrase of Educamas */}
            <footer >
                <div className='flex justify-center items-center bg-yellow p-0 md:p-1 '>
                    <h1 className='text-2xl font-Poppins font-semibold text-light md:2xl '>La tecnología esta revolucionando nuestro presente, pero tu eres nuestro futuro</h1>
                </div>

                {/* Talk about the program */}
                <section className='  bg-dark md:flex  '>
                    <picture className='flex justify-center items-center flex-col p-4 md:grid md:justify-start  '>
                        <img className='w-44 md:w-2/3 ' src="https://i.ibb.co/j4GBFg6/programate-school-blancos-2.png" alt="programate-school" />
                        <img className='w-44 md:w-2/3' src="https://raw.githubusercontent.com/MariaHerrera03/ImageBank/main/Progr%C3%A1mateSchool/educamas-blanco-y-negro.png" alt="Educamas" />
                        <h2 className='text-yellow font-Poppins font-semibold lg:w-72'>Lorem ipsum dolor sit.</h2>
                    </picture>

                    {/*about the program*/}
                    <sub className='flex justify-center flex-col'>
                        <h3 className=' text-center text-lg text-light font-Poppins font-semibold relative '>Sobre el programa</h3>
                        <h4 className='relative left-1/4 text-sm w-56 text-light font-Poppins font-semibold md:w-2/4 md:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Eget sit amet tellus cras adipiscing enim. Ac orci phasellus egestas tellus rutrum. Eget arcu dictum varius duis .</h4>
                        <button className="bg-yellow text-light py-2 m-2 w-32 relative left-24 md:left-52">Participa ya!</button>

                    </sub>
                    <BsFillTelephoneFill />
                    <FaMapMarkerAlt /> 
                 
                </section>

            </footer>
        </>
    )
}

export default Footer