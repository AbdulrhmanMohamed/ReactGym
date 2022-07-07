import React from 'react'
import {Box,Button,Typography} from '@mui/material'
import heroImage from '../assets/images/banner.png'


function HeroBanner() {
  return (
    <Box 
        sx={{
            mt:{lg:'212px',xs:'70px'},
            ml:{sm:'50px'}
        }}
        position='relative'
        p='20px'
    >

        <Typography
            color='#ff2625'
            fontWeight=' 600'
            fontSize='26px'
        >
            Fitness Club
        </Typography>

        <Typography
            margin='20px 0'
            sx={{
                fontSize:{lg:'44px',xs:'40px'}
            }}

        >
            sweet ,smile <br/>
            Repeat
        </Typography>

        <Typography
         mt='20px'
         fontWeight={700}
         fontSize='22px'
         lineHeight='30px'
         mb={3}
        >
            Checkout The Effective Excersices
        </Typography>
        <Button  href='#excersices' 
            sx={{
                padding:'13px 10px',
                background:'#ff2625'

            }}
        variant='contained' color='error' >Explore Excersices</Button>

        <Typography
        fontWeight={600}
        sx={{
            // display:{lg:'block',xs:'none'},
            opacity:'0.1',
            fontSize:'200px',
            marginTop:'30px',
            color:'#ff2625'
        }}
        >Excersice</Typography>
        <img src={heroImage} alt=""  className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner