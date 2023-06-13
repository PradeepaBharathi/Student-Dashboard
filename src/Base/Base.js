



























































































































import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
function Base({title,description,children}) {
  const navigate = useNavigate()
    return (
      <div className='main-container'>
        <header>
        <nav>
        <AppBar position="static">
  <Toolbar variant="dense">
  <Typography sx={{ mr: 2 }}>
      Student -App
    </Typography>
    

    <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>navigate("/")} sx={{ mr: 2 }}>
      Dashboard
    </IconButton>

    <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>navigate("/students")} sx={{ mr: 2 }}>
    Students
    </IconButton>

    <IconButton edge="start" color="inherit" aria-label="menu"  onClick={()=>navigate("/create-user")} sx={{ mr: 2 }}>
    Create Student
    </IconButton>

   
  </Toolbar>
</AppBar>
          
             
                
            
          </nav>
        </header>
        <main>
            <h1>{title}</h1> 
            <h4>{description}</h4>
            <div className='contents'>
                {children}
            </div>
        </main>
      </div>
    )
  }
   
  export default Base
