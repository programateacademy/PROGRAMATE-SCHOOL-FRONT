import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'


const Student = () => {
    return (
        <div>
            {/* cover image with logo */}
            <div className='flex h-72 '>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoTRES.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className='flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
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
                        tel: '',
                        email: '',
                        theme: '',
                        amount: '',
                        descrip: '',
                    }}
                    validate={(valores) => {
                        let errores = {};
                        if (!valores.name) {
                            errores.name = 'Ingresa tu nombre completo'
                        }
                        if (!valores.Birthdate) {
                            errores.Birthdate = 'ingresa tu fecha de Nacimiento'
                        }
                        if (!valores.Age) {
                            errores.Age = 'ingresa tu edad en numero "18"'
                        }
                        if (!valores.theme) {
                            errores.theme = 'ingresa tu temática'
                        }
                        if (!valores.amount) {
                            errores.amount = 'ingresa la cantidad que necesitas'
                        }
                        if (!valores.descrip) {
                            errores.descrip = 'ingresa una descripción de tu proyecto '
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
                                <label for="name" className='pb-1.5 text-dark text-sm font-Nunito font-black'>Nombres y apellidos (completos)</label>
                                <input
                                    className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                                    type="name"
                                    id='name'
                                    name=''
                                    placeholder='Nombre Completo'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></input>
                                {touched.name && errors.name && <div className=" text-center font-Nunito text-red text-sm">{errors.name}</div>}
                            </div>

                            {/* the birth input with the id BIRTHDATE */}

                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <label for="Birthdate" className='pb-1.5 text-dark text-sm font-Nunito font-black'>Fecha de nacimiento</label>
                                <input
                                    className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'
                                    type="Birthdate"
                                    id='Birthdate'
                                    name='Birthdate'
                                    placeholder='00 00 0000'
                                    value={values.Birthdate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></input>
                                {touched.Birthdate && errors.Birthdate && <div className="">{errors.Birthdate}</div>}
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
                                {touched.Age && errors.Age && <div className="">{errors.Age}</div>}
                            </div>

                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu género?</h3>
                                <select id='Genero' 
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

                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                                <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Tipo de documento</h3>
                                <select id='instituciones' data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
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
                            <div className='flex flex-row items-center'>
                                <label for="amount">Cantidad</label>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Student