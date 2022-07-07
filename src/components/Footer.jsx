import React from 'react'
import {Box,Typography,Stack} from "@mui/material"
import logo from '../assets/images/Logo.png';
function Footer() {
  return (
    <Box 
        style={{
            background:'#fff3f4',
            marginTop:'80px',

        }}
    >
        <Stack gap='50px' px='40px' alignItems='center' py='24px'
        >
            <img src={logo} alt="footer Logo"  style={{maxWidth:'200px' ,width:'60px' , height:'40px'}}/>
            <Typography variant='h5' m={0}>This is Mad By Me , Applying React Concept inspired by js Mastery</Typography>
        </Stack>

    </Box>
  )
}

export default Footer