import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Modal({ visible, onClose }) {

    const handleOnClose = (e) => {
        if (e.target.id === 'box')
            onClose()
    }

    if (!visible) return null

    return (
        <div id='box' onClick={handleOnClose} className='fixed inset-0 bg-dark bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>
            <div className='w-10/12 md:w-6/12 max-h-96 my-auto bg-light border-2 border-yellow p-2 rounded-md drop-shadow-2xl overflow-y-auto scrollbar scrollbar-track scrollbar-thumb'>
                <button onClick={onClose} className='w-full mx-auto flex justify-end'><AiFillCloseCircle size={20} className='fill-dark hover:fill-red' /></button>
                <h1 className='w-11/12 md:w-8/12 mx-auto mt-2 py-1 px-2 bg-dark rounded-md font-Poppins font-semibold text-center text-yellow text-base md:text-xl'>
                    POLÍTICAS DE TRATAMIENTO DE INFORMACIÓN PERSONAL DE LA FUNDACIÓN  EDUCAMÁS
                </h1>
                <p className='w-11/12 mx-auto my-4  py-2 px-2  rounded-md font-Poppins text-justify text-xs md:text-sm text-dark'>
                    Este documento establece las políticas de Tratamiento de Información Personal de la
                    Fundación Educamás (de ahora en adelante Educamás), cumpliendo con las disposiciones
                    de la Ley 1581 de 2012 y el Decreto 1377 de 2013, y se describen los mecanismos por medio
                    de los cuales Educamás garantiza un adecuado manejo de los datos personales
                    recolectados y tratados en sus bases de datos, permitiendo a los titulares el ejercicio del
                    derecho de Hábeas Data.<br /><br />
                    <p className='font-Poppins font-semibold'>ALCANCE:</p>
                    La Política de Protección de Datos Personales se aplicará a todas las Bases de Datos y/o
                    archivos que contengan Datos Personales, que sean objeto de tratamiento por EDUCAMÁS
                    como responsable y/o encargado del tratamiento de los mismos.<br /><br />
                    El Tratamiento de los Datos Personales se deberá hacer en los términos, condiciones y
                    alcances mencionados en este documento, en la autorización del Titular y/o en aplicación
                    de las normas especiales cuando proceda alguna excepción legal para hacerlo.<br /><br />

                    <p className='font-Poppins font-semibold'>RESPONSABLE: </p>
                    El responsable del tratamiento de los datos personales y las bases de datos será la
                    Fundación Educamás es una fundación sin ánimo de lucro, domiciliada en la ciudad de
                    Bogotá, constituida el 27 de mayo de 2013, con NIT 900.629.163-8, cuyos datos de contacto
                    son: 
                    <h6 className='mx-auto flex justify-center gap-2'>Correo electrónico:<span className='text-purple underline decoration-2 underline-offset-4'>dpersonales@educamas.com.co</span> </h6><br /><br />
                    <p className='font-Poppins font-semibold'>DEFICIONES:</p>
                    <section className='flex flex-col'>
                        <lu><strong>• Autorización:</strong> Consentimiento previo, expreso e informado del Titular para llevar acabo el Tratamiento de datos personales;</lu>
                        <lu><strong>• Base de Datos:</strong>  Conjunto organizado de datos personales que sea objeto deTratamiento;</lu>
                        <lu><strong>• Dato personal:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables;</lu>
                        <lu><strong>• Dato privado:</strong>  Es el dato que por su naturaleza íntima o reservada sólo es relevante para el titular</lu>
                        <lu><strong>• Datos sensibles:</strong>  Se entiende por datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual y los datos biométricos.</lu>
                        <lu><strong>• Encargado del Tratamiento:</strong>Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del Responsable del Tratamiento;</lu>
                        <lu><strong>• Responsable del Tratamiento:</strong>  Persona natural o jurídica, pública o privada, que porsí misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento delos datos;</lu>
                        <lu><strong>• Titular:</strong>Persona natural cuyos datos personales sean objeto de Tratamiento;</lu>
                        <lu><strong>• Tratamiento:</strong> Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o <strong>supresión.</strong></lu>
                    </section><br /><br />
                    <p className='font-Poppins font-semibold'>AMBITO DE APLICACIÓN:</p>
                    Las políticas de tratamiento de Datos Personales deben ser conocidas y aplicadas por todos
                    los funcionarios, empleados, dependencias, clientes y proveedores de Educamás.<br /><br />
                    <p className='font-Poppins font-semibold'>CONSULTA DE POLÍTICA:</p>
                    Esta política de Protección de Datos Personales estará anunciada, presentada y dispuesta
                    en el sitio web oficial de Educamás “educamas.com.co”, presentando fácil consulta y
                    acceso por parte del público en general.<br /><br />
                    <p className='font-Poppins font-semibold'>CONTENIDO DE LAS BASES DE DATOS</p>
                    En las bases de datos de Educamás se almacena información general como nombre
                    completo, número y tipo de identificación, género, datos de contacto (correo electrónico,
                    dirección física, teléfono fijo, teléfono móvil), edad y estrato socioeconómico. En adición a
                    estos y dependiendo la naturaleza de la base de datos, Educamás puede tener datos
                    específicos requeridos para el tratamiento al que serán sometidos los datos.<br /><br />
                    En las bases de datos de empleados se incluye adicionalmente, información sobre la historia
                    laboral y académica, datos sensibles requeridos por la naturaleza de la relación laboral
                    (fotografía, conformación del grupo familiar, datos biométricos).<br /><br />
                    En las bases de datos se podrá almacenar información sensible con previa autorización de
                    su titular, en cumplimiento de lo establecido en los artículos 5 y 7 de la ley 1581 de 2012. <br /><br />
                    <p className='font-Poppins font-semibold'>TRATAMIENTO</p>
                    La información que consta en las bases de datos de EDUCAMÁS es sometida a distintas
                    formas de tratamiento, como recolección, intercambio, actualización procesamiento,
                    reproducción, compilación, almacenamiento, uso, sistematización y organización, todos
                    ellos de forma parcial o total en cumplimiento de las finalidades aquí establecidas. La
                    información podrá ser entregada, transmitida o transferida a entidades públicas, socios
                    comerciales, contratistas, afiliados, subsidiarias, únicamente con el fin de cumplir con las
                    finalidades de la base de datos correspondiente. En todo caso, la entrega, transmisión o
                    transferencia se hará previa suscripción de los compromisos que sean necesarios para
                    salvaguardar la confidencialidad de la información. La información personal, incluyendo
                    información sensible, podrá ser transferida, transmitida o entregada a terceros países,
                    independientemente del nivel de seguridad de las normas que regulen el manejo de información personal. En cumplimiento de deberes legales, EDUCAMÁS podrá suministrar la
                    información personal a entidades judiciales o administrativas.<br /><br />
                    EDUCAMÁS velará por el correcto uso de datos personales de menores de edad,
                    garantizando que se cumpla con las exigencias legales aplicables y que todo tratamiento
                    esté previamente autorizado y se encuentre justificado en el interés superior de los menores<br /><br />
                    <p className='font-Poppins font-semibold'>FINALIDAD</p>
                    La información recolectada por EDUCAMÁS tiene como propósito permitir el adecuado
                    desarrollo de su objeto y las actividades asociadas a este y a la relación entre la EDUCAMÁS
                    y los titulares. Además, EDUCAMÁS guarda la información necesaria para dar cumplimiento
                    a deberes legales, principalmente en materia contable, societaria, y laboral.<br /><br />
                    La información sobre clientes, proveedores, socios y empleados, actuales o pasados, se
                    guarda con el fin de facilitar, promover, permitir o mantener relaciones de carácter laboral,
                    civil y comercial.<br /><br />
                    En razón a su actividad, EDUCAMÁS almacena información sobre el personal que ha
                    participado en actividades educativas coordinadas, creadas, directamente o en
                    cooperación con terceros, con el fin de promover sus programas educativos y realizar
                    seguimiento y evaluación a los mismos. La información puede ser conservada con el fin de
                    acreditar ante las entidades públicas o privadas el cumplimiento de programas educativos conjuntos.<br /><br />
                    <p className='font-Poppins font-semibold'>DERECHOS DE LOS TITULARES</p>
                    De conformidad con lo previsto en el artículo 8 de la ley 1581 de 2012, los titulares podrán:
                    <section className='flex flex-col'>
                        <lu>• Conocer, actualizar y rectificar sus datos personales que están siendo tratados por
                            EDUCAMÁS. Este derecho se podrá ejercer, entre otros frente a datos parciales,
                            inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo
                            Tratamiento esté expresamente prohibido o no haya sido autorizado.</lu>
                        <lu>• Solicitar prueba de la autorización otorgada a EDUCAMÁS, salvo cuando
                            expresamente se exceptúe como requisito para el Tratamiento, de conformidad
                            con lo previsto en el artículo 10 de la presente ley.</lu>
                        <lu>• Ser informado por EDUCAMÁS, previa solicitud, respecto del uso que les ha dado a sus datos personales.</lu>
                        <lu>• Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones
                            a lo dispuesto en la ley y las demás normas que la modifiquen, adicionen o complementen.</lu>
                        <lu>• Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento
                            no se respeten los principios, derechos y garantías constitucionales y legales. La
                            revocatoria y/o supresión procederá cuando la Superintendencia de Industria y
                            Comercio haya determinado que la ENTIDAD o el Encargado ha incurrido en conductas contrarias a esta ley y a la Constitución.</lu>
                        <lu>• Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento.</lu>
                    </section> <br /><br />
                    <p className='font-Poppins font-semibold'>OBLIGACIONES DE LA ENTIDAD</p><br />
                    De conformidad con lo previsto en el artículo 8 de la ley 1581 de 2012, los titulares podrán:
                    <section className='flex flex-col'>
                        <lu>• Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeas data.</lu>
                        <lu>• Solicitar y conservar, en las condiciones previstas en la ley, copia de la respectiva autorización otorgada por el Titular.</lu>
                        <lu>• Informar debidamente al Titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada.</lu>
                        <lu>• Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento</lu>
                        <lu>• Actualizar la información, comunicando de forma oportuna al Encargado del Tratamiento, todas las novedades respecto de los datos que previamente le haya suministrado y adoptar las demás medidas necesarias para que la información suministrada a este se mantenga actualizada.</lu>
                        <lu>• Rectificar la información cuando sea incorrecta y comunicar lo pertinente al Encargado.</lu>
                        <lu>• Suministrar al Encargado, según el caso, únicamente datos cuyo Tratamiento esté previamente autorizado de conformidad con lo previsto en la presente ley.</lu>
                        <lu>• Exigir al Encargado en todo momento, el respeto a las condiciones de seguridad y privacidad de la información del Titular.</lu>
                        <lu>• Tramitar las consultas y reclamos formulados en los términos señalados en la presente ley.</lu>
                        <lu>• Informar al Encargado cuando determinada información se encuentra en discusión por parte del Titular, una vez se haya presentado la reclamación y no haya finalizado el trámite respectivo.</lu>
                        <lu>• Informar a solicitud del Titular sobre el uso dado a sus datos.</lu>
                        <lu>• Informar a la autoridad de protección de datos cuando se presenten violaciones a  los códigos de seguridad y existan riesgos en la administración de la información de los Titulares</lu>
                        <lu>• Cumplir las instrucciones y requerimientos que imparta la Superintendencia de  Industria y Comercio.</lu>
                    </section><br />
                    <p className='font-Poppins font-semibold'>PERSONA O ÁREA RESPONSABLE</p><br />
                    El área Responsable del Tratamiento de los datos personales será la Dirección Ejecutiva. En
                    consecuencia, toda petición, queja o reclamo relacionada con el manejo de datos
                    personales, en aplicación de lo previsto en la Ley 1581 de 2012 y el Decreto 1377 de 2013,
                    deberá enviarse a:<br /><br />
                    <section className='flex flex-col'>
                        <lu className='mx-auto flex gap-2'><strong>Entidad:</strong>Fundación Educamás</lu>
                        <lu className='mx-auto flex gap-2'><strong>Dependencia:</strong>Dirección Ejecutiva</lu>
                        <lu className='mx-auto flex gap-2'><strong>Correo electrónico:</strong><h6 className='text-purple underline decoration-2 underline-offset-4'>dpersonales@educamas.com.co</h6></lu>
                    </section><br /><br />
                    <p className='font-Poppins font-semibold'>FUNCIONES DEL ÁREA RESPONSABLE DEL TRATAMIENTO DE DATOS PERSONALES:</p>  <br />
                    El área responsables del tratamiento de datos personales tiene les siguientes funciones:<br /><br />
                    <section className='flex flex-col'>
                        <lu>1. Garantizar la implementación y promoción de la presente política de tratamiento de datos personales.</lu>
                        <lu>2. Fomentar una cultura de protección de datos dentro de EDUCAMÁS.</lu>
                        <lu>3. Integrar las demás áreas de EDUCAMÁS para asegurar la implementación la presente política.</lu>
                        <lu>4. Verificar las Bases de Datos de EDUCAMÁS y actualizarlas.</lu>
                        <lu>5. Analizar y diagnosticar las responsabilidades de los cargos dentro de EDUCAMÁS, generando un programa de capacitación en la protección de datos personales.</lu>
                        <lu>6. Capacitar a los nuevos empleados que por las condiciones de su trabajo, tengan acceso a las Bases de Datos.</lu>
                        <lu>7. Verificar el cumplimiento de las políticas de tratamiento de datos personales.</lu>
                        <lu>8. Designar a una persona del equipo para que sea el responsable de ejecutar estas funciones.</lu>
                    </section><br /><br />
                    <p className='font-Poppins font-semibold'>PROCEDIMIENTOS DE PRESENTACIÓN Y RESPUESTA A DE CONSULTAS</p><br />
                    Los titulares de datos personales que consten en las bases de datos de EDUCAMÁS, o sus
                    causahabientes, podrán consultar los datos que suministrará la información en los términos
                    previstos en la legislación aplicable. Toda solicitud de consulta, corrección, actualización o
                    supresión deberá presentarse por escrito o por correo electrónico, de acuerdo a la
                    información contenida en este documento.
                    Las consultas serán atendidas en un término de diez (10) días hábiles contados a partir de
                    la fecha de recibo de la respectiva solicitud. Cuando no fuere posible atender la consulta
                    dentro de dicho término, se informará al interesado, expresando los motivos de la demora
                    y señalando la fecha en que se atenderá su consulta, la cual en ningún caso podrá superar
                    los cinco (5) días hábiles siguientes al vencimiento del primer término.<br /><br />
                    <p className='font-Poppins font-semibold'>PROCEDIMIENTOS DE PRESENTACIÓN Y RESPUESTA A DE CONSULTAS QUEJAS Y RECLAMOS</p><br />
                    Los reclamos deberán ser formulados por escrito o por correo electrónico, de acuerdo con
                    la información contenida en este documento, y deberán contener, al menos, la siguiente información:<br /><br />
                    <section className='flex flex-col'>
                        <lu>• Identificación del Titular</lu>
                        <lu>• Descripción de los hechos que dan lugar al reclamo</lu>
                        <lu>• Datos de contacto del titular como lo son, Dirección, domicilio, teléfono y correo electrónico del titular</lu>
                        <lu>• Documentación que se quiera presentar como prueba</lu>
                    </section><br /><br />
                    Si el reclamo resulta incompleto, se requerirá al interesado dentro de los cinco (5) días
                    siguientes a la recepción del reclamo para que subsane las fallas. Transcurridos dos (2)
                    meses desde la fecha del requerimiento, sin que el solicitante presente la información
                    requerida, se entenderá que ha desistido del reclamo.<br /><br />
                    En caso de que quien reciba el reclamo no sea competente para resolverlo, dará traslado
                    a quien corresponda en un término máximo de dos (2) días hábiles e informará de la
                    situación al interesado.<br />
                    Una vez recibido el reclamo completo, se incluirá en la base de datos una leyenda que
                    diga "reclamo en trámite" y el motivo de este, en un término no mayor a dos (2) días hábiles.
                    Dicha leyenda deberá mantenerse hasta que el reclamo sea decidido.<br /><br />
                    El término máximo para atender el reclamo será de quince (15) días hábiles contados a
                    partir del día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo
                    dentro de dicho término, se informará al interesado los motivos de la demora y la fecha en
                    que se atenderá su reclamo, la cual en ningún caso podrá superar los ocho (8) días hábiles
                    siguientes al vencimiento del primer término.<br /><br />
                    <p className='font-Poppins font-semibold'>REVOCAR LA AUTORIZACIÓN PARA TRATAR LOS DATOS PERSONALES:</p><br />
                    En cualquier momento el titular de los Datos Personales puede revocar la autorización para
                    el tratamiento de sus Datos Personales suministrados. Para ello debe gestionar la solicitud
                    dirigida al responsable del tratamiento, detallando el objeto de su solicitud.<br /><br />
                    El Titular de los Datos Personales para poder gestionar la revocatoria, debe llevar a cabo los
                    mismos pasos y requisitos consagrados en el procedimiento para consultas, quejas y
                    reclamos.<br /><br />
                    <p className='font-Poppins font-semibold'>MARCO NORMATIVO Y LEGAL:</p><br />
                    Las políticas de protección de Datos Personales de EDUCAMÁS se rigen por las siguientes
                    normas:<br /><br />
                    <section className='flex flex-col'>
                        <lu>LEY 527 DE 1999</lu>
                        <lu>LEY 1266 DE 2008</lu>
                        <lu>LEY 1273 DE 2009</lu>
                        <lu>LEY 1581 DE 2012</lu>
                        <lu>DECRETO 1377 DE 2013</lu>
                        <lu>DECRETO 886 DE 2014</lu>
                    </section><br /><br />
                    <p className='font-Poppins font-semibold'>VIGENCIA DE LA BASE DE DATOS</p><br />
                    Las Políticas de Tratamiento de Información Personal de la EDUCAMÁS estarán vigentes a
                    partir del día veintisiete (27) de julio de 2021. EDUCAMÁS se reserva el derecho a
                    modificarlas, en los términos y con las limitaciones previstas en la ley.<br /><br />
                    Las bases de datos administradas por EDUCAMÁS se mantendrán indefinidamente, mientras
                    desarrolle su objeto, y mientras sea necesario para asegurar el cumplimiento de
                    obligaciones de carácter legal, particularmente laboral y contable, pero los datos podrán
                    ser eliminados en cualquier momento a solicitud de su titular, en tanto esta solicitud no
                    contraríe una obligación legal de EDUCAMÁS o una obligación contenida en un contrato
                    entre EDUCAMÁS y el Titular.</p>
                <div className='grid grid-cols pb-4'>
                    {/* <button className='flex mx-auto px-6 py-1 bg-dark shadow-md shadow-dark/50 hover:bg-purple text-center text-yellow hover:text-light text-sm font-Poppins font-medium'>Aceptar</button> */}
                    <button onClick={onClose} className='flex mx-auto px-6 py-1 rounded bg-dark shadow-md shadow-dark/50 hover:bg-red text-center text-yellow hover:text-light font-Poppins font-medium'>Cerrar</button>
                </div>
            </div>
        </div>
    );
};