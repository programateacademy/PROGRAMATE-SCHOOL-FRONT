import React from 'react'
import { useFormik } from 'formik'
import { singupSchema } from '../schemas/formSchema'
import defaultApi from '../apis/index'

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

const validationSignup = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name1Person: '',
            name2Person: '',
            lastname1Person: '',
            lastname2Person: '',
            documentPerson: '',
            emailPerson: '',
            profilePerson: 3,
            agePerson: '',
            institutionPerson: '',
        },
        validationSchema: singupSchema,
        onSubmit
    })

function signup() {
        
    var signP = {
        name1Person: values.name1Person,
        name2Person: values.name2Person,
        lastname1Person: values.lastname1Person,
        lastname2Person: values.lastname2Person,
        documentPerson: values.documentPerson,
        emailPerson: values.emailPerson,
        profilePerson: 3,
        agePerson: values.agePerson,
        institutionPerson: values.institutionPerson,
    };
    console.log(signP);
    defaultApi
        .post("/signUp", signP)
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
        <form onSubmit={handleSubmit} autoComplete='off'>
            {/* name1Person */}
            <label htmlFor='name1Person'className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>name1Person</label>
            <input
            value={values.name1Person}
            onChange={handleChange}
            id='name1Person'
            type='text'
            placeholder='Escriba su correo'
            onBlur={handleBlur}
            className={errors.name1Person && touched.name1Person ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
            {errors.name1Person && touched.name1Person && <p className='text-red text-xs font-Poppins'>{errors.name1Person}</p>}
            {/* name2Person */}
            <label htmlFor='name2Person'className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>name2Person</label>
            <input
            value={values.name2Person}
            onChange={handleChange}
            id='name2Person'
            type='text'
            placeholder='Escriba su correo'
            onBlur={handleBlur}
            className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'/>
            {/* lastname1Person */}
            <label htmlFor='lastname1Person'className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>lastname1Person</label>
            <input
            value={values.lastname1Person}
            onChange={handleChange}
            id='lastname1Person'
            type='text'
            placeholder='Escriba su correo'
            onBlur={handleBlur}
            className={errors.lastname1Person && touched.lastname1Person ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
            {errors.lastname1Person && touched.lastname1Person && <p className='text-red text-xs font-Poppins'>{errors.lastname1Person}</p>}
            {/* lastname2Person */}
            <label htmlFor='lastname2Person'className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>lastname2Person</label>
            <input
            value={values.lastname2Person}
            onChange={handleChange}
            id='lastname2Person'
            type='text'
            placeholder='Escriba su correo'
            onBlur={handleBlur}
            className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'/>
            {/* documentPerson */}
            <label htmlFor='documentPerson'className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>documentPerson</label>
            <input
            value={values.documentPerson}
            onChange={handleChange}
            id='documentPerson'
            type='text'
            placeholder='Escriba su correo'
            onBlur={handleBlur}
            className={errors.documentPerson && touched.documentPerson ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
            {errors.documentPerson && touched.documentPerson && <p className='text-red text-xs font-Poppins'>{errors.documentPerson}</p>}
            {/* emailPerson */}
            <label htmlFor='emailPerson'className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>emailPerson</label>
            <input
            value={values.emailPerson}
            onChange={handleChange}
            id='emailPerson'
            type='text'
            placeholder='Escriba su correo'
            onBlur={handleBlur}
            className={errors.emailPerson && touched.emailPerson ? 'px-2 py-1 rounded border-2 border-red text-dark/50 text-xs font-Poppins' : 'px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'}/>
            {errors.emailPerson && touched.emailPerson && <p className='text-red text-xs font-Poppins'>{errors.emailPerson}</p>}
            {/* lastname2Person */}
            <label htmlFor='agePerson'className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>agePerson</label>
            <input
            value={values.agePerson}
            onChange={handleChange}
            id='agePerson'
            type='text'
            placeholder='Escriba su correo'
            onBlur={handleBlur}
            className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'/>
            {/* institutionPerson */}
            <label htmlFor='agePerson'className='col-span-2 pb-1.5 text-dark text-sm font-Nunito font-black'>institución</label>
            <select
                value={values.institutionPerson}
                onChange={handleChange}
                id='institutionPerson'
                type='text'
                placeholder='Escriba su correo'
                onBlur={handleBlur}
                className='px-2 py-1 rounded border-2 border-yellow text-dark/50 text-xs font-Poppins'>
                    <option className='font-medium text-dark'>Selecciona una opción</option>
                    <option className='font-medium text-dark'>IE El Jardín - Ibagué</option>
                    <option className='font-medium text-dark'>El Olivo School - Santa Marta</option>
                    <option className='font-medium text-dark'>Colegio Integrada La Candelaria</option>
                    <option className='font-medium text-dark'>Técnica Agropecuaria Luruaco - Atlantico</option>
                    <option className='font-medium text-dark'>Colegio Campo de la Cruz - Atlantico</option>
            </select>
            <button type='submit' onClick={signup} className='flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium'>Regístrarse</button>
        </form>
    )
}

export default validationSignup