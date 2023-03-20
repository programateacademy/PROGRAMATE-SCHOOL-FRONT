import React from "react";
import { Link } from 'react-router-dom';

export const Benefist = () => {
  return (

    <main className="mx-6 md:mx-24">
      <section className="flex items-end justify-end absolute right-4">
        <Link to="/Login" >
          <button className="button fixed bottom-4 right-4 z-40 border-2 border-dark">Participa ya!</button>
        </Link>
      </section>

      {/*Program benefits*/}
      <section className="">
        <object className="mt-14 mb-10 md:absolute lg:items-center lg:absolute">
          <h1 className="text-dark mx-4 pb-4 font-bold font-Poppins text-2xl">
            Beneficios del programa
          </h1>
          <hr className="border-2 border-yellow w-48 ml-4 lg:w-64" />
          <p className="mx-4 pt-4 pb-6 font-light font-Nunito text-base lg:text-xl">
            Creemos que la educación<br />cambia vidas
          </p>
        </object>
        <object className="md:grid md:grid-cols-3 md:pt-36 lg:grid lg:grid-cols-3 lg:pt-40">
          <figure className="flex justify-center md:pt-10 lg:pt-16 pb-4 lg:pb-0">
            <div className="rounded-full border-[35px] border-yellow/50 w-36 h-36 absolute z-0"></div>
            <div className="w-40 h-30 z-20 m-4">
              <h5 className="text-center text-2xl font-Poppins text-dark  font-bold">
                Cero costo
              </h5>
              <p className="text-center text-sm font-Nunito">
                Buscamos que puedas tener una educación de calidad becado
                mientras terminas tus estudios
              </p>
            </div>
          </figure>
          <figure className="flex justify-center lg:pb-16 pb-4">
            <div className="rounded-full border-[35px] border-yellow/50 w-36 h-36 absolute z-0"></div>
            <div className="w-40 h-30 z-20 m-4">
              <h5 className="text-center text-2xl font-Poppins text-dark  font-bold">
                Cero costo
              </h5>
              <p className="text-center text-sm font-Nunito">
                Buscamos que puedas tener una educación de calidad becado
                mientras terminas tus estudios
              </p>
            </div>
          </figure>
          <figure className="flex justify-center md:pt-10 lg:pt-16">
            <div className="rounded-full border-[35px] border-yellow/50 w-36 h-36 absolute z-0"></div>
            <div className="w-40 h-30 z-20 m-4">
              <h5 className="text-center text-2xl font-Poppins text-dark  font-bold">
                Cero costo
              </h5>
              <p className="text-center text-sm font-Nunito">
                Buscamos que puedas tener una educación de calidad becado
                mientras terminas tus estudios
              </p>
            </div>
          </figure>
        </object>
        <object>
          <h2 className="w-full mx-auto py-4 text-center text-dark font-semibold font-Poppins text-lg">Escribir aquí</h2>
        </object>
        <section className="md:grid md:grid-cols-3 my-14">

          {/*Program duration*/}
          <object className="md:col-span-1">
            <h1 className="font-bold mx-4 font-Poppins text-2xl">
              PROPUESTA PROGRAMÁTICA  <br />
              <span className="text-yellow">2023</span>
            </h1>
            <p className="text-left mx-4 py-8 font-Nunito md:text-lg">
              <strong>Duración:</strong>5 meses (posibilidad de tener 2 cohortes o más por año )<br /> <br />
              <strong>Número de horas:</strong>250 horas (200 horas técnicas y de acompañamiento vocacional+50 horas de inglés)<br /> <br />
              <strong>Horario:</strong>lunes, martes, miércoles y viernes de 3:00 pm a 6:00 pm o 6:30 pm<br /> <br />
              <strong>Requisitos:</strong>Interés por la tecnología y contar con una mente analítica<br /> <br />
              <strong>Modalidad:</strong>100% remoto sincrónico (clases en vivo)<br /> <br />
              <strong>Título otorgado:</strong>Certificación de competencias como Desarrollador web front end nivel junior<br /> <br />
            </p>
            
            {/*Program logos*/}
            <article className="flex justify-around pb-9">
              <img src={"https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/educamas-color.png?raw=true"} width={100} alt="Logo-Educamas" />
              <img src={"https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/brillas-color.png?raw=true"} width={100} alt="logo-brillas" />
            </article>
            {/*Button to apply to the program*/}
            <article className="pb-2">
              <Link to="/Login">
                <button className="flex button">
                  Aplicar Ahora!</button>
              </Link>
            </article>
          </object>
          
          {/*Program description...*/}
          <object className="md:col-span-2 md:ml-20">
            <h3 className="text-dark mt-8 md:mt-0 mx-4 font-bold font-Poppins text-2xl text-right">
              DESARROLLO WEB FRONT END </h3>
            <p className="mx-4 mt-8 font-Nunito lg:text-lg text-right">
              Adquirirás las destrezas necesarias para desempeñarse como Desarrollador Web Frontend, a  través de lenguajes de programación de vanguardia que permitirán páginas web y plataformas digitales innovadoras. <br />
                <strong>Front end:</strong>Creación de interfaces web  a partir del diseño y la experiencia de usuario <br /> 
                <strong>Sitios web:</strong>Creación de contenido, incluyendo textos  gráficos,  animaciones entre otros, que permitan navegar de forma  funcional en el entorno web. <br />
                <strong>Aplicaciones web</strong>Creación de contenido  basado en la  experiencia de usuario para mejorar la navegabilidad. <br />
              <br />
              De igual forma, adquirirás habilidades innovadoras como la comunicación asertiva, el trabajo en equipo, el liderazgo, la resolución de problemas y autogestión, con lo cuál fomentamos que tengas un perfil de salida integral que te permitirá destacarte en el entorno laboral. 
            </p>
          </object>
        </section>
      </section>
    </main>
  );
};

export default Benefist;