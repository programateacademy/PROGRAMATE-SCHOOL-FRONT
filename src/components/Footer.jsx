import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';
import { SlSocialInstagram } from 'react-icons/sl';
import { SiTiktok } from 'react-icons/si';
import { GrLinkedinOption } from 'react-icons/gr';
import { ImSpotify } from 'react-icons/im';
import { Link } from 'react-router-dom';


export const Footer = () => {
    return (
        <div id="footer">
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
                        {/* <h2 className='text-center md:text-left pt-6 md:pt-12 text-yellow font-Nunito font-semibold'>Lorem ipsum dolor sit.</h2> */}
                    </div>

                    {/*about the program*/}
                    <div className='mx-16 md:mx-auto text-center md:text-left my-6 md:my-0'>
                        <h3 className='text-lg md:text-2xl font-Poppins font-semibold text-light pb-3'>Sobre el programa</h3>
                        <h4 className='text-sm text-light font-Nunito font-light pb-6 md:pb-10'>Adquirirás las destrezas necesarias para desempeñarse como Desarrollador Web Frontend, a través de lenguajes de programación de vanguardia que permitirán páginas web y plataformas digitales innovadoras.</h4>
                        <Link to="/Login">
                        <button className="button hover:bg-light hover:text-dark">Participa ya!</button></Link>
                    </div>

                    {/*icons and contact*/}
                    <div className='mx-16 md:mx-20 text-center md:text-left'>
                        <h3 className='text-lg md:text-2xl font-Poppins font-semibold text-light pb-3'>Contacto</h3>
                        <section className='flex justify-center md:justify-start items-center gap-4 pb-3'>
                            <FaMapMarkerAlt className='fill-light'/>
                            <h5 className='text-sm text-light font-Nunito font-light'>Cra. 13 #90-17</h5>
                        </section>
                        <section className='flex justify-center md:justify-start items-center gap-4 pb-10'>
                            <BsFillTelephoneFill className='fill-light'/>
                            <a href='https://wa.me/573114508935?'>
                            <h5 className='text-sm text-light font-Nunito font-light'>311 450 8935</h5>
                            </a>
                        </section>

                        {/*social media icons*/}
                        <section className='flex justify-between'>
                        {/* Social network Facebook */}
                        <a href='https://www.facebook.com/programateacademy' target={'_blank'}>
                            <MdFacebook className='text-light text-3xl hover:scale-150 hover:text-yellow'/></a>
                            {/* Social network Instagram */}
                            <a href='https://www.instagram.com/somoseducamas/' target={'_blank'}>
                            <SlSocialInstagram className='text-light text-3xl hover:scale-150 hover:text-yellow'/></a>
                            {/* Social network tiktok */}
                            <a href='https://www.tiktok.com/@programateacademy' target={'_blank'}>
                            <SiTiktok className='text-light text-3xl hover:scale-150 hover:text-yellow'/></a>
                            {/* Social network Linkedin */}
                            <a href='https://www.linkedin.com/company/educam%C3%A1s/' target={'_blank'}>
                            <GrLinkedinOption className='text-light text-3xl hover:scale-150 hover:text-yellow'/></a>
                            {/* Social network Spotify */}
                            <a href='' target={'_blank'}>
                            <ImSpotify className='text-light text-3xl hover:scale-150 hover:text-yellow'/></a>
                        </section>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer
