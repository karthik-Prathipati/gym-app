import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' }
      }}
      position='relative'
      p='20px'
    >
      <Typography
        fontWeight={600}
        color='#FF2625'
        fontSize='26px'
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography
        fontSize='22px'
        lineHeight='35px'
        mb={4}
      >
        Check out the most effective exercises
      </Typography>
      <Button variant='contained'
        color='error' href='#exercises'
        mb={4}
      >Explore new Exercises</Button>
      <Typography
        fontWeight={700}
        fontSize='200px'
        color='#ff2625'
        sx={{
          display: { lg: 'block', xs: 'none' },
          opacity: 0.1
        }}
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt='banner'
        className="hero-banner-img"
      />
    </Box>
  )
}

export default HeroBanner