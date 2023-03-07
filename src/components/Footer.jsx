import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdFacebook } from 'react-icons/md'
import { SlSocialInstagram } from 'react-icons/sl'
import { SiTiktok } from 'react-icons/si'
import { GrLinkedinOption } from 'react-icons/gr'
import { ImSpotify } from 'react-icons/im'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            {/* Phrase of Educamas */}
            <footer >
                <div className='flex justify-center items-center bg-yellow p-0 md:p-1 '>
                    <h1 className='mx-7 text-center text-lg md:text-2xl font-Poppins font-semibold text-light py-3'>La tecnología esta revolucionando nuestro presente, pero tu eres nuestro futuro</h1>
                </div>

                {/* Talk about the program */}
                <section className='bg-dark w-full md:grid md:grid-cols-3 py-14'>
                    <div className='mx-16 md:mx-24 flex flex-col gap-6 md:gap-16'>
                        <img src='https://i.ibb.co/j4GBFg6/programate-school-blancos-2.png' alt='programate-school'/>
                        <img src='https://raw.githubusercontent.com/MariaHerrera03/ImageBank/main/Progr%C3%A1mateSchool/educamas-blanco-y-negro.png' alt='Educamas'/>
                        <h2 className='text-center md:text-left pt-6 md:pt-12 text-yellow font-Nunito font-semibold'>Lorem ipsum dolor sit.</h2>
                    </div>
                    {/*about the program*/}
                    <div className='mx-16 md:mx-auto text-center md:text-left my-6 md:my-0'>
                        <h3 className='text-lg md:text-2xl font-Poppins font-semibold text-light pb-3'>Sobre el programa</h3>
                        <h4 className='text-sm text-light font-Nunito font-light pb-6 md:pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Eget sit amet tellus cras adipiscing enim. Ac orci phasellus egestas tellus rutrum. Eget arcu dictum varius duis.</h4>
                        <Link to="/Login">
                        <button className="flex mx-auto md:mx-0 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-light text-center text-light hover:text-yellow text-sm font-Poppins font-medium">Participa ya!</button></Link>
                    </div>
                    {/*icons and contact*/}
                    <div className='mx-16 md:mx-20 text-center md:text-left'>
                        <h3 className='text-lg md:text-2xl font-Poppins font-semibold text-light pb-3'>Contacto</h3>
                        <section className='flex justify-center md:justify-start items-center gap-4 pb-3'>
                            <BsFillTelephoneFill className='fill-light'/>
                            <h5 className='text-sm text-light font-Nunito font-light'>Cra. 13 #90-17</h5>
                        </section>
                        <section className='flex justify-center md:justify-start items-center gap-4 pb-10'>
                            <FaMapMarkerAlt className='fill-light'/>
                            <h5 className='text-sm text-light font-Nunito font-light'>311 450 8935</h5>
                        </section>
                        {/*social media icons*/}
                        <span className='flex justify-between'>
                            <MdFacebook className='fill-light scale-150'/>
                            <SlSocialInstagram className='fill-light scale-150'/>
                            <SiTiktok className='fill-light scale-150'/>
                            <GrLinkedinOption className='fill-light scale-150'/>
                            <ImSpotify className='fill-light scale-150'/>
                        </span>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer
