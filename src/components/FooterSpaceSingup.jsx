import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';
import { SlSocialInstagram } from 'react-icons/sl';
import { SiTiktok } from 'react-icons/si';
import { GrLinkedinOption } from 'react-icons/gr';
import { ImSpotify } from 'react-icons/im';


const FooterSpaceSingup = () => {
    return (
        <footer className='bg-dark grid grid-cols-1 justify-center items-center pb-6  md:grid-cols-3 md:pb-20 border-t-8 border-yellow'>
            <section className='justify-center items-center gap-6 py-7 pl-16 md:pl-32 lg:flex flex-cols-2 '>
                <img src='https://i.ibb.co/j4GBFg6/programate-school-blancos-2.png' alt='programate-school' width={200} /> <br />
                <img src='https://raw.githubusercontent.com/MariaHerrera03/ImageBank/main/Progr%C3%A1mateSchool/educamas-blanco-y-negro.png' alt='Educamas' />
            </section>

            <section className='text-center items-center gap-9'>
                <div className='mt-7 mx-24 md:mx-20'>
                    <h3 className='text-lg md:text-2xl font-Poppins font-semibold text-light pb-3'>Contacto</h3>
                </div>
                <article className='flex justify-center md:justify-center gap-4 items-center pb-3'>
                    <FaMapMarkerAlt className='fill-light' />
                    <h5 className='text-sm text-light font-Nunito font-light'>Cra. 13 #90-17</h5>
                </article>
                <article className='flex justify-center md:justify-center items-center gap-4 pb-3'>
                    <BsFillTelephoneFill className='fill-light' />
                    <a href='https://wa.me/573114508935?' target={'_blank'}>
                        <h5 className='text-sm text-light font-Nunito font-light'>311 450 8935</h5>
                    </a>
                </article>
            </section>

            <section>
                <section className='flex gap-5 justify-center items-center py-10'>
                    {/* Social network Facebook */}
                    <div className=''>
                        <a href='https://www.facebook.com/programateacademy' target={'_blank'}>
                            <MdFacebook className='text-light text-3xl hover:scale-150 hover:text-yellow' /></a>
                    </div>
                    {/* Social network Instagram */}
                    <div>
                        <a href='https://www.instagram.com/somoseducamas/' target={'_blank'}>
                            <SlSocialInstagram className='text-light text-3xl hover:scale-150 hover:text-yellow' /></a>
                    </div>
                    {/* Social network tiktok */}
                    <div>
                        <a href='https://www.tiktok.com/@programateacademy' target={'_blank'}>
                            <SiTiktok className='text-light text-3xl hover:scale-150 hover:text-yellow' /></a>
                    </div>
                    {/* Social network Linkedin */}
                    <div>
                        <a href='https://www.linkedin.com/company/educam%C3%A1s/' target={'_blank'}>
                            <GrLinkedinOption className='text-light text-3xl hover:scale-150 hover:text-yellow' /></a>
                    </div>
                    {/* Social network Spotify */}
                    <div>
                        <a href='' target={'_blank'}>
                            <ImSpotify className='text-light text-3xl hover:scale-150 hover:text-yellow' /></a>
                    </div>
                </section>
            </section>
        </footer>
    )
}

export default FooterSpaceSingup;
