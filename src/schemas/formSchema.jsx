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
    institutionPerson: yup.string().required('Campo obligatorio').oneOf(['IE El Jardín - Ibagué', 'El Olivo School - Santa Marta', 'Colegio Integrada La Candelaria', 'Técnica Agropecuaria Luruaco - Atlántico', 'Colegio Campo de la Cruz - Atlantico'], 'Ingresa una opción válida'),
    termsAndConditions: yup.boolean().oneOf([true], 'Debes aceptar los T&C'),
})

export const studentSchema = yup.object().shape({
    name1Person: yup.string().required('Ingresa tu primer nombre'),
    lastname1Person: yup.string().required('Ingresa tu primer apellido'),
    birthdate: yup.string().required('Ingresa tu fecha de nacimiento'),
    agePerson: yup.number().required('Ingresa tu edad'),
    gender: yup.string().required('Selecciona tu género').oneOf(['Femenino', 'Masculino', 'Otro'], 'Selecciona tu género'),
    document: yup.string().required('Selecciona tu tipo de documento').oneOf(['Cédula de Ciudadania', 'Cédula de extranjería', 'Tarjeta de identidad', 'Pasaporte', 'PEP', 'PTP'], 'Selecciona tu tipo de documento'),
    documentPerson: yup.string().required('Ingresa tu numero de documento'),
    institutionPerson: yup.string().required('Selecciona la institución donde estudias').oneOf(['IE El Jardín - Ibagué', 'El Olivo School - Santa Marta', 'Colegio Integrada La Candelaria', 'Técnica Agropecuaria Luruaco - Atlántico', 'Colegio Campo de la Cruz - Atlántico'], 'Selecciona la institucion donde estudias'),
    course: yup.string().required('Selecciona el grado que estás cursando').oneOf(['11°', 'Otro'], 'Selecciona el grado que estás cursando'),
    sena: yup.string().required('Selecciona si estas cursando en el sena o estas en horas sociales'),
    availability: yup.string().required('Selecciona si tienes o no disponibilidad de tiempo'),
    emailPerson: yup.string().email('Escribe un correo válido').required('Ingresa tu correo personal'),
    phone: yup.number().required('Ingresa tu numero de telefono'),
    // phoneTwo: yup.string().required('Ingresa tu numero de telefono segundario o fijo'),
})

export const socialSchema = yup.object().shape({
    sisben: yup.string().required('Selecciona si perteneces a el sisben'),
    ethnicGroup: yup.string().required('Selecciona si perteneces a algun grupo étnico').oneOf(['Palenquero', 'Afrocolombiano o Afrodecendiente', 'Indigena', 'Gitano', 'Raizal', 'Ninguna de las anteriores'], 'Selecciona si perteneces a algun grupo étnico'),
    nationality: yup.string().required('Selecciona tu nacionalidad').oneOf(['Venezolan@', 'Colombian@', 'Otra'], 'Selecciona tu nacionalidad'),
    disability: yup.string().required('Selecciona si estas en situación de discapacidad'),
    typeDisability: yup.string().required('Si estas en situación de discapacidad selecciona cual y si no selecciona ninguna').oneOf(['Fisica', 'Auditiva', 'Visual', 'Intelectual / Cognitiva', 'SordoCegera', 'Pisicosocial', 'Multiple', 'Otra', 'Ninguna'], 'Si estas en situación de discapacidad selecciona cual y si no selecciona ninguna'),
})

export const residenceSchema = yup.object().shape({
    addressStudent: yup.string().required('Ingresa tu dirección'),
    departmentStudent: yup.string().required('Ingresa el departmento donde vives').oneOf(['Atlántico', 'Bogotá', 'Magdalena', 'Tolima'], 'Ingresa el departmento donde vives'),
    rural: yup.string().required('Selecciona si vives en zona rural o no'),
    bogota: yup.string().required('Si vives en Bogotá selecciona la localidad y si no selecciona ninguna').oneOf(['localidad de Antonio Nariño', 'localidad de Barrios Unidos', 'localidad de Bosa', 'localidad de Chapinero', 'localidad de Ciudad Bolívar', 'localidad de Engativá', 'localidad de Fontibón', 'localidad de Kennedy', 'localidad de La Candelaría', 'localidad de Los Mártires', 'localidad de Puente Aranda', 'localidad de Rafael Uribe Uribe', 'Ninguna'], 'Si vives en Bogotá selecciona la localidad y si no selecciona ninguna'),
    stratum: yup.string().required('Ingresa tu estrato según un recibo de servicio público').oneOf(['1', '2', '3', '4', '5', '6'], 'Ingresa tu estrato según un recibo de servicio publico'),
})

