import React, {useState, useEffect, createContext} from 'react';
import { BsCheck } from 'react-icons/bs';
import defaultApi from "../../apis/index"
import jwt_decode from "jwt-decode";

export const StageAnnouncement = createContext()
export const NAnnouncement = createContext()

const StudentPhases = () => {

    const decodedToken = jwt_decode(localStorage.getItem("token"));

    const idPerson = decodedToken._id;

    const [statsStudent, setStatsStudent] = useState([]);

    useEffect(() => {
        defaultApi
            .post("/getstagestudent", idPerson)
            .catch((err) => {
                console.log(err);
            })
            .then((res) => {
                setStatsStudent(res.data.data)
            });
    }, [])

    const StudentStage = parseFloat(statsStudent) * 100

    const [oneAnnoun, setOneAnnoun] = useState([])

    useEffect(() => {
        defaultApi
            .post("/getoneannouncement", idPerson)
            .catch((err) => {
                console.log(err)
            })
            .then((res) => {
                setOneAnnoun(res.data)
            })
    }, [])


    if (StudentStage == 5) {
        // INDICATE ONLY THE FIRST SECTION "Registro en la plataforma: 5%, primera parte"
    }
    if (StudentStage == 40) {
        // console.log("Inscripción en una convocatoria: 40%, segunda parte")
        // INDICAR HASTA LA SEGUNDA SECCIÓN
    }
    if (StudentStage == 65) {
        // console.log("Entrevista: 60%, tercera parte")
        // INDICAR HASTA LA TERCERA SECCIÓN
    }
    if (StudentStage == 80) {
        // console.log("Legalización de la beca: 80%, cuarta parte")
        // INDICAR HASTA LA CUARTA SECCIÓN
    }
    if (StudentStage == 95) {
        // console.log("Prueba de diagnóstico de ingles: 95%, quinta parte")
        // INDICAR HASTA LA QUINTA SECCIÓN
    }

    return (
        <main>
            {/* presentation of the student process */}
            <div className="flex justify-between items-center mx-6 gap-5 md:mx-10">
                <div className=" flex justify-center items-center bg-purple rounded-full h-[150px] w-[10px]">
                    <div className="bg-purple w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl">
                        <BsCheck className="text-white text-5xl" />
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-purple mx-4 md:text-lg lg:text-3xl">Fase 1: Registro en la plataforma</h2>
                <p></p>
            </div>
            <div className="flex justify-between items-center mt-8 mx-6 gap-5 md:mx-10">
                <div className=" flex justify-center items-center  bg-dark rounded-full h-[150px] w-[10px] ">
                    <div className="bg-dark w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl">
                        <p className='w-[50px] h-[50px] flex justify-center items-center'>2</p>
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-dark mx-4 md:text-lg lg:text-3xl">Fase 2: Cuentanos un poco sobre ti queremos conocerte</h2>
                <p></p>
            </div>
            <div className="flex justify-between items-center mt-8 mx-6 gap-5 md:mx-10">
                <div className=" flex justify-center items-center bg-dark rounded-full h-[150px] w-[10px]">
                    <div className="bg-dark w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl">
                        <p className='w-[50px] h-[50px] flex justify-center items-center'>3</p>
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-dark mx-4 md:text-lg lg:text-3xl">Fase 3: Prueba tecnica</h2>
                <p></p>
            </div>
            <div className="flex justify-between items-center mt-8 mx-6 gap-5 md:mx-10">
                <div className=" flex justify-center items-center bg-dark rounded-full h-[150px] w-[10px]">
                    <div className="bg-dark w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl">
                        <p className='w-[50px] h-[50px] flex justify-center items-center'>4</p>
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-dark mx-4 md:text-lg lg:text-3xl">Fase 4: inicio de clases</h2>
                <p></p>
            </div><br/>
            <p className=' font-Poppins font-semibold text-center text-3xl mx-3 mb-2 md:text-3xl md:my-8 flex flex-row justify-center'><MdOutlineCelebration className='text-4xl text-center'/> Felicidades ya eres parte del programa!</p>
        </main>
    )
}

export default StudentPhases