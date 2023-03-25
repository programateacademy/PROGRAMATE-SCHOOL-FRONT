import React, {useState, useEffect, createContext} from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdOutlineCelebration } from 'react-icons/md'
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

    let Phase2 = false;
    let Phase3= false;
    let Phase4 = false;
    let Phase5 = false;
    let Phase6 = false;

    if (StudentStage == 5) {
        // INDICATE ONLY THE FIRST SECTION "Registro en la plataforma: 5%, primera parte"
    }
    if (StudentStage == 40) {
        Phase2 = true //This variable defines if the purple check is on 
        // INDICAR HASTA LA SEGUNDA SECCIÓN "Inscripción en una convocatoria: 40%, segunda parte"
    }
    if (StudentStage == 65) {
        Phase3 = true //This variable defines if the purple check is on 
        // INDICAR HASTA LA TERCERA SECCIÓN "Entrevista: 60%, tercera parte"
    }
    if (StudentStage == 80) {
        Phase4 = true //This variable defines if the purple check is on 
        // INDICAR HASTA LA CUARTA SECCIÓN "Legalización de la beca: 80%, cuarta parte"
    }
    if (StudentStage == 95) {
        Phase5 = true //This variable defines if the purple check is on 
        // INDICAR HASTA LA QUINTA SECCIÓN "Prueba de diagnóstico de ingles: 95%, quinta parte"
    }
    if (StudentStage == 99) {
        Phase6 = true //This variable defines if the purple check is on 
        // INDICAR HASTA LA QUINTA SECCIÓN "inicio de clases: 99%, sexto parte"
    }

    return (
        <main>
            {/* presentation of the student process */}
            {/* Phase 1 */}
            <div className="flex justify-between items-center mx-6 gap-5 md:mx-10">
                <div className=" flex justify-center items-center bg-purple rounded-full h-[150px] w-[10px]">
                    <div className="bg-purple w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl">
                        <BsCheck className="text-white text-5xl" />
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-purple mx-4 md:text-lg lg:text-3xl">Fase 1: Registro en la plataforma</h2>
                <p></p>
            </div>
            {/* Phase 2 */}
            <div className="flex justify-between items-center mt-8 mx-6 gap-5 md:mx-10">
                <div className={Phase2 ? "flex justify-center items-center bg-purple rounded-full h-[150px] w-[10px]" :"flex justify-center items-center  bg-dark rounded-full h-[150px] w-[10px] "}>
                    <div className={Phase2 ? "bg-purple w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl":"bg-dark w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl"}>
                        <p className='w-[50px] h-[50px] flex justify-center items-center'>2</p>
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-dark mx-4 md:text-lg lg:text-3xl">Fase 2:   Prueba tecnica</h2>
                <p></p>
            </div>
            {/* Phase 3 */}
            <div className="flex justify-between items-center mt-8 mx-6 gap-5 md:mx-10">
                <div className={Phase3 ? "flex justify-center items-center bg-purple rounded-full h-[150px] w-[10px]" :"flex justify-center items-center  bg-dark rounded-full h-[150px] w-[10px] "}>
                    <div className={Phase3 ? "bg-purple w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl":"bg-dark w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl"}>
                        <p className='w-[50px] h-[50px] flex justify-center items-center'>3</p>
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-dark mx-4 md:text-lg lg:text-3xl">Fase 3: Entrevista</h2>
                <p></p>
            </div>
            {/* Phase 4 */}
            <div className="flex justify-between items-center mt-8 mx-6 gap-5 md:mx-10">
                <div className={Phase4 ? "flex justify-center items-center bg-purple rounded-full h-[150px] w-[10px]" :"flex justify-center items-center  bg-dark rounded-full h-[150px] w-[10px] "}>
                    <div className={Phase4 ? "bg-purple w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl":"bg-dark w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl"}>
                        <p className='w-[50px] h-[50px] flex justify-center items-center'>4</p>
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-dark mx-4 md:text-lg lg:text-3xl">Fase 4: ¡Ya estás dentro! </h2>
                <p></p>
            </div>
            {/* Phase 5 */}
            <div className="flex justify-between items-center mt-8 mx-6 gap-5 md:mx-10">
                <div className=" flex justify-center items-center bg-dark rounded-full h-[150px] w-[10px]">
                    <div className="bg-dark w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl">
                        <p className='w-[50px] h-[50px] flex justify-center items-center'>5</p>
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-dark mx-4 md:text-lg lg:text-3xl">Fase 5: ¿Te gustan los idiomas?
                </h2>
                <p></p>
            </div>
            {/* Phase 6 */}
            <div className="flex justify-between items-center mt-8 mx-6 gap-5 md:mx-10">
                <div className=" flex justify-center items-center bg-dark rounded-full h-[150px] w-[10px]">
                    <div className="bg-dark w-[50px] h-[50px] rounded-full mx-1 flex justify-center items-center text-light font-bold text-3xl">
                        <p className='w-[50px] h-[50px] flex justify-center items-center'>6</p>
                    </div>
                </div>
                <h2 className="font-bold font-Poppins text-sm text-dark mx-4 md:text-lg lg:text-3xl">Fase 6: Inicio de Clases
                </h2>
                <p></p>
            </div>
            <br/>
            <p className=' font-Poppins font-semibold text-center text-3xl mx-3 mb-2 md:text-3xl md:my-8 flex flex-row justify-center'><MdOutlineCelebration className='text-4xl text-center'/> Felicidades ya eres parte del programa!</p>
        </main>
    )
}

export default StudentPhases