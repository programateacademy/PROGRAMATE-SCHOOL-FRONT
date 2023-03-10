import * as yup from "yup";

export const basicShema = yup.object().shape({
    addressStudent: yup.string().required('ingresa tu direccion'),
    departamentoStudent: yup.string().required('ingresa el departamento donde vives'),
    rural: yup.string().required('selecciona si vives en zona rural o no'),
    bogota: yup.string().required('si vives en Bogotá selecciona la localidad y si no selecciona ninguna'),
    stratum: yup.string().required('ingresa tu estrato según un recibo de servicio publico'),
})