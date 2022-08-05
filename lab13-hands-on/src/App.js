import React, {useState} from 'react';
import StudentContext from './StudentContext';
import StudentListing from './StudentListing';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';
// in the ContextName
// 1. create context --> React.createContext({ })

// in the ContextName.Provider
// 1. create useState for the data
// 2. create the context to pass the logic to the child components through functions
// 3. in the JSX, create the <ContextName.PRovider value="context">
// 4. Nest the component that will list each of the data
// 5. Nest the add data component

// in the ChildComponent - Listing
// 1. import useContext(ContextName)
// 2. import in ContextName
// 3. .map() to render each data

// in the ChildClass - Add data
// 1. import in ContextName
// 2. create state for the data (same fields at ContextProvider)
// 3. create form to add data
// 4. transfer in the add function created in ContextNAme.PRovider

function App() {
  // useState first arg is the default value. can be array of object, axios call
  const [students,setStudents]= useState([
    {
      id:Math.floor(Math.random() * 10000 + 1000),
      year_of_study:2019,
      gender:'male',
      graduated:false
    },
    {
      id:Math.floor(Math.random() * 10000 + 1000),
      year_of_study:2015,
      gender:'female',
      graduated:true
    },
    {
      id:Math.floor(Math.random() * 10000 + 1000),
      year_of_study:2020,
      gender:'male',
      graduated:true
    },
  ])
  // sometimes known as controller (domain/model)
  // logic stored in once place because it is shared through the Provider to all components relating to it
  const context = {
    getStudents:()=>{
      return students
    },
    // addStudent:(studentNo,yearOfStudy,gender,graduated)=>{
    //   let newStudent={
    //     id:studentNo,
    //     year_of_study:yearOfStudy,
    //     gender,
    //     graduated
    //   }
    //   const cloned = [...students,newStudent];
    //   setStudents(cloned)
    // },
    addStudent:(newStudent)=>{
      const cloned = [...students,newStudent];
      setStudents(cloned)
    },
    deleteStudent:(studentId)=>{
      const indexToRemove = students.findIndex(each=>{
        if(each.id === parseInt(studentId)){
          return true;
        } 
      })
      console.log(indexToRemove);
      const cloned = [...students.slice(0,indexToRemove),...students.slice(indexToRemove+1)];
      setStudents(cloned);
    }
  }
  return (
    <React.Fragment>
      <StudentContext.Provider value={context}>
        <h1>List of Students</h1>
        <StudentListing/>
        <AddStudent/>
        <DeleteStudent/>
      </StudentContext.Provider>
    </React.Fragment>
  );
}

export default App;
