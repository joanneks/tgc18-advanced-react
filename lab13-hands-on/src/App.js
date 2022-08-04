import React, {useState} from 'react';
import StudentContext from './StudentContext';
import StudentListing from './StudentListing';
import AddStudent from './AddStudent';

function App() {
  const [students,setStudents]= useState([
    {
      student_no:'s6424',
      year_of_study:2019,
      gender:'male',
      graduated:false
    },
    {
      student_no:'s4213',
      year_of_study:2015,
      gender:'female',
      graduated:true
    },
    {
      student_no:'s9542',
      year_of_study:2010,
      gender:'male',
      graduated:true
    },
  ])
  const context = {
    getStudents:()=>{
      return students
    },
    addStudent:(studentNo,yearOfStudy,gender,graduated)=>{
      let newStudent={
        student_no:studentNo,
        year_of_study:yearOfStudy,
        gender,
        graduated
      }
      const cloned = [...students,newStudent];
      setStudents(cloned)
    }
  }
  return (
    <React.Fragment>
      <StudentContext.Provider value={context}>
        <h1>List of Students</h1>
        <StudentListing/>
        <AddStudent/>
      </StudentContext.Provider>
    </React.Fragment>
  );
}

export default App;
