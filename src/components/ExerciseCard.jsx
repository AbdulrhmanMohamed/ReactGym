import React from 'react'
import { Link } from 'react-router-dom';
import {Button ,Stack , Typography} from '@mui/material';

function ExerciseCard({exercise}) {
  return (
    <Link  className='exercise-card' to={`/excersiceDetails/${exercise.id}`}>
        <img src={exercise.gifUrl} alt="giff exercise" loading='lazy' />
        <Stack 
            direction='row'>
            <Button
               sx={{
                ml:'20px',
                background:'#ffa9a9a9',
                color:"white",
                textTransform:"capitalize",
                borderRadius:'20px'
               }}
            > {exercise.bodyPart}</Button>
            
            <Button
               sx={{
                ml:'20px',
                background:'#fcc757',
                color:"white",
                textTransform:"capitalize",
                borderRadius:'20px'
               }}
            > {exercise.target}</Button>
            
        </Stack>
        <Typography
            fontSize='24px'
            color='#000'
            my='20px'
            p='0 20px'
        >{exercise.name}</Typography>
    </Link>
  )
}

export default ExerciseCard