import React from 'react'
import {Button,Box,Stack, Typography} from '@mui/material'

function VideoExercises({videoExercises,name}) {
console.log(name)
console.log('videoExs',videoExercises)
  return (
    <Box p='20px' sx={{marginTop:{lg:'200px',xs:'0'}}}>
      <Typography variant='h3'
        mb='30px'

      >
        Watch <span style={{color:'#ff2625'}}>{name}</span> Exercise Videos
      </Typography>

      <Stack  
        sx={{
          flexDirection:{lg:'row'},
        
          display:'fex',
          justifyContent:'center',
          alignItems:'center',
          gap:'25px',
          flexWrap:'wrap'
          
        }}>

          {videoExercises?.slice(0,6).map((item,index)=>{
            return <div className="card">
              <a 
           
           key={index}  href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank'>
              <img src={item.video.thumbnails[0].url} alt="thumbnaail Image for Video"  style={{height:'300px',width:'300px',borderRadius:"10px"}

            }
              
              
              />
           </a>
           <Typography variant='h5' mb={3} mt={1} sx={{
            maxWidth:'300px',
            maxLines:'2',
            textOverflow:'ellipsis'
           }}>
            {item.video.channelName}

           </Typography>
            </div>
          })}
      </Stack>
    </Box>
  )
}

export default VideoExercises