import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function ExerciseVideos({ name, exerciseVideos }) {
  return (
    <Box sx={{ mt: { lg: '160px', xs: '20px' }, p: '20px' }} >
      <Typography variant='h4' mb='20px'>
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }} >{name}</span> exercise videos here
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '100px', xs: '0' } }} >
        {
          exerciseVideos?.slice(0, 3).map((item, index) => (
            <a key={index} className='exercise-video'
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='norefferer'
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant='h6' color='#000'  >
                  {item.video.title}
                </Typography>
                <Typography variant='h7'  color='#000'>
                  {item.video.channelName}
                </Typography>
              </Box>

            </a>
          ))
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
