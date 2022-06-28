import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, Button, Stack } from '@mui/material'


const SearchExercises = () => {
  const [search,setSearch] = useState('');
  function handleSearch(e) {
    setSearch((prev) => e.target.value)
  }
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      mt='37px'
      p='20px'
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', sm: '30px' } }}
        mb='50px' textAlign='center'
      >
        Awesome Exercises You<br />
        Should Know
      </Typography>
      <Box
        position='relative' mb='72px'>
        <TextField
          type='text' placeholder='Search Exercises' value='' onChange={(e) => { }}
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: "#fff",
            borderRadius: '40px'
          }}
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', sm: '14px' },
            height: "56px",
            right: '0'

          }}
          onClick={handleSearch}
        >Search</Button>

      </Box>
    </Stack>
  )
}

export default SearchExercises