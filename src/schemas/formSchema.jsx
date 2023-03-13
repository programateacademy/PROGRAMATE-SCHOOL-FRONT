import * as yup from 'yup'

export const signupSchema = yup.object().shape({
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

export const studentShema = yup.object().shape({
    name1Person: yup.string().required('ingresa tu primer nombre'),
    lastname1Person: yup.string().required('ingresa tu primer apellido'),
    birthdate: yup.string().required('ingresa tu fecha de nacimiento'),
    agePerson: yup.string().required('ingresa tu edad'),
    gender: yup.string().required('selecciona tu genero'),
    document: yup.string().required('selecciona tu tipo de documento'),
    documentPerson: yup.string().required('ingresa tu numero de documento'),
    institutionPerson: yup.string().required('selecciona el institucion donde estudias'),
    course: yup.string().required('selecciona el grado que estas cursando'),
    sena: yup.string().required('selecciona si estas cursando en el sena o estas en horas sociales'),
    availability: yup.string().required('selecciona si tienes o no disponibilidad de tiempo'),
    emailPerson: yup.string().required('ingresa tu correo personal'),
    phone: yup.string().required('ingresa tu numero de telefono'),
    // phoneTwo: yup.string().required('ingresa tu numero de telefono segundario o fijo'),
})

export const socialShema = yup.object().shape({
    sisben: yup.string().required('selecciona si perteneces a el sisben'),
    ethnicGroup: yup.string().required('selecciona si perteneces a algun grupo ednico'),
    nationality: yup.string().required('selecciona tu nacionalidad'),
    disability: yup.string().required('selecciona si estas en situacion de discapacidad'),
    typeDisability: yup.string().required('si estas en situacion de discapacidad selecciona cual y si no selecciona ninguna'),
})

export const residenceShema = yup.object().shape({
    addressStudent: yup.string().required('ingresa tu direccion'),
    departmentStudent: yup.string().required('ingresa el department donde vives'),
    rural: yup.string().required('selecciona si vives en zona rural o no'),
    bogota: yup.string().required('si vives en Bogotá selecciona la localidad y si no selecciona ninguna'),
    stratum: yup.string().required('ingresa tu estrato según un recibo de servicio publico'),
})

export const guardianShema = yup.object().shape({
    nameGuardian: yup.string().required('ingresa el nombre de tu acudiente'),
    relationship: yup.string().required('ingresa la relacion que tienes con tu acudiente'),
    documentTypeGuardian: yup.string().required('selecciona el tipo de documento de tu acudiente'),
    numberIdGuardian: yup.string().required('ingresa el numero de documento de tu acudiente'),
    emailGuardian: yup.string().required('ingresa el correo de tu acudiente'),
    phoneGuardian: yup.string().required('ingresa el numero de telefono de tu acudiente'),
    // phoneGuardianTwo: yup.string().required('ingresa el numero de telefono segundario o fijo de tu acudiente'),
    addressGuardian: yup.string().required('ingresa la direccion de tu acudiente'),
    departmentGuardian: yup.string().required('ingresa el department donde vive tu acudiente'),
    educationLevelGuardian: yup.string().required('selecciona el nivel academico de tus padres'),
    economic: yup.string().required('selecciona la actividad economica de tus padres'),
    family: yup.string().required('selecciona cuantas personas conforman tu familia'),
})

export const vocationShema = yup.object().shape({
    computer: yup.string().required('selecciona si tienes acceso a un computador'),
    internet: yup.string().required('selecciona si tienes acceso a internet'),
    interests: yup.string().required('selecciona que area de estudio te llama la atencion'),
    activity: yup.string().required('selecciona la respuesta que creas correcta'),
    reportage: yup.string().required('selecciona el reportaje que mas te llame la atencion'),
    stake: yup.string().required('selecciona en que parte te gustaria participar'),
    webMotivation: yup.string().required('selecciona que es lo que te motiva'),
})

export const motivationShema = yup.object().shape({
    why: yup.string().required('selecciona por que quieres ser parte'),
    methodology: yup.string().required('selecciona que es lo que interesa de la metodología'),
    want: yup.string().required('selecciona la respuesta que se identifique contigo'),
    withdrawal: yup.string().required('selecciona la respuesta que se identifique contigo'),
})

export const logicShema = yup.object().shape({
    logic1: yup.string().required('selecciona la respuesta que creas correcta'),
    logic2: yup.string().required('selecciona la respuesta que creas correcta'),
    logic3: yup.string().required('selecciona la respuesta que creas correcta'),
    logic4: yup.string().required('selecciona la respuesta que creas correcta'),
})

