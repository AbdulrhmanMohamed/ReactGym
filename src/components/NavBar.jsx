import React from 'react'
import {Stack} from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'
function NavBar() {
  return (
    <div>
        <Stack 
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            
            sx={{gap:{sm:'122px' , xs:'40px'}, mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px='20px' 
        >
            <Link to='/'>
                <img src={logo} alt="Logo image"  style={{width:'50px',height:'50px',margin:'0 20px'}}/>
            </Link>
            <Stack
                direction='row'
                gap='40px'
                fontSize='24px'
                alignItems='flex-end'
            >
                <Link to='/'  style={{textDecoration:'none',borderBottom:'3px solid #ff2625',color:'#3a1212'}}>Home</Link> 
                <a href='#exercises'style={{textDecoration:'none',color:'#3a1212'}}>Excersices</a>
            </Stack>
        </Stack>
    </div>
  )
}

export default NavBar