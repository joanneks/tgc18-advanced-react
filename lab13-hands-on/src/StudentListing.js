import React,{useContext} from 'react';
import StudentContext from './StudentContext';

export default function StudentListing(){
    const studentContext = useContext(StudentContext);
    return(
        <React.Fragment>
            <div>
                <ul>
                    {
                    studentContext.getStudents().map(student=>{return(
                        <div key={student.id}>
                            <li>Student Number: {student.id}</li>
                            <li>Year of Study: {student.year_of_study}</li>
                            <li>Gender: {student.gender}</li>
                            <li>Graduated: {student.graduated==="true"?"Yes":"No"}</li>
                            <br/>
                        </div>
                    )})
                    }
                </ul>
            </div>

        </React.Fragment>
    )
}