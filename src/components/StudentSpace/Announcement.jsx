import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultApi from "../../apis/index";
import jwt_decode from "jwt-decode";

const Announcement = () => {

    const navigate = useNavigate()

    const decodedToken = jwt_decode(localStorage.getItem("token"))

    const idPerson = decodedToken._id

    const [dataOpenAnnoun, setDataOpenAnnoun] = useState([])

    useEffect(() => {
        defaultApi
            .get("/openannouncements", idPerson)
            .then(res => {
                console.log(res.data)
                setDataOpenAnnoun(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <main>
            {/* Header */}
            <section className='md:pl-4 text-dark'>
                <h1 className='my-4 font-bold text-xl font-Poppins text-center md:text-left md:my-8 md:text-xl lg:text-3xl'>
                    Convocatorias abiertas
                </h1>
            </section>

            {/* Announcements cards */}

            {dataOpenAnnoun.map((item) => {
                console.log()

                function buttonfunction() {
                    localStorage.setItem('idAnnouncement', item._id)
                    navigate('/Register/Student/')
                }

                {/* este li es quien contiene el indice para poder iterar a todos los elementos */ }
                return (

                    <section key={item._id} className='px-4 grid md:grid-cols-2 justify-center gap-8'>
                        <div className='bg-light shadow-md shadow-yellow/50 border-[1px] border-yellow/50 rounded'>
                            <h2 className='p-4 font-semibold font-Poppins text-dark text-lg'>Desarrollador Frontend Web Jr</h2>

                            <label className='hidden'>{item._id}</label>
                            <h2 className='p-4 font-semibold font-Poppins text-dark text-lg'>{item.nameAnnouncement}</h2>

                            {/* ... */}
                            <figure className='px-4 pb-4 flex gap-2'>
                                <label className='w-full text-dark font-Poppins font-medium text-base'>Estado de la aplicación</label>
                                <input placeholder='En progreso' type="text" name="task" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold' />
                            </figure>

                            {/* selection stages */}
                            <figure className='px-4 pb-4 flex gap-2'>
                                <label className='w-full text-dark font-Poppins font-medium text-base'>Etapas de selección</label>
                                <label className='w-full text-dark font-Poppins font-medium text-base'>{item.descriptionAnnouncement}</label>
                                <input placeholder='40%' type="text" name="task" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold' />
                            </figure>
                            <hr className="mx-auto mb-6 mt-2 w-11/12 border-[1px] rounded border-yellow border-dotted" />

                            {/* selection process */}
                            <figure className='px-4 pb-4 flex gap-2'>
                                <label className='w-full text-dark font-Poppins font-medium text-base inline-block'>Proceso de selección</label>
                                <label className='w-full text-dark font-Poppins font-medium text-base inline-block'>{item.placesAnnouncement}</label>
                                <input placeholder='Activo' type="text" name="task" className='w-full mx-auto px-1 text-dark/70 text-sm font-Poppins font-semibold' />
                            </figure>

                            {/* button to apply or continue */}
                            <section className='mx-auto flex justify-center px-4 pt-6 pb-5 gap-8'>
                                <button onClick={buttonfunction} className='px-6 py-1 rounded bg-dark shadow-md shadow-dark/50 hover:bg-yellow text-center text-light hover:text-dark text-sm md:text-medium font-Poppins font-semibold'>Aplicar</button>
                            </section>
                        </div>
                    </section>
                )
            })}
        </main>
    );
}

export default Announcement