import React ,{useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExcersices from '../components/SearchExcersices'
import Excersices from '../components/Excersices'
function Home() {
    const [exercises, setExercises] = useState('')
    const [bodyPart, setBodyPart] = useState('all')
   

    return (
        <Box>
            <HeroBanner/>
            <SearchExcersices setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}/>
            <Excersices setExercises={setExercises}
                bodyPart={bodyPart}
                exercises={exercises}/>
        </Box>
    )
}

export default Home
