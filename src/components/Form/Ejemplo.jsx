import React from 'react'
import { useFormik } from 'formik'

const Ejemplo = () => {
    const validationPageOne = yup.object({
        firstName: yup.string().required('Required field'),
        lastName: yup.string().required('Required field')
    })
    const validationPageTwo = yup.object({
        country: yup.string().required('Required field'),
        age: yup.number().required('Required field')
    })


    const formik = useFormik({
        initialValues,
        onSubmit,
        page: "=== 1 ? validationPageOne : validationPageTwo,"
})

// const formik = useFormik({
//     initialValues: {
//         email: "",
//     },
// });

// console.log={formik}

return (
    <div>
        <form autoComplete='off'>
        <label htmlFor='firstName'>Email</label>
        <input
            value={validationPageOne}
            onChange={formik.handleChange}
            id="firstName"
            type="firstName"
            placeholder='firstName'
            onBlur={formik.handleBlur}
        />
        </form>

    </div>
)
}

export default Ejemplo