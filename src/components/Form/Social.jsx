import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, } from 'formik'

const Social = () => {
    return (
        <div>
            {/* cover image with logo */}
            <div className='flex h-72 '>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoTRES.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className='flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>
            <Link to='/Student'>
                <button className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Atras</button>
            </Link>

            {/* Form validation */}
            <Formik
                initialValues={{
                    Email: '',
                    Phone: '',
                }}
                validate={(valores) => {
                    let errores = {};
                    if (!valores.Email) {
                        errores.Email = 'Ingresa tu correo electronico'
                    }

                    if (!valores.Phone) {
                        errores.Phone = 'Ingresa tu numero de celular'
                    }
                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    console.log('formulario enviado');
                }}
            >


                {/*the name input with the id NAME*/}
                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

                    <Form
                        className=' font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4'
                        onSubmit={handleSubmit}>
                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label for="school" className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Perteneces al sisbén?</label>
                            <label className='flex flex-row font-Nunito'>
                                <Field
                                    type="radio"
                                    name="picked"
                                    value="One"
                                    className="accent-red
                                    focus:accent-yellow" />
                                Si
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="picked"
                                    value="No"
                                    className="accent-red
                                    focus:accent-yellow"
                                />
                                No
                            </label>
                        </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Eres parte de un grupo étnico?</h3>
                            <select id='course'
                                data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                                <option className='font-medium text-dark'>
                                    Selecciona una opción </option>
                                <option className='font-medium text-dark'>
                                    Palenquero </option>
                                <option className='font-medium text-dark'>
                                    Afrocolombiano o Afrodecendiente </option>
                                <option className='font-medium text-dark'>
                                    Indigena </option>
                                <option className='font-medium text-dark'>
                                    Gitano </option>
                                <option className='font-medium text-dark'>
                                    Raizal </option>
                                <option className='font-medium text-dark'>
                                    Ninguna de las anteriores </option>
                            </select>
                        </div>
                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu género?</h3>
                            <label className='flex flex-row font-Nunito'>
                                <Field
                                    type="radio"
                                    name="picked"
                                    value="One"
                                    className="accent-red
                                    focus:accent-yellow" />
                                Si
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="picked"
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
                                    name="picked"
                                    value="One"
                                    className="accent-red
                                    focus:accent-yellow" />
                                Si
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="picked"
                                    value="No"
                                    className="accent-red
                                    focus:accent-yellow"
                                />
                                No
                            </label>
                        </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 md:col-span-2 lg:mx-28 pb-6'>
                            <label for="Email" className='pb-1.5 text-dark text-sm font-Nunito font-black '>Correo Electronico</label>
                            <p className=' font-Nunito text-sm '> En este correo te enviaremos información sobre todo el proceso, te recomendamos que sea el correo oficial de tu colegio</p>
                            <input
                                className=' w-1/2 p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
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
                            {touched.Phone && errors.Phone && <div className="text-center font-Nunito text-red text-sm">{errors.Phone}</div>}
                        </div>

                        <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label for="Phone" className='pb-1.5 text-dark text-sm font-Nunito font-black'>Telefono Celular secundario</label>
                            <input
                                className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                                type="Phone"
                                id='Phone'
                                name='Phone'
                                placeholder='000 000 00 00'
                            ></input>
                        </div>
                    </Form>
                )}
            </Formik>

            <Link to="/Residence" className='flex justify-end mr-8' >
                <button className='px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-light text-sm font-Poppins font-medium rounded-sm'>Siguiente</button>
            </Link>
        </div>
    )
}

export default Social