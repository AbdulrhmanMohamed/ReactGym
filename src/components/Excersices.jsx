import React,{useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box ,Stack ,Typography} from '@mui/material'
import {excersiceOptions,fetchData} from '../utlities/fetchData'
import ExerciseCard from './ExerciseCard'

function Excersices({exercises,bodyPart , setExercises}) {
    console.log('exercises',exercises)
    const exercisesPerPage=9;
    const [currentPage, setCurrentPage] = useState(1)
  
   
    const paginate=(e,value)=>{
        setCurrentPage(value)
        window.scrollTo({top:'1800',behavior:'smooth'})
    }
    useEffect(() => {
     const fetchExercisesData=async()=>{
        let exercisesData=[];
        if(bodyPart=='all'){
            exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',excersiceOptions)
        console.log('exercises bodyPart data',exercisesData)

        }
        else{
            exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,excersiceOptions)
           
        }
        setExercises(exercisesData)
        
     }
     fetchExercisesData();
    }, [bodyPart])
    

    const lastIndexOfExercises=exercisesPerPage * currentPage;
    const firstIndexOfExercises=lastIndexOfExercises - exercisesPerPage;
    const exercisesInOnePage= exercises.slice(firstIndexOfExercises,lastIndexOfExercises);
    console.log('exercises in one page',exercisesInOnePage)
  return (
   <Box id='exercises'
    sx={{
        mt:{lg:'110px'},}}
        mt='50px'
        p='20px'

   >
 
    <Typography 
        variant='h3'
        mb="46px"
    >  Showing Result</Typography>
    <Stack
        direction='row' justifyContent="center"
        flexWrap='wrap'
        sx={{gap:{lg:'50px' , xs:'50px'}}}
    >
        {
            exercisesInOnePage&&
            exercisesInOnePage.map((exercise,index)=>{
                return <ExerciseCard key={index} exercise={exercise} />
            })
        }
    </Stack>

    <Stack
        mt="100px"
        direction='row'
        justifyContent='center'
    >
        {exercises.length>9 ?
        <Pagination
            color='standard'
            shape='rounded'
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
        >

        </Pagination>:''}

    </Stack>
   </Box>
  )
}

export default Excersices