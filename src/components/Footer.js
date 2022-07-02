import React from 'react'
import { Box,Stack,Typography } from '@mui/material' 


const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
      
      <Typography variant='h6' pb='40px' mt='20px' color='error'>
        Made with Love by Karthik
      </Typography>
      </Stack>
    </Box>
  )
}

export default Footer