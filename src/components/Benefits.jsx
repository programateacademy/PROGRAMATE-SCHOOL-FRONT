import React from "react";

export const Benefist = () => {
  return (
    <main className="container">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <object className="">
          <h1 className="text-dark m-3 font-bold font-Poppins">
            Beneficios del programa
          </h1>
          <hr className="text-yellow m-2" />
          <p className="m-3 font-light font-Nunito">
            Creemos que la educación cambia vidas
          </p>
        </object>

        <object className="flex justify-center">
          <div className="rounded-full border-[35px] border-yellow/50 w-36 h-36 absolute z-0"></div>
          <div className="w-40 h-40 z-40 m-4">
            <h5 className="text-center text-2xl font-Poppins text-dark  font-bold">
              Cero costo
            </h5>
            <p className="text-center text-sm font-Nunito">
              Buscamos que puedas tener una educación de calidad becado mientras
              terminas tus estudios
            </p>
          </div>
        </object>

        <object className="mx-2">
          <div>
            <h3 className="text-dark m-6 font-bold">
              Comienza YA a estudiar sobre el futuro que es la tecnologia
            </h3>
            <p className="text-center m-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquam ultrices sagittis orci a scelerisque purus semper eget
              duis. Eget sit amet tellus cras adipiscing enim. Ac orci phasellus
              egestas tellus rutrum. Eget arcu dictum varius duis at. Dignissim
              suspendisse in est ante in nibh. Enim sed faucibus turpis in eu mi
              bibendum. Lectus nulla at volutpat diam ut venenatis tellus in.
              Nam aliquam sem et tortor consequat id porta nibh venenatis.
              Pretium vulputate sapien nec sagittis aliquam malesuada bibendum.
              Consectetur libero id faucibus nisl. Tincidunt id aliquet risus
              feugiat.
            </p>
          </div>
        </object>

        <object className="mx-2">
          <div className="">
            <h1 className="font-bold text-2xl mx-12">
              DURACIÓN TOTAL <br />{" "}
              <span className="text-yellow"> 8 MESES</span>
            </h1>
            <p className="text-center m-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <p className="text-center m-2">incididunt ut labore et dolore. </p>{" "}
            <p className="text-center m-2">Aliquam ultrices sagittis orci </p>{" "}
            <p className="text-center m-2">
              purus semper eget duis. Eget sit amet tellus.{" "}
            </p>{" "}
          </div>
        </object>
      </section>
    </main>
  );
};

export default Benefist;
