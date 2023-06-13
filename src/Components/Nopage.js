import React from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../Base/Base'

function Nopage() {
    const navigate = useNavigate()
  return (
   <Base
   title = " Wrong Url 404 Error"
   description =  "We can't find your location"
   >
    <h3> Please click below</h3>
    <button onClick={()=>navigate("/")}> Home</button>
   </Base>
  )
}

export default Nopage