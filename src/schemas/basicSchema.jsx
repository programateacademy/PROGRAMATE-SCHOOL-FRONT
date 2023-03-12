import * as yup from 'yup'

export const basicSchema = yup.object().shape({
    name1Person: yup.string().required('Campo obligatorio'),
    name2Person: yup.string(),
    lastname1Person: yup.string().required('Campo obligatorio'),
    lastname2Person: yup.string(),
    documentPerson: yup.string().required('Campo obligatorio'),
    emailPerson: yup.string().email('Escriba un correo válido').required('Campo obligatorio'),
    agePerson: yup.number().positive('Ingresa un valor válido').min(1,'Ingresa un valor válido').max(99,'Ingresa un valor válido'),
    institutionPerson: yup.string().required('Campo obligatorio').oneOf(['Jardín', 'Olivo', 'Candelaria', 'Luruaco', 'Cruz'], 'Ingresa una opción válida'),
    termsAndConditions: yup.boolean().oneOf([true], 'Debes aceptar los T&C'),
})