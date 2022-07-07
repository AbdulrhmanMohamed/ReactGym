import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import Detail from '../components/Detail'
import {excersiceOptions,fetchData,youtubeOptions} from '../utlities/fetchData'

import SimilarExercises from '../components/SimilarExercises'
import VideoExercises from '../components/VideoExercises'
function ExcersiceDetails() {
    const [exerciseDetail,setExerciseDetail]=useState({})
    const [videoExercises,setVideoExercises]=useState([])
    const {id}=useParams();

   useEffect(()=>{
   
    
    const fetchExerciseDetail=async()=>{
        const baseExerciseUrl='https://exercisedb.p.rapidapi.com/exercises/exercise'
        const baseYoutubeExerciseUrl='https://youtube-search-and-download.p.rapidapi.com'
        const exerciseDetail=await fetchData(`${baseExerciseUrl}/${id}`,excersiceOptions)
        setExerciseDetail(exerciseDetail)
        console.log('exerciseDetail',exerciseDetail)
        console.log('exerciseDetailName',exerciseDetail.target)
        const yExercisesDetails=await fetchData(`${baseYoutubeExerciseUrl}/search?query=${exerciseDetail.name}`,youtubeOptions)
        setVideoExercises(yExercisesDetails)
        
    }
    fetchExerciseDetail();
    
   },[id])
    
  return (
    <div className='exerciseDetails'>
        <Detail exerciseDetail={exerciseDetail}/>
        <VideoExercises videoExercises={videoExercises.contents}  name={exerciseDetail.name}/>
        <SimilarExercises/>
    </div>
  )
}

export default ExcersiceDetails