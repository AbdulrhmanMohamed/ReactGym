import React from 'react'
import { Typography ,Stack} from '@mui/material';
import icon from '../assets/icons/gym.png'
function BodyPart({item,setBodyPart,bodyPart}) {
  return (
    <Stack
        alignItems='center'
        type='button'
        justifyContent='center'
        className='bodyPart-card'
        

        sx={{
            borderTop:item==bodyPart?'4px solid #ff2625':"",
            background:'white',
            width:'280px',
            height:'270px',
            cursor:'pointer',
            margin:'20px ',
            borderBottomLeftRadius:'20px',
        }}

        onClick={()=>{
            setBodyPart(item)
            window.scrollTo({top:1800,left:100,behavior:'smooth'})
            
        }}
    >
        <img src={icon} alt="dumbbell"  style={{width:'40px' , height:'40px'}}/>
        <Typography style={{fontWeight:'bold',fontSize:'24px' , color:'#3a1212',textTransform:'capitalize'}} mt={3}>{item}</Typography>
    </Stack>
  )
}

export default BodyPart