// import React, { useState } from 'react'
import Base from '../Base/Base'

// import Editstudent from './Editstudent';
import { useNavigate } from 'react-router-dom';

 
const Students = ({students, setStudents}) => { 
// const [studId,setStudId]=useState("")
  const navigate = useNavigate()
      const deleteStudent = (studentId)=>{
        const removedStudent = students.filter(student=>student.id !== studentId);
        console.log(removedStudent)
        setStudents(removedStudent)
      }

      function navigateToEditPage(studentId){
        // setStudId(studentId);
        navigate(`/edit-user/${studentId}`);
      }
  
    return (
          <Base 
          title={"Students Info"}
          description={"All studnets info will be displayed here"}
          >

           

            
          <div className='stud-collection'>
            {students.map((stud, idx)=>(
              <div className='stud-card' key={idx}>
                 <h2>{stud.name}</h2>
                 <p>Batch : {stud.batch}</p>
                 <p>Qualification : {stud.qualification}</p>               
                 <p>Experience : {stud.experience}</p>
                 <p>Task Completion :{stud.taskCompletion}</p>
                 <p>Gender : {stud.gender}</p>
                 <div className ='card-btn-group'>
                 <button onClick={()=>navigateToEditPage(stud.id)}>Edit</button >
                 <button onClick={()=>deleteStudent(stud.id)}>Delete</button>
                 </div>
              </div>
            ))}
          </div>
          </Base>
    )
  }
  
  export default Students