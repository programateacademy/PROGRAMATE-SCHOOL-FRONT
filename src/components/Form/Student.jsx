import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, } from 'formik'


const Student = () => {
    return (

        <div>
            {/* cover image with logo */}
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
                {/* Form validation */}
                <Formik
                    initialValues={{
                        name: '',
                        Surname: '',
                        Birthdate: '',
                        Age: '',
                        Email: '',
                        Phone: '',
                        sena: '',
                    }}
                    validate={(valores) => {
                        let errores = {};
                        if (!valores.name) {
                            errores.name = 'Ingresa tu nombre'
                        }

                        if (!valores.Surname) {
                            errores.Surname = 'Ingresa tu Apellido'
                        }

                        if (!valores.Birthdate) {
                            errores.Birthdate = 'Ingresa tu fecha de Nacimiento'
                        }
                        if (!valores.Age) {
                            errores.Age = 'Ingresa tu edad en numero "18"'
                        }

                        if (!valores.Email) {
                            errores.Email = 'Ingresa tu correo electronico'
                        }

                        if (!valores.Phone) {
                            errores.Phone = 'Ingresa tu numero de celular'
                        }

                        if (!valores.sena) {
                            errores.sena = 'Seleciona una opción'
                        }

                        return errores;
                    }}
                    onSubmit={(valores, { resetForm }) => {
                        resetForm();
                        console.log('formulario enviado');
                    }} >
                    {/*the name input with the id NAME*/}
                    {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                        <Form
                            className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4'
                            onSubmit={handleSubmit}>
                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <label for="name" className='pb-1.5 text-dark text-sm font-Nunito font-black'>Primer Nombre</label>
                                <input
                                    className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium 
                                    focus:border-red in-range:border-red'
                                    type="name"
                                    id='name'
                                    name='name'
                                    placeholder='Nombre'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></input>
                                {touched.name && errors.name && <div className="mx-9 font-Nunito text-red text-sm focus:border-red">{errors.name}</div>}
                            </div>
                            {/* the middle name input has id but no other properties */}

                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <label for="secondName" className='pb-1.5 text-dark text-sm font-Nunito font-black'>Segundo Nombre</label>
                                <input
                                    className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                                </input>
                            </div>

                            {/*the Surname input with the id Surname*/}
                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <label for="Surname" className='pb-1.5 text-dark text-sm font-Nunito font-black'>Primer Apellido</label>
                                <input
                                    className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                                    type="Surname"
                                    id='Surname'
                                    name='Surname'
                                    placeholder='Apellido'
                                    value={values.Surname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></input>
                                {touched.Surname && errors.Surname && <div className="mx-9 font-Nunito text-red text-sm">{errors.Surname}</div>}
                            </div>

                            {/* the input of the second last name has an id but no other properties */}
                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <label for="secondSurname" className='pb-1.5 text-dark text-sm font-Nunito font-black'>Segundo apellido</label>
                                <input
                                    className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'></input>
                            </div>

                            {/* the birth input with the id BIRTHDATE */}

                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <label for="Birthdate" className='pb-1.5 text-dark text-sm font-Nunito font-black'>Fecha de nacimiento</label>
                                <input
                                    type="date"
                                    filter
                                    color-scheme
                                    className="dark:bg-dark-bg mt-1 block w-full rounded border-2 border-yellow text-sm dark:border-yellow dark:text-dark dark:[color-scheme:light] p-1 focus:border-red">
                                </input>
                                {touched.Birthdate && errors.Birthdate && <div className="mx-9 font-Nunito text-red text-sm">{errors.Birthdate}</div>}
                            </div>

                            {/* the Age input with the id AGE */}
                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <label for="Age" className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cual es tu edad?</label>
                                <input
                                    className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                                    type="Age"
                                    id='Age'
                                    name='Age'
                                    placeholder='En años'
                                    value={values.Age}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></input>
                                {touched.Age && errors.Age && <div className="mx-9 font-Nunito text-red text-sm">{errors.Age}</div>}
                            </div>

                            {/* the gender input with the options it gives */}
                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu género?</h3>
                                <select id='Gender'
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
                            
                                {/* the break line in the form */}
                                <hr className=" border-2 border-yellow rounded w-full max-w-7xl flex justify-center items-center md:mx-6 md:col-span-2" />
                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <label for="school" className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cual el tu colegio?</label>
                                <select id='school'
                                    data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                                    <option className='font-medium text-dark'>
                                        Selecciona una opción </option>
                                    <option className='font-medium text-dark'>
                                        IE El Jardín - Ibagué </option>
                                    <option className='font-medium text-dark'>
                                        El Olivo School - Santa Marta </option>
                                    <option className='font-medium text-dark'>
                                        Colegio Integrada La Candelaria </option>
                                    <option className='font-medium text-dark'>
                                        Técnica Agropecuaria Luruaco - Atlantico </option>
                                    <option className='font-medium text-dark'>
                                        Colegio Campo de la Cruz - Atlantico</option>
                                </select>
                            </div>

                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Que grado estas cursando Actualmente?</h3>
                                <select id='course'
                                    data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                                    <option className='font-medium text-dark'>
                                        Selecciona una opción </option>
                                    <option className='font-medium text-dark'>
                                        11° </option>
                                    <option className='font-medium text-dark'>
                                        Otro </option>

                                </select>
                            </div>
                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Te encuentras cursando SENA u Horas sociales?</h3>
                                <label className='flex flex-row font-Nunito'>
                                    <Field
                                        type="radio"
                                        id="sena"
                                        name="sena"
                                        value="Yes"
                                        className="accent-red
                                    focus:accent-yellow" />
                                    Si
                                </label>
                                <label>
                                    <Field
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

                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuentas con Disponibilidad de tiempo Lunes, Martes, Miercoles Y Viernes de 3:00 PM a 6:00 PM?</h3>
                                <label className='flex flex-row font-Nunito'>
                                    <Field
                                        type="radio"
                                        id="Availability"
                                        name="Availability"
                                        value="Yes"
                                        className="accent-red
                                    focus:accent-yellow" />
                                    Si
                                </label>
                                <label>
                                    <Field
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
                                <label for="Email" className='pb-1.5 text-dark text-sm font-Nunito font-black '>Correo Electronico</label>
                                <p className=' font-Nunito text-sm text-dark/60'> En este correo te enviaremos información sobre todo el proceso, te recomendamos que sea el correo oficial de tu colegio</p>
                                <input
                                    className=' w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow md:w-1/2'
                                    type="Email"
                                    id='Email'
                                    name='Email'
                                    placeholder='Correo@correo.edu'
                                    value={values.Email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></input>
                                {touched.Email && errors.Email && <div className="mx-9 font-Nunito text-red text-sm">{errors.Email}</div>}
                            </div>

                            {/* the birth input with the id BIRTHDATE */}

                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <label for="Phone" className='pb-1.5 text-dark text-sm font-Nunito font-black'>Telefono Celular principal</label>
                                <input
                                    className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                                    type="Phone"
                                    id='Phone'
                                    name='Phone'
                                    placeholder='000 000 00 00'
                                    value={values.Phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></input>
                                {touched.Phone && errors.Phone && <div className="mx-9 font-Nunito text-red text-sm">{errors.Phone}</div>}
                            </div>

                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <label for="Phone" className='pb-1.5 text-dark text-sm font-Nunito font-black'>Telefono Celular Secundario</label>
                                <input
                                    className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                                    type="Phone"
                                    id='PhoneTwo'
                                    name='Phone'
                                    placeholder='000 000 00 00'
                                ></input>
                            </div>
                        </Form>
                    )}
                </Formik>
                <Link to="/Social" className='flex justify-end mr-8' >
                    <button className='px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-light text-sm font-Poppins font-medium rounded-sm'>Siguiente</button>
                </Link>
                <br />
            </div>
        </div >
    );
};

export default Student