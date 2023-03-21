import React from "react";

const StudentProgress = () => {
  return (
    <main>
      <section className="mx-4 bg-dark rounded flex flex-col justify-center text-lg lg:text-2xl text-light text-start font-Poppins font-semibold md:text-xl">
        <h1 className="mx-6 my-6">Hola "Nombre estudiante"</h1>
        <h2 className="mx-6 mb-6 text-yellow">Estás aplicando al programa: Frontend Developer Jr</h2>
        <h2 className="mx-6 mb-3 text-sm md:text-lg">Tu progreso</h2>
        <div className="flex items-center mx-6 bg-white rounded-full h-2 md:h-4 dark:white">
          <div className="bg-purple w-[50%] h-1 md:h-2 rounded-full mx-1"></div>
        </div>
        <p className="mx-6 mt-3 mb-6 text-end text-sm">50%</p>
      </section>
      <section className="mx-2 text-dark">
        <h3 className="font-bold font-Poppins my-6 md:text-lg lg:text-2xl md:ml-16 lg:ml-0">Tu proceso inicia aquí</h3>
      </section>
    </main>
  );
};

export default StudentProgress;