export const guardianSchema = yup.object().shape({
    nameGuardian: yup.string().required('Ingresa el nombre de tu acudiente'),
    relationship: yup.string().required('Selecciona la relación que tienes con tu acudiente').oneOf(['Madre - Padre', 'Padrino - Madrina', 'Tío - Tía', 'Abuelo - Abuela', 'Padrastro - Madrastra', 'Otro'], 'Selecciona la relacion que tienes con tu acudiente'),
    // relationshipO: yup.string().required('Ingresa la relacion que tienes con tu acudiente'),
    documentTypeGuardian: yup.string().required('Selecciona el tipo de documento de tu acudiente').oneOf(['Cédula de Ciudadania', 'Cédula de extranjería', 'Tarjeta de identidad', 'Pasaporte', 'PEP', 'PTP'], 'Selecciona el tipo de documento de tu acudiente'),
    numberIdGuardian: yup.string().required('Ingresa el número de documento de tu acudiente'),
    emailGuardian: yup.string().email('Escribe un correo válido').required('Ingresa el correo de tu acudiente'),
    phoneGuardian: yup.number().required('Ingresa el número de teléfono de tu acudiente'),
    // phoneGuardianTwo: yup.string().required('Ingresa el numero de telefono segundario o fijo de tu acudiente'),
    addressGuardian: yup.string().required('Ingresa la direccion de tu acudiente'),
    departmentGuardian: yup.string().required('Ingresa el departmento donde vive tu acudiente').oneOf(['Atlántico', 'Bogotá', 'Magdalena', 'Tolima'], 'Ingresa el department donde vive tu acudiente'),
    educationLevelGuardian: yup.string().required('Selecciona el nivel académico de tus padres').oneOf(['Pregrado - completo', 'Pregrado - incompleto', 'Formación tecnológica - completo', 'Formación tecnológica - incompleto', 'Formación tecnica - completo', 'Formación tecnica - incompleto', 'Bachillerato - completo', 'Bachillerato - incompleto', 'Primaria - completo', 'Primaria - incompleto', 'Ninguna'], 'Selecciona el nivel academico de tus padres'),
    economic: yup.string().required('Selecciona la actividad económica de tus padres').oneOf(['Empleado tiempo completo', 'Empleado medio tiempo', 'Generando ingresos de manera informal (sin contrato)', 'Independiente', 'Desempleado/a'], 'Selecciona la actividad economica de tus padres'),
    family: yup.string().required('Selecciona cuantas personas conforman tu familia').oneOf(['1 - 2', '3 - 4', '5 o más', 'Ninguna'], 'Selecciona cuantas personas conforman tu familia'),
})

export const vocationSchema = yup.object().shape({
    computer: yup.string().required('Selecciona si tienes acceso a un computador'),
    internet: yup.string().required('Selecciona si tienes acceso a internet'),
    interests: yup.string().required('Selecciona que area de estudio te llama la atencion'),
    activity: yup.string().required('Selecciona la respuesta que creas correcta'),
    reportage: yup.string().required('Selecciona el reportaje que mas te llame la atencion'),
    stake: yup.string().required('Selecciona en que parte te gustaria participar'),
    webMotivation: yup.string().required('Selecciona que es lo que te motiva'),
})

export const motivationSchema = yup.object().shape({
    why: yup.string().required('Selecciona por que quieres ser parte'),
    methodology: yup.string().required('Selecciona que es lo que interesa de la metodología'),
    want: yup.string().required('Selecciona la respuesta que se identifique contigo'),
    withdrawal: yup.string().required('Selecciona la respuesta que se identifique contigo').oneOf(['retirarme del colegio', 'Tener actividades extracurriculares / empieza a fallar en algunas materias', 'Disponibilidad de tiempo', 'Conectividad', 'Ninguna de las anteriores'], 'Selecciona la respuesta que se identifique contigo'),
})

export const logicSchema = yup.object().shape({
    logic1: yup.string().required('Selecciona la respuesta que creas correcta').oneOf(['El orden de llegada es B, C, D, A', 'El orden de llegada es B, A, C, D', 'El orden de llegada es B, D, C, A', 'El orden de llegada es A, B, D, A'], 'Selecciona la respuesta que creas correcta'),
    logic2: yup.string().required('Selecciona la respuesta que creas correcta').oneOf(['Seis tiburones no son completamente ciegos y tres son completamente ciegos', 'Tres de los tiburones son completamente ciegos y tres no son completamente', 'Tres tiburones no son completamente ciegos y seis son completamente ciegos'], 'Selecciona la respuesta que creas correcta'),
    logic3: yup.string().required('Selecciona la respuesta que creas correcta'),
    logic4: yup.string().required('Selecciona la respuesta que creas correcta'),
})

