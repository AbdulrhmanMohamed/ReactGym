import React from 'react'
import {Typography,Button,Stack} from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png';
import equipmentImage from '../assets/icons/equipment.png';
import targetImage from '../assets/icons/target.png';

function Detail({exerciseDetail}) {
    const {gifUrl,bodyPart,target,equipment,name}=exerciseDetail; 
    const extraDetials=[
        {icons:BodyPartImage,name:bodyPart},
        {icons:equipmentImage,name:equipment},
        {icons:targetImage,name:target}
    ]
   
  return (
    <Stack
        gap='50px'
        sx={{
            flexDirection:{md:'row',xs:'column'},
            textAlign:'left',
            padding:'20px',

        }}
    >

        <img src={gifUrl} alt='exerciseDetail Image' loading='lazy' className='' style={{width:'100%'}}/>

        <Stack
            sx={{
                gap:{lg:'35px' ,xs:'20px'}

            }}
        >
            <Typography variant='h4'>
                {name}
            </Typography>
            <Typography variant='h6'>
                Exercise Keep You Strong {name} {'  '}
                This is One Of the Best Exercises To Target Your {target} It Will Help You Improve Your Mode and gain Energy

            </Typography>

            {extraDetials.map((detail,index)=>{
                return (
                    <Stack key={index} direction='row' alignItems='center' gap='24px'>
                        <Button sx={{
                            background:'#fff2db',
                            borderRadius:'50%',
                            width:'100px',
                            height:'100px',
                        }}>
                            <img src={detail.icons} alt="" style={{
                                width:'50px',
                                height:'50px'
                            }} />

                        </Button>
                    <Typography variant='h5'>{detail.name}</Typography>
                    </Stack>
                )
            })}
        </Stack>

    </Stack>
  )
}

export default Detail