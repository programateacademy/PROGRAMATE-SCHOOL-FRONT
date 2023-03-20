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
              DURACIÓN TOTAL <br />
              <span className="text-yellow">8 MESES</span>
            </h1>
            <p className="text-left mx-4 py-8 font-Nunito md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.<br /> <br />
              incididunt ut labore et dolore.<br /> <br />
              Aliquam ultrices sagittis orci<br /> <br />
              purus semper eget duis. Eget sit amet tellus.<br /> <br />
              <span className="text-yellow">Ac orci phasellus egestas</span>
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
            <h3 className="text-dark mt-8 md:mt-0 mx-4 font-bold font-Poppins text-2xl text-right">Comienza YA a estudiar sobre el futuro que es la tecnologia</h3>
            <p className="mx-4 mt-8 font-Nunito lg:text-lg text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Eget sit amet tellus cras adipiscing enim. Ac orciphasellus egestas tellus rutrum. Eget arcu dictum varius duisat. Dignissim suspendisse in est ante in nibh. Enim sed faucibusturpis in eu mi bibendum. Lectus nulla at volutpat diam utvenenatis tellus in. Nam aliquam sem et tortor consequat idporta nibh venenatis. Pretium vulputate sapien nec sagittisaliquam malesuada bibendum. Consectetur libero id faucibus nisl.Tincidunt id aliquet risus feugiat.<br /> <br />Viverra nam libero justo laoreet. Purus ut faucibus pulvinar elementum integer enim. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Ac tincidunt vitae semper quis. Donec ultrices tincidunt arcu non sodales neque sodales. Sodales ut etiam sit amet nisl purus in. Donec ac odio tempor orci dapibus ultrices in.</p>
          </object>
        </section>
      </section>
    </main>
  );
};

export default Benefist;