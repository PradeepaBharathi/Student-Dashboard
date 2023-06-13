import React, { useState } from 'react'
import Base from '../Base/Base';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

function EditAstudent({students,setStudents}) {
  const navigate = useNavigate();
  const[id,setId] = useState("");
  const[name,setName] = useState("");
  const[Batch,setBatch] = useState("");
  const[gender,setGender] = useState("");
  const[qualification,setQualification] = useState("");
  const[Experience,setExperience] = useState("");
  const[Taskcompletion,setTaskcompletion] = useState("");

  const handleAddStudent =()=>{
    const newStudent = {
      id : id,
      name:name,
      batch: Batch,
      gender:gender,
      qualification:qualification,
      experience:Experience,
      Taskcompletion:Taskcompletion

    }
    console.log(newStudent)
    setStudents([...students,newStudent])
    navigate("/students")
    setId("")
    setName("")
    setBatch("")
    setGender("")
    setQualification("")
    setExperience("")
    setTaskcompletion("")
  }
  return (
    <Base
    title = {"Create New Student"}
    description = "Fill the form to add new student">
    
    <div className='form'>
      <h4> Add Students Form</h4>
      <TextField fullWidth label="id"  color="secondary"id="fullWidth" 
        
        placeholder='Enter the Id of the Student'
        type='number'
        value={id} 
        onChange={(e)=>setId(e.target.value)}/>
        <TextField fullWidth label="name"  color="secondary"id="fullWidth"
         placeholder='Enter the Name of the Student'
         type='text'
         value={name}
         onChange={(e)=>setName(e.target.value)}/>
         <TextField fullWidth label="Batch" color="secondary"id="fullWidth"
         placeholder='Enter the Batch of the Student'
         type='text'
         value={Batch}
         onChange={(e)=>setBatch(e.target.value)}/>
        <TextField fullWidth label="Gender"  color="secondary"id="fullWidth"
         placeholder='Enter the Gender of the Student'
         type='text'
         value={gender}
         onChange={(e)=>setGender(e.target.value)}/>
        <TextField fullWidth label="Qualification"  color="secondary"id="fullWidth"
         placeholder='Enter the Qualification of the Student'
         type='text'
         value={qualification}
         onChange={(e)=>setQualification(e.target.value)}/>
        <TextField fullWidth label="Experience"  color="secondary"id="fullWidth"
         placeholder='Enter the Experience of the Student'
         type='text'
         value={Experience}
         onChange={(e)=>setExperience(e.target.value)}/>
         <TextField fullWidth label="TaskCompletion" color="secondary"id="fullWidth"
         placeholder='Enter the Taskcompletion by the Student'
         type='text'
         value={Taskcompletion}
         onChange={(e)=>setTaskcompletion(e.target.value)}/>
         <div>
        <Button  variant="contained" color="secondary"
        onClick={handleAddStudent}>Add Students</Button>
        
        </div>
        </div>
        </Base>
  )
}

export default EditAstudent