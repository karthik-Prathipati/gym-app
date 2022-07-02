import React, { useEffect, useState } from 'react'
import { Params, useParams } from 'react-router-dom'
import { fetchData, exerciseOptions,youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { Box } from '@mui/material'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [similarTargetVideos, setSimilarTargetVideos] = useState([])
  const [similarEquipmentVideos, setSimilarEquipmentVideos] = useState([])

  const { id } = useParams()

  useEffect(() => {
    async function fetchExerciseDetail() {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeExercise = 'https://youtube-search-and-download.p.rapidapi.com'
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)

      setExerciseDetail(exerciseDetailData)
      const exerciseVideoDetail = await fetchData(`${youtubeExercise}/search?query=${exerciseDetailData.name}`,youtubeOptions)

      const targetExerciseGroup = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)

      setSimilarTargetVideos(targetExerciseGroup)

      const equipmentExerciseGroup = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)

      setSimilarEquipmentVideos(equipmentExerciseGroup)


      setExerciseVideos(exerciseVideoDetail.contents)
    }
    fetchExerciseDetail()
  }, [])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos name={exerciseDetail.name} exerciseVideos={exerciseVideos} />
      <SimilarExercises similarEquipmentVideos={similarEquipmentVideos} similarTargetVideos={similarTargetVideos} />
    </Box>
  )
}

export default ExerciseDetail