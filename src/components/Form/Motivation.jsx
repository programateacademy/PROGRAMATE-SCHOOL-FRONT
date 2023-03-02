import React from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, } from 'formik'   

const Motivation = () => {
    return (
        <div>
            {/* cover image with logo */}
            <div className='flex h-72 '>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoTRES.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className='flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>
            <Link to='/Psychological'>
                <button className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Atras</button>
            </Link>

            <h2 className=' font-Poppins font-extrabold text-2xl text-center'>
            Ser parte de “PROGRÁMATE SCHOOL”
            </h2>
            <br/>

            <Formik
                    initialValues={{
                        name: '',
                    }}
                    validate={(valores) => {
                        let errores = {};
                        if (!valores.name) {
                            errores.name = ''
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
                        onSubmit={handleSubmit}>
                        <section className='font-Nunito'>
                            <article className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label for="want" className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Por qué quieres ser parte de Prográmate School?</label>
                            <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                    <Field
                                        type="radio"
                                        name="want"
                                        id="want"
                                        value="A"
                                        className="accent-red
                                    focus:accent-yellow" />
                                    A.
                                </label>
                                <h3 className=' font-Nunito font-semibold ml-4'>
                                Quiero ser parte de Prográmate School porque la programación siempre me ha interesado y con esta oportunidad podré ampliar mis conocimientos en esta área.
                                </h3>
                            </div>

                            <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                    <Field
                                        type="radio"
                                        name="want"
                                        id="want"
                                        value="B"
                                        className="accent-red
                                    focus:accent-yellow" />
                                    B.
                                </label>
                                <h3 className=' font-Nunito font-semibold indent-4'>
                                Quiero ser parte de Prográmate porque me va a ayudar a adquirir conocimientos para ser influencer.
                                </h3>
                            </div>

                            <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                    <Field
                                        type="radio"
                                        name="want"
                                        id="want"
                                        value="C"
                                        className="accent-red
                                    focus:accent-yellow flex items-center" />
                                    C.
                                </label>
                                <h3 className=' font-Nunito font-semibold indent-4'>
                                No estoy seguro de que es La programación, pero es una oportunidad que nos da el colegio.
                                </h3>
                            </div>
                            </article>
                            </section>
                        </Form>
                    )}
                        </Formik>
            <Link className='flex justify-end mr-8' to='/Logic'>
            <button className='px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-light text-sm font-Poppins font-medium rounded-sm'>Siguiente</button>
            </Link>
        </div>
    )
}

export default Motivation