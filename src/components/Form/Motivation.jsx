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

                            <section className='font-Nunito'>
                            <article className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label for="want" className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Qué es lo que más te interesa de la metodología?</label>
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
                                Es presencial y las clases son como las de mi colegio.
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
                                El tipo de aprendizaje, ya que permite aprender desde la práctica con ejemplos reales.
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
                                Que el estudio es 100% virtual y en horario de la tarde.
                                </h3>
                            </div>
                            </article>
                            </section>

                            <section className='font-Nunito'>
                            <article className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label for="want" className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuáles son tus principales sueños en la vida y cómo la formación te aportará a cumplirlos?</label>
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
                                Poder tener conocimientos en tecnología y así poner en práctica mi conocimiento de programación cuando entre a la universidad.
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
                                Tener un trabajo que me dé mucho dinero. 
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
                                Tener una calidad de vida haciendo lo que más me apasiona que es la programación y apoyando a otros.
                                </h3>
                            </div>
                            </article>
                            </section>

                            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuáles consideras que serían los motivos de retiro del programa durante?</h3>
                            <select id='ethnicGroup'
                                data-te-select-init data-te-select-filter='true' className='w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium focus:border-yellow'>
                                <option className='font-medium text-dark'>
                                    Selecciona una opción </option>
                                <option className='font-medium text-dark'>
                                    retuirarme del colegio </option>
                                <option className='font-medium text-dark'>
                                    Tener actividades ectracuriculares / empieza a fallar en algunas materias </option>
                                <option className='font-medium text-dark'>
                                    Disponibilidad de tiempo </option>
                                <option className='font-medium text-dark'>
                                    Conectividad </option>
                                <option className='font-medium text-dark'>
                                    Ninguna de las anteriores </option>
                            </select>
                        </div>

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