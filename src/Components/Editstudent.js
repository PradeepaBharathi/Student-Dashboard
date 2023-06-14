import React, { useEffect, useState } from 'react'
import Base from '../Base/Base';
import { useNavigate, useParams } from 'react-router-dom';

function Editstudent({students,setStudents}) {
  const{id}=useParams();
  console.log(id)

  const navigate = useNavigate();


  const[idx,setIdx] = useState("");
  const[name,setName] = useState("");
  const[batch,setBatch] = useState("");
  const[gender,setGender] = useState("");
  const[qualification,setQualification] = useState("");
  const[experience,setExperience] = useState("");
  const[taskCompletion,setTaskcompletion] = useState("");

  

  useEffect(()=>{
    const studentData = students.find(stud=> stud.id == id);
    console.log(studentData)
    console.log(students)
    console.log(id)
    if(studentData){
    setIdx(studentData.id)
    setName(studentData.name)
    setBatch(studentData.batch)
    setGender(studentData.gender)
    setQualification(studentData.qualification)
    setExperience(studentData.experience)
    setTaskcompletion(studentData.taskCompletion)
    
  }},[id,students])

  const updateStudent = ()=>{
    const studIndex = students.findIndex((stud)=> stud.id=== id);
    console.log(studIndex)

    const updatedStudent = {
      id,
      name,
      batch,
      gender,
      qualification,
      experience,
      taskCompletion
    }
    console.log(updatedStudent)

    students[studIndex]=updatedStudent
setStudents([...students])
navigate("/students")
  }

  return (
    <Base 
    title = {"Edit Students Form"}
    description = {"Fill the form to Edit Student"}
    >
    <div className='form'>
    <h4> Update Students Form</h4>
      <input
      placeholder='Enter the Id of the Student'
      type='number'
      value={idx} 
      onChange={(e)=>setIdx(e.target.value)}/>
      <input
       placeholder='Enter the Name of the Student'
       type='text'
       value={name}
       onChange={(e)=>setName(e.target.value)}/>
       <input
       placeholder='Enter the Batch of the Student'
       type='text'
       value={batch}
       onChange={(e)=>setBatch(e.target.value)}/>
      <input
       placeholder='Enter the Gender of the Student'
       type='text'
       value={gender}
       onChange={(e)=>setGender(e.target.value)}/>
      <input
       placeholder='Enter the Qualification of the Student'
       type='text'
       value={qualification}
       onChange={(e)=>setQualification(e.target.value)}/>
      <input
       placeholder='Enter the Experience of the Student'
       type='text'
       value={experience}
       onChange={(e)=>setExperience(e.target.value)}/>
       <input
       placeholder='Enter the Taskcompletion by the Student'
       type='text'
       value={taskCompletion}
       onChange={(e)=>setTaskcompletion(e.target.value)}/>
       <div>
      <button 
      onClick={updateStudent}
      >Update Students</button>
      </div>
      </div>
      </Base>
  )
}

export default Editstudent