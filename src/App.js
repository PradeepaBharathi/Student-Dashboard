
import { useState } from 'react';
import './App.css';
import Students from './Components/Students.js';
import {Data} from './Data/Data';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import EditAstudent from './Components/EditAstudent';
import Editstudent from './Components/Editstudent';
import Nopage from './Components/Nopage';
function App() {
  const [students,setStudents] = useState(Data);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route path="/students" element ={<Students
          students={students}
          setStudents={setStudents}
          />}/>
          <Route path = "/create-user" element={<EditAstudent
            students={students}
            setStudents ={setStudents}
            />}></Route>

            <Route path ="/edit-user/:id"
             element={<Editstudent
            students={students}
            setStudents = {setStudents}
            />}></Route>

            <Route path="*" element={<Nopage/>}></Route>
      </Routes>
     
      {/* <Students
      students={students}
      setStudents={setStudents}/> */}
    </div>
  );
}

export default App;
