
import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{gap:{sm:'122px',xs:'44px'}, mt:{sm:'32px',xs:'20px'},justifyContent:'none'}}  
    >

      <Link to='/'>
        <img src={Logo} alt="Logo" style={{ width: '48px', height: '48px', margin: '0 20px' }} />
      </Link>
      <Stack
        direction='row'
        alignItems='flex-end'
        gap='40px'
        fontSize='24px'
      >
        <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <Link to='/' href='#exercises' style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</Link>
      </Stack>
    </Stack>
  )
}

export default Navbar