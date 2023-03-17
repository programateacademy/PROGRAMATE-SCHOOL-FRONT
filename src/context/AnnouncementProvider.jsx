import { createContext, useState, useEffect, Children } from "react";
import Axios from 'axios';

// export const AnnouncementContext = createContext();

// export const Announcement = 

// export const AnnouncementProvider = ({ children }) => {
//     return (
//         <AnnouncementContext.Provider
//             value={
//                 {
//                     name1Person: '',
//                     name2Person: '',
//                     lastname1Person: '',
//                     lastname2Person: '',
//                     birthdate: '',
//                     agePerson: '',
//                     gender: '',
//                     document: '',
//                     documentPerson: '',
//                     institutionPerson: '',
//                     course: '',
//                     sena: '',
//                     availability: '',
//                     emailPerson: '',
//                     phone: '',
//                     phoneTwo: '',
//                     sisben: '',
//                     ethnicGroup: '',
//                     nationality: '',
//                     disability: '',
//                     typeDisability: '',
//                     addressStudent: '',
//                     departmentStudent: '',
//                     rural: '',
//                     bogota: '',
//                     stratum: '',
//                     nameGuardian: '',
//                     relationship: '',
//                     relationshipO: '',
//                     documentTypeGuardian: '',
//                     numberIdGuardian: '',
//                     emailGuardian: '',
//                     phoneGuardian: '',
//                     phoneGuardianTwo: '',
//                     addressGuardian: '',
//                     departmentGuardian: '',
//                     educationLevelGuardian: '',
//                     economic: '',
//                     family: '',
//                     computer: '',
//                     internet: '',
//                     interests: '',
//                     activity: '',
//                     reportage: '',
//                     stake: '',
//                     webMotivation: '',
//                     why: '',
//                     methodology: '',
//                     want: '',
//                     withdrawal: '',
//                     logic1: '',
//                     logic2: '',
//                     logic3: '',
//                     logic4: '',
//                 }
//             }>
//             {children}
//         </AnnouncementContext.Provider>
//     )
// }