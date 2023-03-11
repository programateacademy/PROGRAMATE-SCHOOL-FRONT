import { React, useState } from 'react'
import { Link } from 'react-router-dom'; 
import { useFormik } from 'formik';
import { logicShema } from '../../schemas/formSchema' 
import defaultApi from '../../apis/index'

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const Logic = () => {

    const { values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, dirty } = useFormik({
        initialValues: {
            logic1: '',
            logic2: '',
            logic3: '',
            logic4: '',
        },
        validationSchema: logicShema,
        onSubmit
    });
    // console.log(errors);
    // backend connection
    function logicP() {
        var view7 = {
            logic1: values.logic1,
            logic2: values.logic2,
            logic3: values.logic3,
            logic4: values.logic4,
        }
        console.log(view7);
        defaultApi
            .post("/registertoannouncement", view7)
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
                <img src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/PhotoOCHO.jpeg?raw=true'} className=' opacity-50 mix-blend-overlay object-cover h-72 w-full absolute'></img>
                <div className='flex justify-center  w-7/12 sm:w-5/12 md:w-9/12 m-auto '>
                    <img width={300} className='bg-light/80 rounded-lg p-2 md:p-4 shadow-2xl' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/programate-school-color.png?raw=true'} />
                </div>
            </div>
            <Link to='/Motivation'>
                <button className='flex m-5 px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Atras</button>
            </Link>

            <h2 className=' font-Poppins font-extrabold text-2xl text-center'>
                Prueba Logica
            </h2>
            <p className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6 font-Nunito text-dark/70'>
                Ahora no te asustes, esta pequeña prueba de lógica lo que busca es ver la manera en la que dar solución a diversas problemáticas no cuenta con calificación, pero si te recomendamos que la respondas a conciencia, ya que con esto podremos saber la mejor manera de apoyarte en u aprendizaje
            </p>
            <form onSubmit={handleSubmit}>
                {/* question 50 id logic1 */}

            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>En una carrera, de 4 corredores, se sabe que C ha llegado justo detrás de B, y D ha llegado en medio de A y C. ¿Cuál es el orden de llegada de los corredores?</h3>
                <select
                        value={values.logic1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id='logic1'
                        data-te-select-init data-te-select-filter='true' className={errors.logic1 && touched.logic1 ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}>
                        <option className='font-medium text-dark'>
                            Selecciona una opción </option>
                        <option className='font-medium text-dark'>
                            El orden de llegada es B,C,D,A </option>
                        <option className='font-medium text-dark'>
                            El orden de llegada es B,A,C,D </option>
                        <option className='font-medium text-dark'>
                            El orden de llegada es B,D,C,A </option>
                        <option className='font-medium text-dark'>
                            El orden de llegada es A,B,D,A </option>
                    </select>
                    {errors.logic1 && touched.logic1 && <p className='text-red text-xs font-Poppins'>{errors.logic1}</p>}
            </div>

            {/* question 51 id logic2 */}

            <div className='mx-12 sm:mx-40 md:mx-16 lg:mx-28 pb-6'>
                <h3 className='pb-1.5 text-dark text-sm font-Nunito font-black'>Un nadador se ve rodeado de un grupo de tiburones, muchos de ellos con problemas de visión.
                    Tres no veían por el ojo derecho, tres no veían por el ojo izquierdo y tres tanto por el derecho
                    como por el izquierdo. Otros tres eran completamente ciegos. ¿Cuántos tiburones había como
                    mínimo?</h3>
                <select
                        value={values.logic2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id='logic2'
                        data-te-select-init data-te-select-filter='true' className={errors.logic2 && touched.logic2 ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}>
                            <option className='font-medium text-dark sm:mx-40'>
                                Selecciona una opción </option>
                            <option className='font-medium text-dark sm:mx-40'>
                                Seis tiburones no son completamente ciegos y tres son completamente ciegos.</option>
                            <option className='font-medium text-dark sm:mx-40'>
                                Tres de los tiburones son completamente ciegos y tres no son completamente  </option>
                            <option className='font-medium text-dark sm:mx-40'>
                                Tres tiburones no son completamente ciegos y Seiscon completamente ciegos </option>
                    </select>
                    {errors.logic2 && touched.logic2 && <p className='text-red text-xs font-Poppins'>{errors.logic2}</p>}
                </div>
                {/* question 52 id logic3 */}
                {/* value={values.logic3}
                        onChange={handleChange}
                        onBlur={handleBlur}  
                        
                        {errors.logic3 && touched.logic3 && <p className='text-red text-xs font-Poppins'>{errors.logic3}</p>}                */}

                {/* question 53 id logic4 */}
                {/* value={values.logic4}
                        onChange={handleChange}
                        onBlur={handleBlur}

                        {errors.logic4 && touched.logic4 && <p className='text-red text-xs font-Poppins'>{errors.logic4}</p>} */}

            <Link className='flex justify-end mr-8' to='/'>
                <button
                    onClick={logicP}
                    disabled={!(isValid && dirty)}
                    type='submit'
                    className='px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-light text-sm font-Poppins font-medium rounded-sm'>Siguiente</button>
            </Link>
            </form>            
        </div>
    )
}

export default Logic