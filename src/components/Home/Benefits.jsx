import React from "react";

export const Benefist = () => {
  return (
    <main className="mx-6 md:mx-12 pt-6">
      {/*beneficios que optiene el programa*/}

      <section className="">
        <object className="md:my-10 md:absolute lg:my-20 lg:items-center lg:absolute">
          <h1 className="text-dark mx-4 pb-4 font-bold font-Poppins text-lg md:text-2xl lg:text-3xl">
            Beneficios del programa
          </h1>
          <hr className="border-2 border-yellow w-48 ml-4 lg:w-64"/>
          <p className="mx-4 pt-4 pb-6 font-light font-Nunito text-base lg:text-xl">
            Creemos que la educación cambia vidas
          </p>
        </object>

        <object className="md:grid md:grid-cols-3 md:pt-36 lg:grid lg:grid-cols-3 lg:pt-40">
          <figure className="flex justify-center md:pt-10 lg:pt-16 pb-4 lg:pb-0">
            <div className="rounded-full border-[35px] border-yellow/50 w-36 h-36 absolute z-0"></div>
            <div className="w-40 h-30 z-40 m-4">
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
            <div className="w-40 h-30 z-40 m-4">
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
            <div className="w-40 h-30 z-40 m-4">
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

        {/*Tiempo de duración del programa*/}

        <object className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <object className="">
            <div className="lg:my-16">
              <h1 className="font-bold mx-4 pt-10 font-Poppins lg:py-16 text-lg md:text-2xl lg:text-3xl">
                DURACIÓN TOTAL <br />
                <span className="text-yellow"> 8 MESES</span>
              </h1>
              <p className="text-left mx-4 py-6 font-Nunito md:my-6 md:text-lg lg:my-8 lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.<br/> <br/>
              
                incididunt ut labore et dolore.<br/> <br/>
                
                Aliquam ultrices sagittis orci<br/> <br/>
                
                purus semper eget duis. Eget sit amet tellus.<br/> <br/>
                
                <span className="text-yellow">Ac orci phasellus egestas</span>
              </p>
            </div>

            <object className="flex justify-around items-center">
              <article>
                <img
                  src={
                    "https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/educamas-color.png?raw=true"
                  }
                  alt="Logo-Educamas"
                />
              </article>
              <article>
                <img
                  src={
                    "https://github.com/MariaHerrera03/ImageBank/blob/main/Progr%C3%A1mateSchool/brillas-color.png?raw=true"
                  }
                  alt="logo-brillas"
                />
              </article>
            </object>

            {/*Boton para aplicar en el programa*/}

            <object>
              <article className="flex justify-center pt-8 pb-1">
                <button className="flex mx-auto px-6 py-1 bg-yellow shadow-md shadow-dark/50 hover:bg-dark text-center text-light text-sm font-Poppins font-medium">
                  Aplicar Ahora!
                </button>
              </article>
            </object>
          </object>

          {/*logos del programa*/}

          {/*Descripción del programa...*/}

          <object className="mx-2 ">
            <div>
              <h3 className="text-dark mx-4 font-bold font-Poppins pt-10 lg:py-28 text-lg md:text-2xl lg:text-3xl text-right">
                Comienza YA a estudiar sobre el futuro que es la tecnologia
              </h3>
              <p className="m-4 font-Nunito lg:text-lg text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Aliquam ultrices sagittis orci a scelerisque purus semper eget
                duis. Eget sit amet tellus cras adipiscing enim. Ac orci
                phasellus egestas tellus rutrum. Eget arcu dictum varius duis
                at. Dignissim suspendisse in est ante in nibh. Enim sed faucibus
                turpis in eu mi bibendum. Lectus nulla at volutpat diam ut
                venenatis tellus in. Nam aliquam sem et tortor consequat id
                porta nibh venenatis. Pretium vulputate sapien nec sagittis
                aliquam malesuada bibendum. Consectetur libero id faucibus nisl.
                Tincidunt id aliquet risus feugiat.<br/> <br/>
                Viverra nam libero justo laoreet. Purus ut faucibus pulvinar elementum integer enim. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Ac tincidunt vitae semper quis. Donec ultrices tincidunt arcu non sodales neque sodales. Sodales ut etiam sit amet nisl purus in. Donec ac odio tempor orci dapibus ultrices in. 
              </p>
            </div>
          </object>
        </object>
      </section>
    </main>
  );
};

export default Benefist;
