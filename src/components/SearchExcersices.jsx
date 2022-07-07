import React,{useState,useEffect} from 'react'
import {Stack ,Button,Box,Typography,TextField} from '@mui/material'

import {fetchData,excersiceOptions} from '../utlities/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';


function SearchExcersices({setExercises,bodyPart,setBodyPart}) {
  const [search,setSearch]=useState('');
  const [bodyParts,setBodyParts]=useState('')

  useEffect(()=>{
    
    const fetchExerciseData=async ()=>{
      const bodyData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',excersiceOptions)
      console.log('exerciseData',bodyData)

      setBodyParts(bodyData)
      
      
     
    }
    fetchExerciseData();
    

  },[])
  
  // console.log('bodyParts',bodyPartData)
 async function handleSearch(){
    
    if(search){
      console.log('clicked')
      // fetch data from the api
    const exerciseData=await  fetchData('https://exercisedb.p.rapidapi.com/exercises',excersiceOptions)

    const searchedExercises=exerciseData.filter((exercise)=>
    exercise.name.includes(search)
    ||exercise.target.includes(search)
    ||exercise.equipment.includes(search)
    ||exercise.bodyPart.includes(search)
    )
    setSearch('');
    setExercises(searchedExercises)
    

    }
    
  }
  return (
    <Stack 
      justifyContent='center'
      alignItems='center'
      mt='37px'
      
      p='20px'
      
    >

      <Typography 
        fontWeight={700}
        sx={{
          fontSize:{lg:'40px',xs:'30px'},
          marginBottom:'50px',
          textAlign:'center',
          mt:{xs:'30px'},
          mb:{lg:'100px',xs:'50px'}
         
        }}
      >
        Awesome Excersice <br/>You should Know
      </Typography>

      <Box  className='parent'
        sx={{
         
         display:'flex',
         jsutifyContent:"center",
         maxWidth:'80%',
         margin:'50px auto'
        }}
      >
        <TextField
          
          height="67px"
          p='20px'
          type='text'
          
          placeholder='Search Excersices'
          value={search}
          onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
          sx={{
            input:{fontWeight:'700',
            display:'inline-block',
            borderRadius:'40px',
            outline:'0',
            border:'0',
            width:{lg:'1170px',md:'600px' ,xs:"350px"}, },
            
        
        
        
        background:'#fff',
       
      
      }}

          
      
         
        ></TextField>

        <Button className='search-btn'
          
          sx={{
            width:{lg:'150px',xs:'70px'},
            color:'white',
            background:'#ff2625',
            
            height:'55px',
            
            fontSize:{lg:'20px'},
            textTransform:'none'
            
          }}
       onClick={handleSearch} >Search</Button>
      </Box>

      <Box sx={{
        position:'relative',
        padding:'20px',
        width:'100%',

      }}>
        <HorizontalScrollbar data={[...bodyParts] } bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExcersices