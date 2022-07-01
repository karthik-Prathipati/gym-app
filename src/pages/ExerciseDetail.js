import React, { useEffect, useState } from 'react'
import { Params, useParams } from 'react-router-dom'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [ExerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams()

  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail