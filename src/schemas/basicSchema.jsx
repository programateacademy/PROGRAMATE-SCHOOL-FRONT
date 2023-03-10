import * as yup from 'yup'

export const basicSchema = yup.object().shape({
    name1Person: yup.string().required('Requerido'),
    lastname1Person: yup.string().required('Requerido'),
    documentPerson: yup.string().required('Requerido'),
    emailPerson: yup.string().email('Escriba un correo válido').required('Requerido'),
})