import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { socialShema } from '../../schemas/formSchema'
import defaultApi from '../../apis/index'

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const Social = () => {
        // formk validations
    const { values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, dirty } = useFormik({
        initialValues: {
            sisben: '',
            ethnicGroup: '',
            nationality: '',
            disability: '',
            typeDisability: '',
        },
        validationSchema: socialShema,
        onSubmit
    });
    // console.log(errors);
    // backend connection
    function socialP() {
        var view2 = {
            sisben: values.sisben,
            ethnicGroup: values.ethnicGroup,
            nationality: values.nationality,
            disability: values.disability,
            typeDisability: values.typeDisability,
        }
        console.log(view2);
        defaultApi
            .post("/registertoannouncement", view2)
            .then((res) => { 
                alert("Se ha registrado en PROGRAMATE SCHOOL");
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
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoUNO.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className='flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl backdrop-saturate-200' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>
            <Link to='/Student'>
                <button className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-light text-sm font-Poppins font-medium'>Atras</button>
            </Link>

            <form onSubmit={handleSubmit} className=' font-Poppins px-3 py-3 ' >
                <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-4 grid grid-cols-2 gap-x-2'>
                    {/* question 17 id sisben */}

                    <div
                        id="sisben"
                        value={values.sisben}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Perteneces al sisbén?</label>
                        <label className='flex flex-row font-Nunito'>
                            <input
                                type="radio"
                                id="sisben"
                                name="sisben"
                                value="SI"
                                className="accent-red
                                    focus:accent-yellow" />
                            Si
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="sisben"
                                name="sisben"
                                value="NO"
                                className="accent-red
                                    focus:accent-yellow"
                            />
                            No
                        </label>
                        {errors.sisben && touched.sisben && <p className='text-red text-xs font-Poppins'>{errors.sisben}</p>}
                    </div>

                    {/* question 18 id ethnicGroup */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Eres parte de un grupo étnico?</h3>
                        <select
                            id='ethnicGroup'
                            value={values.ethnicGroup}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            data-te-select-init data-te-select-filter='true'
                            className={errors.ethnicGroup && touched.ethnicGroup ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
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
                        {errors.ethnicGroup && touched.ethnicGroup && <p className='text-red text-xs font-Poppins'>{errors.ethnicGroup}</p>}
                    </div>

                    {/* question 19 id nationality */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Cuál es tu nacionalidad?</h3>
                        <select
                            id='nationality'
                            value={values.nationality}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            data-te-select-init data-te-select-filter='true'
                            className={errors.nationality && touched.nationality ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                            <option className='font-medium text-dark'>
                                Selecciona una opción </option>
                            <option className='font-medium text-dark'>
                                Venezolan@ </option>
                            <option className='font-medium text-dark'>
                                Colombian@</option>
                            <option className='font-medium text-dark'>
                                Otra </option>
                        </select>
                        {errors.nationality && touched.nationality && <p className='text-red text-xs font-Poppins'>{errors.nationality}</p>}
                    </div>

                    {/* the break line in the form */}
                    <hr className=" border-2 border-yellow rounded w-full max-w-7xl flex justify-center items-center md:mx-6 md:col-span-2" />

                    {/* question 20 id disability */}

                    <div
                        value={values.disability}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <label className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Perteneces a población en situación de discapacidad?</label>
                        <label className='flex flex-row font-Nunito'>
                            <input
                                type="radio"
                                name="disability"
                                id="disability"
                                value="SI"
                                className="accent-red
                                    focus:accent-yellow" />
                            Si
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="disability"
                                id="disability"
                                value="NO"
                                className="accent-red
                                    focus:accent-yellow"
                            />
                            No
                        </label>
                        {errors.disability && touched.disability && <p className='text-red text-xs font-Poppins'>{errors.disability}</p>}
                    </div>

                    {/* question 21 id typeDisability */}

                    <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                        <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>¿Qué tipo de discapacidad tienes?</h3>
                        <select
                            id='typeDisability'
                            value={values.typeDisability}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            data-te-select-init data-te-select-filter='true'
                            className={errors.typeDisability && touched.typeDisability ? 'w-full px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'w-full p-1 bg-light rounded border-2 border-yellow text-dark/50 text-xs font-Poppins font-medium'}>
                            <option className='font-medium text-dark'>
                                Selecciona una opción </option>
                            <option className='font-medium text-dark'>
                                Fisica </option>
                            <option className='font-medium text-dark'>
                                Auditiva </option>
                            <option className='font-medium text-dark'>
                                Visual </option>
                            <option className='font-medium text-dark'>
                                Intelectual / Cognitiva </option>
                            <option className='font-medium text-dark'>
                                SordoCegera </option>
                            <option className='font-medium text-dark'>
                                Pisicosocial </option>
                            <option className='font-medium text-dark'>
                                Multiple </option>
                            <option className='font-medium text-dark'>
                                Otra </option>
                            <option className='font-medium text-dark'>
                                Ninguno de los anteriores </option>
                        </select>
                        {errors.typeDisability && touched.typeDisability && <p className='text-red text-xs font-Poppins'>{errors.typeDisability}</p>}
                    </div>

                </div>

                <Link to="/Residence" className='flex justify-end mr-8' >
                <button
                    onClick={socialP}
                    disabled={!(isValid && dirty)}
                        type='submit'
                        className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium disabled:opacity-25'>Siguiente</button>
                </Link>
            
            </form>
        </div>
    )
};

export default Social