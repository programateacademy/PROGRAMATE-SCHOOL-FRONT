import React from "react";
import { StudentPhases } from "./StudentPhases";

const StudentProgress = () => {
  return (
    <main>
      <section className="mx-2 bg-dark rounded flex flex-col justify-center text-center text-xs md:text-lg lg:text-xl text-light lg:w-9/12">
        <h1 className="text-start m-6 font-Poppins font-bold md:text-lg lg:text-2xl">Hola "Nombre estudiante"</h1>
        <h5 className="text-yellow font-Poppins font-bold mx-10 md:text-lg lg:text-2xl">Estas aplicando al programa: Frontend Developer Jr</h5>
        <h6 className="text-start m-4 mb-2 font-bold font-Poppins md:text-lg lg:text-2xl">Tu progreso</h6>
        <div className=" flex items-center mx-4 bg-white rounded-full h-2.5 dark:white">
          <div className="bg-purple w-[50%] h-[6px] rounded-full mx-1"></div>
        </div>
        <p className="font-semibold font-Poppins m-4 text-end mt-0 md:text-lg lg:text-2xl">50%</p>
      </section>
      <section className="mx-2 text-dark">
        <h3 className="font-bold font-Poppins my-6 md:text-lg lg:text-2xl md:ml-16 lg:ml-0">Tu proceso inicia aquí</h3>
      </section>
      <StudentPhases />
    </main>
  );
};

export default StudentProgress;
