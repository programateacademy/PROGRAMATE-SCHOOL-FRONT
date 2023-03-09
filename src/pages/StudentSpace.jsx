import React from "react";
import Call from "../components/StudentSpace/CallComp";

const StudentSpace = () => {
  return (
    <main className="container">
      {/* session convocations */}

      <section className="">
        <section className="">
          <h1 className=" font-bold font-Poppins text-md lg:text-3xl">
            Convocatorias abiertas
          </h1>

          <section className="lg:flex lg:justify-around lg:items-center lg:gap-10 text-center">
            <Call />
            <Call />
            <Call />
            <figure className="mx-4 flex flex-col justify-center items-center md:col-start-4 lg:pt-0">
              <h2 className="font-Poppins font-semibold mx-2 mt-10 text-sm md:text-lg lg:text-xl">
                ¿Tienes algún problema o dificultad con tu proceso?
              </h2>
              <p className=" font-Nunito m-2 md:text-lg">
                No dude en contáctarnos estaremos pendiente a darte una pronta
                solución
              </p>
              <button className="bg-yellow shadow-md shadow-dark/50 hover:bg-dark w-32 h-8 rounded text-center text-light font-Poppins font-semibold my-8 md:text-lg">
                Contáctanos
              </button>
              <hr className="border-2 rounded border-yellow w-full my-4 md:my-16" />
              <p className="font-Nunito md:text-lg">
                Agradecemos a nuestros sponsor por brindar apoyo a este programa
              </p>
              <img
                className="my-10"
                src={
                  "https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/brillas-color.png?raw=true"
                }
                alt="logo-brillas"
              />
            </figure>
          </section>
        </section>
      </section>
      <section>
        <section className="mx-2 bg-dark rounded flex flex-col justify-center text-center text-xs md:text-lg lg:text-xl text-light">
          <h1 className="text-start m-6 font-Poppins font-bold">
            Hola "Nombre estudiante"
          </h1>
          <h5>Estas aplicando al programa: Frontend Developer Jr</h5>
          <h6>Tu progreso</h6>
          <p>50%</p>
        </section>
        <section className="mx-2 text-dark">
          <h3>Tu proceso inicia aquí</h3>
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
      </section>
    </main>
  );
};

export default StudentSpace;
