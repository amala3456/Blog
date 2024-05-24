import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const tokenrelease=()=>{
    sessionStorage.removeItem('userToken');
  }
  return (
    <div>

<Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:'purple'}}position="static">
       <Toolbar>
        
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}}to={'/blogs'}>Blogs</Link></Button>
          <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}}to={'/add'}>AddBlogs</Link></Button>
          <Button color="inherit" onClick={tokenrelease}><Link style={{textDecoration:'none',color:'white'}}to={'/'}>Logout</Link></Button>
          </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar