import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios';
import axiosInstance from "../axiosinterceptor"

const AddBlog = () => {
const[post,setPost]=useState();

  const inputHandler=(e)=>{
    setPost({...post,[e.target.name]:e.target.value});
  }

  const addHandler=()=>{
    console.log(post);
    axiosInstance.post("http://localhost:3005/api/add",post)
    .then((res)=>{
      console.log(res)
      alert(res.data.message)
  })
  .catch((err)=>{
    console.log(err)
  })

  }
  return (
    <div style={{margin:'5%'}}>
      <TextField   
      fullWidth
      variant='outlined'
      label='post title'
      name='title'
      onChange={inputHandler}
      />
      <br /><br />
      <TextField   
      fullWidth
      multiline
      rows={10}
      variant='outlined'
      label='Type a post'
      name='post'
      onChange={inputHandler}
      />
        <br /><br />
      <TextField   
      fullWidth
    
      variant='outlined'
      label='image URL'
      name='image'
      onChange={inputHandler}
      />
      <br /><br /><br />
      <Button variant='contained' color='secondary' onClick={addHandler}>Submit
      
      </Button>



</div>
  )
}
export default AddBlog