import { Box, Button, TextField, Typography } from '@mui/material'
import {React,useState} from 'react'
import axios from 'axios'
import axiosInstance from "../axiosinterceptor"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const[user,setUser]=useState();
  const inputHandler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user)
  }

    const addHandler=()=>{
      console.log(user)
      axiosInstance.post("http://localhost:3005/api/login",user)
.then((res)=>{
  console.log(res)
  alert(res.data.message)
  // console.log(res.data.token)
  sessionStorage.setItem('userToken',res.data.token);
  //here simple userToken is the name used to represent token, it can be any name


  if((res.data.message)==="login successfull"){
    navigate('/blogs')
  }
 
  // here slash is the path mentioned in app.js of frontend

})
.catch((err)=>{
console.log(err.message);
})
    }
  
  return (
    <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{margin:'10% 20% 30% 40%'}}
      >
       <Typography variant='h3'style={{color:'darkblue'}}>Blog App Login</Typography>

      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          name="username"
          onChange={inputHandler}/>
        </div>
        <div>
        <TextField
       required
          id="outlined-required"
          label="Password"
          name="password"
          onChange={inputHandler}
          />
          </div>
          <Button variant='contained' onClick={addHandler}>Login</Button>
          <br /><br /><br />
<Typography >
  <Link to={'/sign'}>New user click here</Link>
</Typography>


      </Box>

</div>
)
}

export default Login