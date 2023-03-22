import React from "react";
import Navbar from '../components/Navbar';
import HelpNotice from '../components/StudentSpace/HelpNotice';
import Announcement from '../components/StudentSpace/Announcement';
import StudenPhases from '../components/StudentSpace/StudentPhases';
import StudentProgress from "../components/StudentSpace/StudentProgress";

const StudentSpace = () => {
  return (
    <div className='mx-4 md:mx-14'>
      <Navbar/>
      <section className='grid md:grid-cols-4'>
        <div className='md:col-span-3'>
          <Announcement/>
        </div>
        <div className='m-4 md:m-0 md:col-span-1'>
          <HelpNotice/>
        </div>
      </section>
      <section className='grid md:grid-cols-4'>
        <div className='md:col-span-3'>
          <StudentProgress/>
          <StudenPhases/>
        </div>
        <div className='m-4 md:m-0 md:col-span-1'>
          <HelpNotice/>
        </div>
      </section>
    </div>
  );
};

export default StudentSpace;