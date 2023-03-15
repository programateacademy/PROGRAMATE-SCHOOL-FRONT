import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    emailPerson: yup.string().email('Escribe un correo válido').required('Campo obligatorio'),
    passwordPerson: yup.string().required('Campo obligatorio'),
})

export const signupSchema = yup.object().shape({
    name1Person: yup.string().required('Campo obligatorio'),
    name2Person: yup.string(),
    lastname1Person: yup.string().required('Campo obligatorio'),
    lastname2Person: yup.string(),
    documentPerson: yup.string().required('Campo obligatorio'),
    emailPerson: yup.string().email('Escribe un correo válido').required('Campo obligatorio'),
    agePerson: yup.number().positive('Ingresa un valor válido').min(1,'Ingresa un valor válido').max(99,'Ingresa un valor válido'),
    institutionPerson: yup.string().required('Campo obligatorio').oneOf(['Jardín', 'Olivo', 'Candelaria', 'Luruaco', 'Cruz'], 'Ingresa una opción válida'),
    termsAndConditions: yup.boolean().oneOf([true], 'Debes aceptar los T&C'),
})

export const studentShema = yup.object().shape({
    name1Person: yup.string().required('Ingresa tu primer nombre'),
    lastname1Person: yup.string().required('Ingresa tu primer apellido'),
    birthdate: yup.string().required('Ingresa tu fecha de nacimiento'),
    agePerson: yup.string().required('Ingresa tu edad'),
    gender: yup.string().required('Selecciona tu genero'),
    document: yup.string().required('Selecciona tu tipo de documento'),
    documentPerson: yup.string().required('Ingresa tu numero de documento'),
    institutionPerson: yup.string().required('Selecciona el institucion donde estudias'),
    course: yup.string().required('Selecciona el grado que estas cursando'),
    sena: yup.string().required('Selecciona si estas cursando en el sena o estas en horas sociales'),
    availability: yup.string().required('Selecciona si tienes o no disponibilidad de tiempo'),
    emailPerson: yup.string().email('Escribe un correo válido').required('Ingresa tu correo personal'),
    phone: yup.string().required('Ingresa tu numero de telefono'),
    // phoneTwo: yup.string().required('Ingresa tu numero de telefono segundario o fijo'),
})

export const socialShema = yup.object().shape({
    sisben: yup.string().required('Selecciona si perteneces a el sisben'),
    ethnicGroup: yup.string().required('Selecciona si perteneces a algun grupo ednico'),
    nationality: yup.string().required('Selecciona tu nacionalidad'),
    disability: yup.string().required('Selecciona si estas en situacion de discapacidad'),
    typeDisability: yup.string().required('Si estas en situacion de discapacidad selecciona cual y si no selecciona ninguna'),
})

export const residenceShema = yup.object().shape({
    addressStudent: yup.string().required('Ingresa tu direccion'),
    departmentStudent: yup.string().required('Ingresa el department donde vives'),
    rural: yup.string().required('Selecciona si vives en zona rural o no'),
    bogota: yup.string().required('Si vives en Bogotá selecciona la localidad y si no selecciona ninguna'),
    stratum: yup.string().required('Ingresa tu estrato según un recibo de servicio publico'),
})

export const guardianShema = yup.object().shape({
    nameGuardian: yup.string().required('Ingresa el nombre de tu acudiente'),
    relationship: yup.string().required('Selecciona la relacion que tienes con tu acudiente'),
    // relationshipO: yup.string().required('Ingresa la relacion que tienes con tu acudiente'),
    documentTypeGuardian: yup.string().required('Selecciona el tipo de documento de tu acudiente'),
    numberIdGuardian: yup.string().required('Ingresa el numero de documento de tu acudiente'),
    emailGuardian: yup.string().email('Escribe un correo válido').required('Ingresa el correo de tu acudiente'),
    phoneGuardian: yup.string().required('Ingresa el numero de telefono de tu acudiente'),
    // phoneGuardianTwo: yup.string().required('Ingresa el numero de telefono segundario o fijo de tu acudiente'),
    addressGuardian: yup.string().required('Ingresa la direccion de tu acudiente'),
    departmentGuardian: yup.string().required('Ingresa el department donde vive tu acudiente'),
    educationLevelGuardian: yup.string().required('Selecciona el nivel academico de tus padres'),
    economic: yup.string().required('Selecciona la actividad economica de tus padres'),
    family: yup.string().required('Selecciona cuantas personas conforman tu familia'),
})

export const vocationShema = yup.object().shape({
    computer: yup.string().required('Selecciona si tienes acceso a un computador'),
    internet: yup.string().required('Selecciona si tienes acceso a internet'),
    interests: yup.string().required('Selecciona que area de estudio te llama la atencion'),
    activity: yup.string().required('Selecciona la respuesta que creas correcta'),
    reportage: yup.string().required('Selecciona el reportaje que mas te llame la atencion'),
    stake: yup.string().required('Selecciona en que parte te gustaria participar'),
    webMotivation: yup.string().required('Selecciona que es lo que te motiva'),
})

export const motivationShema = yup.object().shape({
    why: yup.string().required('Selecciona por que quieres ser parte'),
    methodology: yup.string().required('Selecciona que es lo que interesa de la metodología'),
    want: yup.string().required('Selecciona la respuesta que se identifique contigo'),
    withdrawal: yup.string().required('Selecciona la respuesta que se identifique contigo'),
})

export const logicShema = yup.object().shape({
    logic1: yup.string().required('Selecciona la respuesta que creas correcta'),
    logic2: yup.string().required('Selecciona la respuesta que creas correcta'),
    logic3: yup.string().required('Selecciona la respuesta que creas correcta'),
    logic4: yup.string().required('Selecciona la respuesta que creas correcta'),
})

