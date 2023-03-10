import { React, useState } from 'react'
import { Link } from 'react-router-dom'; 
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import { motivationShema } from '../../schemas/formSchema'
import defaultApi from '../../apis/index'

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const Motivation = () => {
        // formk validations
    const { values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, dirty } = useFormik({
        initialValues: {
            why: '',
            methodology: '',
            want: '',
            withdrawal: '',
        },
        validationSchema: motivationShema,
        onSubmit
    });
    // backend connection
    function motivationP() {
        var view6 = {
            why: values.why,
            methodology: values.methodology,
            want: values.want,
            withdrawal: values.withdrawal,
        }
        console.log(view6);
        defaultApi
            .post("/registertoannouncement", view6)
            .then((res) => {
                // alert("Se ha registrado en PROGRAMATE SCHOOL");
                //  navigator("/")
            })
            .then(err => {
                console.log(err)
            })
            .catch(err => {
                if (err.response.status === 409) {
                    alert("Ya existe un usuario con este documento");
                } else if (err.response.status === 408) {
                    alert("Ya existe un usuario con este Correo");
                }
            })
    }

    return (
        <div>
            {/* cover image with logo */}
            <div className='flex h-72 '>
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoSIETE.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className='flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>

            <Link to='/Psychological' className=' mr-8 col-span-2 w-28'>
                <button className=' m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-dark hover:text-light text-sm font-Poppins font-bold'>Atras</button>
            </Link>

            <h2 className=' font-Poppins font-extrabold text-2xl text-center'>
            Ser parte de ???PROGR??MATE SCHOOL???
            </h2>
            <br/>

            <form onSubmit={handleSubmit}>
                
                {/* question 46 id why */}

                <section
                    value={values.why}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='font-Nunito'>
                            <article className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>??Por qu?? quieres ser parte de Progr??mate School?</label>
                            <div className='flex flex-row'>
                                <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                    <input
                                        type="radio"
                                        name="why"
                                        id="why"
                                        value="A"
                                        className="accent-red
                                    focus:accent-yellow" />
                                    A.
                                </label>
                                <h3 className=' font-Nunito font-semibold ml-4'>
                                Quiero ser parte de Progr??mate School porque la programaci??n siempre me ha interesado y con esta oportunidad podr?? ampliar mis conocimientos en esta ??rea.
                                </h3>
                            </div>

                            <div className='flex flex-row'>
                                <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                    <input
                                        type="radio"
                                        name="why"
                                        id="why"
                                        value="B"
                                        className="accent-red
                                    focus:accent-yellow" />
                                    B.
                                </label>
                                <h3 className=' font-Nunito font-semibold indent-4'>
                                Quiero ser parte de Progr??mate porque me va a ayudar a adquirir conocimientos para ser influencer.
                                </h3>
                            </div>

                            <div className='flex flex-row'>
                                <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                    <input
                                        type="radio"
                                        name="why"
                                        id="why"
                                        value="C"
                                        className="accent-red
                                    focus:accent-yellow flex items-center" />
                                    C.
                                </label>
                                <h3 className=' font-Nunito font-semibold indent-4'>
                                No estoy seguro de que es La programaci??n, pero es una oportunidad que nos da el colegio.
                                </h3>
                            </div>
                    </article>
                    {errors.why && touched.why && <p className='text-red text-xs font-Poppins'>{errors.why}</p>} 
                </section>

                {/* question 47 id methodology */}

                <section
                    value={values.methodology}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='font-Nunito'>
                        <article className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>??Qu?? es lo que m??s te interesa de la metodolog??a?</label>
                            <div className='flex flex-row'>
                            <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                    <input
                                        type="radio"
                                        name="methodology"
                                        id="methodology"
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
                                    <input
                                        type="radio"
                                        name="methodology"
                                        id="methodology"
                                        value="B"
                                        className="accent-red
                                    focus:accent-yellow" />
                                    B.
                                </label>
                                <h3 className=' font-Nunito font-semibold indent-4'>
                                El tipo de aprendizaje, ya que permite aprender desde la pr??ctica con ejemplos reales.
                                </h3>
                            </div>

                            <div className='flex flex-row'>
                                <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                    <input
                                        type="radio"
                                        name="methodology"
                                        id="methodology"
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
                    {errors.methodology && touched.methodology && <p className='text-red text-xs font-Poppins'>{errors.methodology}</p>}   
                </section>
                
                {/* question 48 id want */}

                <section
                    value={values.want}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='font-Nunito'>
                        <article className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                            <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>??Cu??les son tus principales sue??os en la vida y c??mo la formaci??n te aportar?? a cumplirlos?</label>
                            <div className='flex flex-row'>
                                <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                    <input
                                        type="radio"
                                        name="want"
                                        id="want"
                                        value="A"
                                        className="accent-red
                                    focus:accent-yellow" />
                                    A.
                                </label>
                                <h3 className=' font-Nunito font-semibold ml-4'>
                                Poder tener conocimientos en tecnolog??a y as?? poner en pr??ctica mi conocimiento de programaci??n cuando entre a la universidad.
                                </h3>
                            </div>

                            <div className='flex flex-row'>
                                <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                    <input
                                        type="radio"
                                        name="want"
                                        id="want"
                                        value="B"
                                        className="accent-red
                                    focus:accent-yellow" />
                                    B.
                                </label>
                                <h3 className=' font-Nunito font-semibold indent-4'>
                                Tener un trabajo que me d?? mucho dinero. 
                                </h3>
                            </div>

                            <div className='flex flex-row'>
                                <label className='flex justify-center font-Poppins font-extrabold text-center'>
                                    <input
                                        type="radio"
                                        name="want"
                                        id="want"
                                        value="C"
                                        className="accent-red
                                    focus:accent-yellow flex items-center" />
                                    C.
                                </label>
                                <h3 className=' font-Nunito font-semibold indent-4'>
                                Tener una calidad de vida haciendo lo que m??s me apasiona que es la programaci??n y apoyando a otros.
                                </h3>
                            </div>
                    </article>
                    {errors.want && touched.want && <p className='text-red text-xs font-Poppins'>{errors.want}</p>}   
                </section>

                {/* question 49 id withdrawal */}

                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                    <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>??Cu??les consideras que ser??an los motivos de retiro del programa durante el tiempo de programaci??n?</h3>
                    <select
                        value={values.withdrawal}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id='withdrawal'
                        data-te-select-init data-te-select-filter='true'
                        className={errors.withdrawal && touched.withdrawal ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins md:items-center md:w-1/2' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium md:items-center md:w-1/2'} >
                                <option className='font-medium text-dark'>
                                    Selecciona una opci??n </option>
                                <option className='font-medium text-dark'>
                                    retirarme del colegio </option>
                                <option className='font-medium text-dark'>
                                    Tener actividades ectracuriculares / empieza a fallar en algunas materias </option>
                                <option className='font-medium text-dark'>
                                    Disponibilidad de tiempo </option>
                                <option className='font-medium text-dark'>
                                    Conectividad </option>
                                <option className='font-medium text-dark'>
                                    Ninguna de las anteriores </option>
                    </select>
                    {errors.withdrawal && touched.withdrawal && <p className='text-red text-xs font-Poppins'>{errors.withdrawal}</p>} 
                </div>

            <div className='flex justify-end'>
                <Link className='mr-8 col-span-2 w-28' to='/Logic'>
                    <button
                        onClick={motivationP}
                        disabled={!(isValid && dirty)}
                    type='submit'
                        className='px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-dark  hover:text-light text-sm font-Poppins font-bold rounded-sm disabled:opacity-25'>Siguiente</button>
                </Link>
                </div>
            <br/>
            </form>           
        </div>
    )
}

export default Motivation