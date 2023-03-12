import React from "react";

const StudentProgress = () => {
  return (
    <main>
      <section className="mx-2 bg-dark rounded flex flex-col justify-center text-center text-xs md:text-lg lg:text-xl text-light">
        <h1 className="text-start m-6 font-Poppins font-bold">Hola "Nombre estudiante"</h1>
        <h5 className="text-yellow font-Poppins font-bold mx-10">Estas aplicando al programa: Frontend Developer Jr</h5>
        <h6 className="text-start m-4 mb-2 font-bold font-Poppins">Tu progreso</h6>
        <div className=" flex items-center mx-2 bg-white rounded-full h-2.5 dark:white">
          <div className="bg-purple w-[50%] h-[7px] rounded-full"></div>
        </div>
        <p className="font-semibold font-Poppins m-4 text-end mt-0">50%</p>
      </section>
      <section className="mx-2 text-dark">
        <h3 className="font-bold font-Poppins mt-4">Tu proceso inicia aquí</h3>
        <div>
          <h2>Fase 1: Registro en la plataforma</h2>
          <p></p>
        </div>
        <div>
          <h2>Fase 2: Cuentanos un poco sobre ti queremos conocerte</h2>
          <p></p>
        </div>
        <div>
          <h2>Fase 3: Prueba tecnica</h2>
          <p></p>
        </div>
      </section>
    </main>
  );
};

export default StudentProgress;
