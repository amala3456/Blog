import { Button, Grid,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
 const navigate= useNavigate()
  const[users,setUsers]=useState();
  //onchange fnction
  const inputHandler=(e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
    console.log(users);
}
const addHandler=()=>{
  console.log("clicked",users)
axios.post("http://localhost:3005/api",users)
.then((res)=>{
  console.log(res)
  alert(res.data.message)
  navigate('/')
  // here slash is the path mentioned in app.js of frontend

})
.catch((err)=>{
console.log(err);
})
}

  return (
    <div style={{margin:'10% 10% 10% 10%'}}>
<Grid container spacing={2}>
  <Grid item xs={6} sm={6} md={6}>
    <TextField fullWidth label="Name" name='name' onChange={inputHandler}/>
  </Grid>
  <Grid item xs={6} sm={6} md={6}>
  <TextField fullWidth label="Email" name='email' onChange={inputHandler}/>
  </Grid>
  <Grid item xs={12} sm={12} md={12}>
  <TextField fullWidth label="Address" multiline Rows={8} name='address' onChange={inputHandler}/>
  </Grid>
  <Grid item xs={6} sm={6} md={6}>
  <TextField fullWidth label="UserName" name='username' onChange={inputHandler}/>
  </Grid>
  <Grid item xs={6} sm={6} md={6}>
  <TextField fullWidth label="Password" type='password' name='password' onChange={inputHandler}/>
  </Grid>
</Grid>
<br />
<Button variant="contained" color='secondary' onClick={addHandler}>SignUp</Button>
<Grid item xs={12}>
 <Typography>
<Link to={'/'}>
Back to Login
</Link>
</Typography>


</Grid>

    </div>
  )
}

export default Signup