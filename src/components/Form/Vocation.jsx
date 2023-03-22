import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { vocationSchema } from '../../schemas/formSchema';

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const Vocation = () => {
    // formk validations
    const { values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, dirty } = useFormik({
        initialValues: {
            computer: '',
            internet: '',
            interests: '',
            activity: '',
            reportage: '',
            stake: '',
            webMotivation: '',
        },
        validationSchema: vocationSchema,
        onSubmit
    });
    // console.log(errors);
    // backend connection
    function vocationP() {
        var view5 = {
            computer: values.computer,
            internet: values.internet,
            interests: values.interests,
            activity: values.activity,
            reportage: values.reportage,
            stake: values.stake,
            webMotivation: values.webMotivation,
        }
        console.log(view5);

        //THIS BRING AN OBJECT FROM LOCALSTORAGE
        const view1to4save = JSON.parse(localStorage.getItem('LSview1to4'))
        localStorage.removeItem('LSview1to4')

        // THIS JOIN TWO OBJECTS
        const view1to5 = { ...view1to4save, ...view5 }
        console.log(view1to5)

        // THIS SEND VIEW1TO5  TO LOCALSTORAGE 
        localStorage.setItem('LSview1to5', JSON.stringify(view1to5))
    }

    return (
        <div>
            {/* cover image with logo */}
            <div className='flex h-72 '>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoSEIS.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className='flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>
            <Link to='/Guardian'>
                <button className='m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-dark hover:text-light text-sm font-Poppins font-bold'>Atras</button>
            </Link>
            <h2 className=' font-Poppins font-semibold flex justify-center mb-5 text-2xl'>Test Vocacional</h2>
            <form onSubmit={handleSubmit}>
                <div className='font-Poppins px-3 py-3 md:grid grid-cols-2 gap-4'>

                    {/* question 39 id computer */}
                    <div
                        value={values.computer}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Tienes acceso a un computador en casa o en el colegio? <small className='text-red/80'>*</small></label>
                        <label className='flex flex-row font-Nunito'>
                            <input
                                type="radio"
                                name="computer"
                                id="computer"
                                value="SI"
                                className="accent-red focus:accent-yellow"/>Si
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="computer"
                                id="computer"
                                value="NO"
                                className="accent-red focus:accent-yellow"/>No
                        </label>
                    </div>
                    {errors.computer && touched.computer && <p className='text-red text-xs font-Poppins'>{errors.computer}</p>}

                    {/* question 40 id internet */}
                    <div
                        value={values.internet}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Tienes acceso a internet en casa o en el colegio?  <small className='text-red/80'>*</small></label>
                        <label className='flex flex-row font-Nunito'>
                            <input
                                type="radio"
                                name="internet"
                                id="internet"
                                value="SI"
                                className="accent-red focus:accent-yellow "/>Si
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="internet"
                                id="internet"
                                value="NO"
                                className="accent-red focus:accent-yellow"/>No
                        </label>
                    </div>
                    {errors.internet && touched.internet && <p className='text-red text-xs font-Poppins'>{errors.internet}</p>}
                </div>

                {/* question 41 id interests */}
                <section
                    value={values.interests}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='font-Nunito'>
                    <article className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuáles de las siguientes áreas de estudio te llaman más la atención/interesan?  <small className='text-red/80'>*</small></label>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="interests"
                                    id="interests"
                                    value="A"
                                    className="accent-red focus:accent-yellow"/>A.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Trabajo social, recursos humanos, derecho, enfermería.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="interests"
                                    id="interests"
                                    value="B"
                                    className="accent-red focus:accent-yellow"/>B.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Diseño, artes escénicas, comunicación audiovisual, arquitectura.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="interests"
                                    id="interests"
                                    value="C"
                                    className="accent-red focus:accent-yellow"/>C.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Administración, marketing, finanzas.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="interests"
                                    id="interests"
                                    value="D"
                                    className="accent-red focus:accent-yellow"/>D.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Ingenierías, matemáticas, estadística.</h3>
                        </div>
                    </article>
                    {errors.interests && touched.interests && <p className='text-red text-xs font-Poppins'>{errors.interests}</p>}
                </section>

                {/* question 42 id activity */}
                <section
                    value={values.activity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='font-Nunito'>
                    <article className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>  Si fueras pasajero en un avión comercial, ¿Cuál actividad te describe mejor? <small className='text-red/80'>*</small></label>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="activity"
                                    id="activity"
                                    value="A"
                                    className="accent-red focus:accent-yellow"/>A.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Conocer a los otros pasajeros y el porqué de sus viajes</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="activity"
                                    id="activity"
                                    value="B"
                                    className="accent-red focus:accent-yellow"/>B.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Tomar fotografías de las nubes y del paisaje.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="activity"
                                    id="activity"
                                    value="C"
                                    className="accent-red focus:accent-yellow"/>C.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Conocer los mecanismos y datos de vuelo del instrumental de navegación.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="activity"
                                    id="activity"
                                    value="D"
                                    className="accent-red focus:accent-yellow"/>D.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Comparar la relación entre el costo del viaje y calidad del servicio.</h3>
                        </div>
                    </article>
                    {errors.activity && touched.activity && <p className='text-red text-xs font-Poppins'>{errors.activity}</p>}
                </section>

                {/* question 43 id reportage */}
                <section
                    value={values.reportage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='font-Nunito'>
                    <article className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>Me llamaría más la atención el siguiente reportaje  <small className='text-red/80'>*</small></label>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="reportage"
                                    id="reportage"
                                    value="A"
                                    className="accent-red focus:accent-yellow"/>A.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Nuevos avances en inteligencia artificial.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="reportage"
                                    id="reportage"
                                    value="B"
                                    className="accent-red focus:accent-yellow"/>B.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Formas de facilitar la comunicación entre las personas.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="reportage"
                                    id="reportage"
                                    value="C"
                                    className="accent-red focus:accent-yellow"/>C.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Historia del cine.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="reportage"
                                    id="reportage"
                                    value="D"
                                    className="accent-red focus:accent-yellow"/>D.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Fórmulas para invertir tu dinero de forma inteligente.</h3>
                        </div>
                    </article>
                    {errors.reportage && touched.reportage && <p className='text-red text-xs font-Poppins'>{errors.reportage}</p>}
                </section>

                {/* question 44 id stake */}
                <section
                    value={values.stake}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='font-Nunito'>
                    <article className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>En la producción de una película, ¿te gustaría participar en?  <small className='text-red/80'>*</small></label>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="stake"
                                    id="stake"
                                    value="A"
                                    className="accent-red focus:accent-yellow"/>A.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Elaboración del guion.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="stake"
                                    id="stake"
                                    value="B"
                                    className="accent-red focus:accent-yellow"/>B.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Edición de sonido y digitalización.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="stake"
                                    id="stake"
                                    value="C"
                                    className="accent-red focus:accent-yellow"/>C.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Actuación.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="stake"
                                    id="stake"
                                    value="D"
                                    className="accent-redfocus:accent-yellow"/>D.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Publicidad y marketing.</h3>
                        </div>
                    </article>
                    {errors.stake && touched.stake && <p className='text-red text-xs font-Poppins'>{errors.stake}</p>}
                </section>

                {/* question 45 id webMotivation */}
                <section
                    value={values.webMotivation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='font-Nunito'>
                    <article className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>De las computadoras lo ¿Qué más te motiva es?<small className='text-red/80'>*</small></label>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="webMotivation"
                                    id="webMotivation"
                                    value="A"
                                    className="accent-red focus:accent-yellow"/>A.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Conectarme con personas de otras culturas.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="webMotivation"
                                    id="webMotivation"
                                    value="B"
                                    className="accent-red focus:accent-yellow"/>B.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Hacer uso de un software de diseño.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="webMotivation"
                                    id="webMotivation"
                                    value="C"
                                    className="accent-red focus:accent-yellow"/>C.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Configurar programas computacionales en tu equipo.</h3>
                        </div>
                        <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                <input
                                    type="radio"
                                    name="webMotivation"
                                    id="webMotivation"
                                    value="D"
                                    className="accent-red focus:accent-yellow" />D.
                            </label>
                            <h3 className=' font-Nunito font-semibold indent-4'>Buscar nueva información y estar enterada de las noticias del mundo.</h3>
                        </div>
                    </article>
                    {errors.webMotivation && touched.webMotivation && <p className='text-center font-Nunito text-red text-sm'>{errors.webMotivation}</p>}
                </section>
                <div className='flex justify-end'>
                    <Link className='mr-8 col-span-2 w-28' to='/Motivation'>
                        <button
                            onClick={vocationP}
                            disabled={!(isValid && dirty)}
                            type='submit'
                            className='px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-dark  hover:text-light text-sm font-Poppins font-bold rounded-sm disabled:opacity-25'>Siguiente</button>
                    </Link>
                </div>
                <br />
            </form>
        </div>
    )
}

export default Vocation