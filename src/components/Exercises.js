import React from 'react'
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Typography, Stack } from '@mui/material';
import { excerciseOptions, fetchData } from '../utils/fetchData'


const Exercises = ({ setExcercises, bodyPart, excercises }) => {
  return (
    <Box id="excercises"
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
        {excercises.map((excercise, index) => (
          <p>{excercise.name}</p>
        ))
        }
      </Stack>

    </Box>
  )
}

export default Exercises