import React from "react";
import Call from "../components/StudentSpace/CallComp";
import StudentProgress from "../components/StudentSpace/StudentProgress";
import Navbar from '../components/Navbar'

const StudentSpace = () => {
  return (
    <main className="container">
      <Navbar/>
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
          <StudentProgress />
        </section>
      </section>
    </main>
  );
};

export default StudentSpace;