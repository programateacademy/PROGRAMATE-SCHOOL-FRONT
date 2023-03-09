import { React, useState } from "react";

const CallComp = () => {
  /*    function fillId(id) {
    const numerator = 0;
    const denominator = 6;
    const fraction = numerator + "/" + denominator;

    document.getElementById(id).innerHTML = fraction;
    const interval = setInterval(function () {
      numerator++;
      if (numerator > denominator) {
        clearInterval(interval);
      } else {
        fraction = numerator + "/" + denominator;
        document.getElementById(id).innerHTML = fraction;
      }
    });

    function apply() {
      var progress = 0;
      var applyButton = document.getElementById("applyButton");
      applyButton.innerHTML = "Continue (" + progress + "0/6)";

      applyButton.onclick = function () {
        if (progress < 6) {
          progress++;
          applyButton.innerHTML = "Continue (" + progress + "6/6)";
        } else {
          alert("Process complete!");
        }
      };
    }
  }

  fillId("Numbers");
 */
  return (
    <main className="m-auto w-11/12 lg:w-7/12 shadow shadow-yellow/70 rounded">
      <section>
        <section className="mt-12 md:mt-0">
          <h1 className="font-bold font-Poppins lg:text-xl pt-5 m-4 mr-6 text-start">
            Desarrollador Frontend Web Jr
          </h1>

          <figure className="lg:flex lg:flex-col lg:justify-around lg:items-center">
            <p className="font-nonito my-4 lg:text-lg">
              Estado de la aplicación{" "}
              <span className="text-dark font-bold ml-12 lg:ml-0">
                En progreso
              </span>
            </p>
            <p className="mx-2 font-nonito my-4 lg:my-4 lg:text-lg">
              Etapas de la selección{" "}
              <span id="Numbers" className="text-dark font-bold ml-20 md:ml-12">
                0/6
              </span>
            </p>
          </figure>
          <hr className="mx-4 border-1 rounded border-yellow my-10 w-11/12" />

          <figure className="mx-2 flex flex-col justify-center items-center">
            <p className="font-nonito lg:my-4 lg:text-lg">
              Proceso de selección{" "}
              <span className="text-dark font-bold ml-8 lg:ml-19">Activo</span>
            </p>
            <button className="bg-yellow shadow-md shadow-dark/50 hover:bg-dark w-32 h-8 rounded text-center text-light font-Poppins font-semibold my-6">
              Aplicar
            </button>
          </figure>
        </section>
      </section>
    </main>
  );
};

export default CallComp;
