import { React, useState } from 'react'
import { Link } from 'react-router-dom'


    function StudentA() {
        var Student = {
            name1Person: name1Person,
            name2Person: name2Person,
            lastname1Person: lastname1Person,
            lastname2Person: lastname2Person,
            Birthdate: Birthdate,
            agePerson: agePerson,
            Gender: Gender,
            documentPerson: documentPerson,
            institutionPerson: institutionPerson,
            course: course,
            sena: sena,
            Availability: Availability,
            emailPerson: emailPerson,
            Phone: Phone,
            PhoneTwo: PhoneTwo
        }
        console.log(Student)
    }

    return (

        < div >
            <div className='flex h-72 '>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoTRES.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className='flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>
            {/* form start text */}

            <div>
                <h3 className=' font-Poppins font-semibold flex justify-center p-3'>
                    Por favor diligencia estas preguntas. Para nosotros son muy importantes, ya que esta será la primera forma de conocerte.
                </h3>
            </div>

            {/* start of form */}
            <div className=''>

                <div className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4'>
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-4 grid grid-cols-2 gap-x-2'>
                        <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Nombres:</h3>
                        <input value={name1Person} onChange={(e) => { setName1Person(e.target.value) }} type='text' placeholder='1er nombre' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                        <input value={name2Person} onChange={(e) => { setName2Person(e.target.value) }} type='text' placeholder='2do nombre' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    </div>
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 grid grid-cols-2 gap-x-2'>
                        <h3 className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>Apellidos:</h3>
                        <input value={lastname1Person} onChange={(e) => { setLastname1Person(e.target.value) }} type='text' placeholder='1er apellido' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                        <input value={lastname2Person} onChange={(e) => { setLastname2Person(e.target.value) }} type='text' placeholder='2do apellido' className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    </div>

                    {/* the birth input with the id BIRTHDATE */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Fecha de nacimiento:</label>
                        <input
                            type="date"
                            className="dark:bg-dark-bg mt-1 block w-full rounded border-2 border-yellow text-sm dark:border-yellow dark:text-dark dark:[color-scheme:light] p-1 focus:border-red">
                        </input>
                    </div>

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Edad:</h3>
                        <input value={agePerson} onChange={(e) => { setAgePerson(e.target.value) }} type='number' placeholder='00' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    </div>

                    {/* the birth input with the id Gender */}
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu género?</h3>
                        <select 
                        id='Gender'
                            value={Gender} onChange={(e) => { setGender(e.target.value) }} type='text' placeholder='Genero'
                            data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                            <option className='font-medium text-dark'>
                                Selecciona una opción </option>
                            <option className='font-medium text-dark'>
                                Femenino </option>
                            <option className='font-medium text-dark'>
                                Masculino </option>
                            <option className='font-medium text-dark'>
                                Otro </option>
                        </select>
                    </div>
                    {/* the document input with the options it gives */}
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Tipo de documento</h3>
                        <select id='Document'
                            data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                            <option className='font-medium text-dark'>
                                Selecciona una opción </option>
                            <option className='font-medium text-dark'>
                                Cédula de Ciudadania </option>
                            <option className='font-medium text-dark'>
                                Cédula de extranjería </option>
                            <option className='font-medium text-dark'>
                                Tarjeta de identidad </option>
                            <option className='font-medium text-dark'>
                                Pasaporte </option>
                            <option className='font-medium text-dark'>
                                PEP </option>
                            <option className='font-medium text-dark'>
                                PTP </option>
                        </select>
                    </div>

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>N° de Documento:</h3>
                        <input value={documentPerson} onChange={(e) => { setDocumentPerson(e.target.value) }} type='number' placeholder='123456789' className='w-full px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'></input>
                    </div>

                    {/* the break line in the form */}
                    <hr className=" border-2 border-yellow rounded w-full max-w-7xl flex justify-center items-center md:mx-6 md:col-span-2" />

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Institución:</h3>
                        <select value={institutionPerson} onChange={(e) => { setInstitutionPerson(e.target.value) }} id='instituciones' data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                            <option className='font-medium text-dark'>Selecciona una opción</option>
                            <option className='font-medium text-dark'>IE El Jardín - Ibagué</option>
                            <option className='font-medium text-dark'>El Olivo School - Santa Marta</option>
                            <option className='font-medium text-dark'>Colegio Integrada La Candelaria</option>
                            <option className='font-medium text-dark'>Técnica Agropecuaria Luruaco - Atlantico</option>
                            <option className='font-medium text-dark'>Colegio Campo de la Cruz - Atlantico</option>
                        </select>
                    </div>

                    {/* the birth input with the id Course */}
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Que grado estas cursando Actualmente?</h3>
                        <select id='Course'
                        value={course} onChange={(e) => { setCourse(e.target.value) }}
                            data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                            <option className='font-medium text-dark'>
                                Selecciona una opción </option>
                            <option className='font-medium text-dark'>
                                11° </option>
                            <option className='font-medium text-dark'>
                                Otro </option>
                        </select>
                    </div>

                    {/* the birth input with the id Sena */}
                    <div 
                    value={sena} onChange={(e) => { setSena(e.target.value) }}
                    className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Te encuentras cursando SENA u Horas sociales?</h3>
                        <label className='flex flex-row font-Nunito'>
                            <input
                                type="radio"
                                id="sena"
                                name="sena"
                                value="Yes"
                                className="accent-red
                                    focus:accent-yellow" />
                            Si
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="sena"
                                name="sena"
                                value="No"
                                className="accent-red
                                    focus:accent-yellow"
                            />
                            No
                        </label>
                    </div>

                    {/* the birth input with the id Availability */}
                    <div 
                    value={Availability} onChange={(e) => { setAvailability(e.target.value) }}
                    className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuentas con Disponibilidad de tiempo Lunes, Martes, Miercoles Y Viernes de 3:00 PM a 6:00 PM?</h3>
                        <label className='flex flex-row font-Nunito'>
                            <input
                                type="radio"
                                id="Availability"
                                name="Availability"
                                value="Yes"
                                className="accent-red
                                    focus:accent-yellow" />
                            Si
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="Availability"
                                name="Availability"
                                value="No"
                                className="accent-red
                                    focus:accent-yellow"
                            />
                            No
                        </label>
                    </div>


                    <div className='mx-12 sm:mx-40 md:mx-16 md:col-span-2 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Correo:</h3>
                        <p className=' font-Nunito text-sm text-dark/60'> En este correo te enviaremos información sobre todo el proceso, te recomendamos que sea el correo oficial de tu colegio</p>
                        <input value={emailPerson} onChange={(e) => { setEmailPerson(e.target.value) }} type='email' placeholder='correo@correo.edu.co' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow md:w-1/2'></input>
                    </div>

                    {/* the birth input with the id Phone */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Telefono Celular principal</label>
                        <input
                            className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                            id='Phone'
                            value={Phone} onChange={(e) => { setPhone(e.target.value) }}
                            placeholder='000 000 00 00'
                        ></input>
                    </div>

                    {/* the birth input with the id PhoneTwo */}
                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Telefono Celular Secundario</label>
                        <input
                            className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                            value={PhoneTwo} onChange={(e) => { setPhoneTwo(e.target.value) }}
                            id='PhoneTwo'
                            placeholder='000 000 00 00'
                        ></input>
                    </div>

                </div>
            </div>
            {/* <Link to="/Social" className='flex justify-end mr-8' > */}
            <button
                onClick={StudentA}
                type='submit'
                className='px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-light text-sm font-Poppins font-medium rounded-sm'>Siguiente</button>
            {/* </Link> */}
            <br />
        </div >
    );
};

export default Student