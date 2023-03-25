import React, {useState, useEffect, createContext} from 'react';
import defaultApi from "../../apis/index";
import jwt_decode from "jwt-decode";

export const StageAnnouncement = createContext()
export const NAnnouncement = createContext()

const StudentProgress = () => {

  const decodedToken = jwt_decode(localStorage.getItem("token"));
  const NameStudent = decodedToken.name1Person;
  const idPerson = decodedToken._id;
  const [statsStudent, setStatsStudent] = useState([]);
  const [studentProgress, setStudentProgress] = useState(0);


  useEffect(() => {
    defaultApi
      .post("/getstagestudent", idPerson)
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        setStatsStudent(res.data.data);
        setStudentProgress(parseFloat(res.data.data) * 100);
      });
  }, []);
  
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
  

  return (
    <main>
      <section className="mx-4 bg-dark rounded flex flex-col justify-center text-lg lg:text-2xl text-light text-start font-Poppins font-semibold md:text-xl">
        <h1 className="mx-6 my-6">Hola {NameStudent}</h1>
        <h2 className="mx-6 text-yellow">Estás aplicando al programa:</h2>
        <h3 className="mx-6 mb-6 text-yellow">{oneAnnoun}</h3>
        <h2 className="mx-6 mb-3 text-sm md:text-lg">Tu progreso</h2>
        <div className="flex items-center mx-6 bg-white rounded-full h-2 md:h-4 dark:white">
          <div className="bg-purple w-[50%] h-1 md:h-2 rounded-full mx-1"
              style={{ width: `${studentProgress}%` }}></div>
        </div>
        <p className="mx-6 mt-3 mb-6 text-end text-sm">{StudentStage} %</p>
      </section>
      <section className="mx-2 text-dark">
        <h3 className="font-bold font-Poppins my-6 md:text-lg lg:text-2xl md:ml-16 lg:ml-0">Tu proceso inicia aquí</h3>
      </section>
    </main>
  );
};

export default StudentProgress;