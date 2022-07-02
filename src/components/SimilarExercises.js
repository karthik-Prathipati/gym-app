import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollBar'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function SimilarExercises({ similarTargetVideos, similarEquipmentVideos }) {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' },p:'20px' }} >
      <Typography variant='h4' mb='20px'>
        Exercises that target similar Muscles group
      </Typography>
      <Stack direction='row' sx={{ p: '25px', position: 'relative' }}>
        <HorizontalScrollbar data={similarTargetVideos} isBodyParts={false} />
      </Stack>
    </Box>
  )
}

export default SimilarExercises
