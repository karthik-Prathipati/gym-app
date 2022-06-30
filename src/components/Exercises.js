import React from 'react'
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Typography, Stack } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard';


const Exercises = ({ setExercises, bodyPart, exercises }) => {
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
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))
        }
      </Stack>

    </Box>
  )
}

export default Exercises