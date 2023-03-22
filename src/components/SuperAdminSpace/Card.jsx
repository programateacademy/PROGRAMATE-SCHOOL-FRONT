import React from 'react'

const Card = ({ tarjeta, index, editarTarjeta, eliminarTarjeta }) => {
    {
        const [perfil, setPerfil] = useState(tarjeta.perfil);
        const [inscriptos, setInscriptos] = useState(tarjeta.inscriptos);
        const [fechaInicio, setFechaInicio] = useState(tarjeta.fechaInicio);
        const [fechaCierre, setFechaCierre] = useState(tarjeta.fechaCierre);
        const [procesoSeleccion, setProcesoSeleccion] = useState(tarjeta.procesoSeleccion);

        const handlePerfilChange = (event) => {
            setPerfil(event.target.value);
        };

        const handleInscriptosChange = (event) => {
            setInscriptos(event.target.value);
        };

        const handleFechaInicioChange = (event) => {
            setFechaInicio(event.target.value);
        };

        const handleFechaCierreChange = (event) => {
            setFechaCierre(event.target.value);
        };

        const handleProcesoSeleccionChange = (event) => {
            setProcesoSeleccion(event.target.value);
        };

        const handleGuardarClick = () => {
            const nuevaTarjeta = {
                perfil,
                inscriptos,
                fechaInicio,
                fechaCierre,
                procesoSeleccion,
            };
            editarTarjeta(index, nuevaTarjeta);
        };

        const handleEliminarClick = () => {
            eliminarTarjeta(index);
        };

        return (
            <div className="tarjeta">
                <label>Perfil:
                    <input type="text" value={perfil} onChange={handlePerfilChange} />
                </label>
                <label>Inscriptos:<input type="text" value={inscriptos} onChange={handleInscriptosChange} />
                </label>
                <label>Fecha de inicio:<input type="date" value={fechaInicio} onChange={handleFechaInicioChange} />
                </label>
                <label>Fecha de cierre:<input type="date" value={fechaCierre} onChange={handleFechaCierreChange} />
                </label>
                <label>Proceso de selección:<textarea value={procesoSeleccion} onChange={handleProcesoSeleccionChange} />
                </label>
                <div>
                    <button onClick={handleGuardarClick}>Guardar</button>
                    <button onClick={handleEliminarClick}>Eliminar</button>
                </div>
            </div>
        );
    };
};