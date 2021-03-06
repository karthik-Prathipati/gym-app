import React, { useEffect, useState } from 'react'
import { Pagination, Box, Typography, Stack } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Exercises = ({ setExercises, bodyPart, exercises }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage = 9;

  const indexOfLastPage = currentPage * exercisePerPage;
  const indexOfFirstPage = indexOfLastPage - exercisePerPage;

  useEffect(() => {
    async function fetchBodyParts() {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }
    fetchBodyParts();

  }, [bodyPart])

  const currentExercises = exercises.slice(indexOfFirstPage, indexOfLastPage)

  function paginate(value) {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behaviour: 'smooth' })
  }

  return (
    <Box id="exercises"
      sx={{
        mt: { lg: '120px' }
      }}
      mt='50px' p='20px'
    >
      <Typography variant='h3' mb='46px' >
        Showing results
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center'
        sx={{ gap: { lg: '110px', xs: '50px' } }} >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))
        }
      </Stack>
      <Stack mt='100px' alignItems='center' >
        {exercises.length > exercisePerPage &&
          <Pagination
            color='primary' shape="rounded" defaultPage={currentPage} count={Math.ceil(exercises.length / exercisePerPage)} onChange={paginate} size='large'
          />
        }
      </Stack>
    </Box>
  )
}

export default Exercises