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

      <section className="md:grid md:grid-cols-2">
        {/*Program benefits*/}
        <div className="mt-14 mx-4">
          <h1 className="pb-4 text-dark font-bold font-Poppins text-2xl text-center md:text-start">Beneficios del programa</h1>
          <hr className="md:w-[50%] border-2 border-yellow rounded"/>
          <p className="md:w-[50%] pt-4 font-light font-Nunito text-base text-center md:text-start  lg:text-xl">Creemos que la educación cambia vidas</p>
        </div>

        {/*...*/}
        <div className="mx-4 mt-14 md:grid md:grid-cols-2 gap-10">
          <figure className="flex items-center">
            <h2 className="w-[80%] md:w-[100%] xl:w-[70%] m-auto mb-7 md:m-auto py-1.5 md:py-1 text-center text-lg font-Nunito font-bold bg-[url('https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/SesentaYDos.png?raw=true')] bg-center bg-contain bg-no-repeat"><b>62</b> Estudiantes han sido beneficiarios de la formación de <b>Prográmate School</b></h2>
          </figure>
          <figure className="flex items-center">
            <h2 className="w-[80%] md:w-[100%] xl:w-[60%] m-auto mb-7 md:m-auto py-8 md:py-5 text-center text-lg font-Nunito font-bold bg-[url('https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/3%25.png?raw=true')] bg-center bg-contain bg-no-repeat"><b>3%</b> Deserción durante el proceso formativo</h2>
          </figure>
        </div>
      </section>

      {/*...*/}
      <section className="mx-4 md:mt-14 md:grid md:grid-cols-4 gap-10">
        <figure className="flex items-center">
          <h2 className="w-[80%] md:w-[100%] xl:w-[60%] m-auto mb-7 md:m-auto py-8 text-center text-lg font-Nunito font-bold bg-[url('https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/45%25.png?raw=true')] bg-center bg-contain bg-no-repeat"><b>45%</b> Estudiantes han sido mujeres</h2>
        </figure>
        <figure className="flex items-center">
          <h2 className="w-[80%] md:w-[100%] xl:w-[60%] m-auto mb-7 md:m-auto py-5 text-center text-lg font-Nunito font-bold bg-[url('https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/5%25.png?raw=true')] bg-center bg-contain bg-no-repeat"><b>5%</b> Estudiantes migrantes en Colombia</h2>
        </figure>
        <figure className="flex items-center">
          <h2 className="w-[80%] md:w-[100%] xl:w-[60%] m-auto mb-7 md:m-auto py-1.5 text-center text-lg font-Nunito font-bold bg-[url('https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/100%25.png?raw=true')] bg-center bg-contain bg-no-repeat"><b>100%</b> Estratos<br/>1, 2 y 3 pertenecientes a colegios públicos</h2>
        </figure>
        <figure className="flex items-center">
          <h2 className="w-[80%] md:w-[100%] xl:w-[60%] m-auto mb-7 md:m-auto py-5 md:py-1 text-center text-lg font-Nunito font-bold bg-[url('https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/34%25.png?raw=true')] bg-center bg-contain bg-no-repeat"><b>34%</b> Reciben auxilio de conectividad a internet</h2>
        </figure>
        <figure className="flex items-center">
          <h2 className="w-[80%] md:w-[100%] xl:w-[60%] m-auto mb-7 md:m-auto py-5 md:py-1 text-center text-lg font-Nunito font-bold bg-[url('https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/Cero.png?raw=true')] bg-center bg-contain bg-no-repeat"><b>Cero costo</b> Buscamos que tengas educación de calidad becado</h2>
        </figure>
        <figure className="flex items-center">
          <h2 className="w-[80%] md:w-[100%] xl:w-[60%] m-auto mb-7 md:m-auto py-1 text-center text-lg font-Nunito font-bold bg-[url('https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/58%25.png?raw=true')] bg-center bg-contain bg-no-repeat"><b>58%</b> Estudiantes en regiones fuera de Bogotá, Santa Marta e Ibagué</h2>
        </figure>
        <figure className="flex items-center">
          <h2 className="w-[80%] md:w-[100%] xl:w-[60%] m-auto mb-7 md:m-auto py-5 text-center text-lg font-Nunito font-bold bg-[url('https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/48%25.png?raw=true')] bg-center bg-contain bg-no-repeat"><b>48%</b> Estudiantes reciben apoyo con un computador</h2>
        </figure>
        <figure className="flex items-center">
          <h2 className="w-[80%] md:w-[100%] xl:w-[60%] m-auto mb-7 md:m-auto py-8 md:py-5  text-center text-lg font-Nunito font-bold bg-[url('https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/Diecisiete.png?raw=true')] bg-center bg-contain bg-no-repeat"><b>17 años</b> Promedio de edad de la cohorte</h2>
        </figure>
      </section>

        <section className="md:grid md:grid-cols-5 md:gap-8 my-14">

          {/*Program duration*/}
          <object className="md:col-span-2">
            <h1 className="font-bold mx-4 font-Poppins text-2xl">
              PROPUESTA PROGRAMÁTICA  <br />
              <span className="text-yellow">2023</span>
            </h1>
            <p className="text-left mx-4 py-8 font-Nunito md:text-lg">
              <strong className="text-yellow">Duración:</strong><h5>5 meses (posibilidad de tener 2 cohortes o más por año)</h5><br />
              <strong className="text-yellow">Número de horas:</strong><h5>250 horas (200 horas técnicas y de acompañamiento vocacional+50 horas de inglés)</h5><br />
              <strong className="text-yellow">Horario:</strong><h5>Lunes, martes, miércoles y viernes de 3:00 pm a 6:00 pm o 6:30 pm</h5><br />
              <strong className="text-yellow">Requisitos:</strong><h5>Interés por la tecnología y contar con una mente analítica</h5><br />
              <strong className="text-yellow">Modalidad:</strong><h5>100% remoto sincrónico (clases en vivo)</h5><br />
              <strong className="text-yellow">Título otorgado:</strong><h5>Certificación de competencias como Desarrollador web front end nivel junior</h5><br />
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
          <object className="md:col-span-3 md:ml-8">
            <h3 className="text-dark mt-8 md:mt-0 mx-4 font-bold font-Poppins text-2xl text-right">
              DESARROLLO WEB FRONT END </h3>
            <p className="mx-4 mt-8 font-Nunito lg:text-lg text-right">
              Adquirirás las destrezas necesarias para desempeñarse como Desarrollador Web Frontend, a  través de lenguajes de programación de vanguardia que permitirán páginas web y plataformas digitales innovadoras. <br /><br />
                <strong className="text-yellow">Front end:</strong><h4>Creación de interfaces web  a partir del diseño y la experiencia de usuario</h4> <br /> 
                <strong className="text-yellow">Sitios web:</strong><h4>Creación de contenido, incluyendo textos  gráficos,  animaciones entre otros, que permitan navegar de forma  funcional en el entorno web.</h4> <br />
                <strong className="text-yellow">Aplicaciones web:</strong><h4>Creación de contenido  basado en la  experiencia de usuario para mejorar la navegabilidad.</h4>
              <br />

              
              De igual forma, adquirirás habilidades innovadoras como la comunicación asertiva, el trabajo en equipo, el liderazgo, la resolución de problemas y autogestión, con lo cuál fomentamos que tengas un perfil de salida integral que te permitirá destacarte en el entorno laboral. 
            </p>
          </object>
        </section>
    </main>
  );
};

export default Benefist;