import React from "react";
import { useNavigate } from "react-router-dom";

const UnauthorizedWindow = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen bg-yellow/30">
        <div className="h-full m-auto flex items-center">
            <section className="w-10/12 md:w-8/12 m-auto grid grid-row justify-items-center py-8 md:py-16 bg-light border-4 border-yellow rounded shadow-lg shadow-yellow/50">
            <div className="px-7 md:px-24 grid content-end font-Nunito font-bold text-lg md:text-3xl text-dark text-center">
                <h1>¡No estás autorizado!</h1>
                <h2 className="font-medium text-base md:text-xl pt-4">
                No cuenta con las credenciales necesarias para acceder a esta sección
                </h2>
            </div>
            <div className="pt-8 px-7 md:px-24 grid content-center md:content-end justify-self-end">
                <button onClick={() => { navigate(-3); }} className="button md:text-2xl" > Regresar </button>
            </div>
            </section>
        </div>
        </div>
    );
};

export default UnauthorizedWindow;
