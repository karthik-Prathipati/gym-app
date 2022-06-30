import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchData.js';
import HorizontalScrollBar from './HorizontalScrollBar.js';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    async function fetchBodyParts() {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts([...bodyPartData]);
    }
    fetchBodyParts();
  }, [])


  async function handleSearch() {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      const searchedExercises = exerciseData.filter((exercise) =>
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises([...searchedExercises])
    }

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
          type='text' placeholder='Search Exercises' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
      <Box
        sx={{ position: 'relative', width: '100%', p: '20px' }} >
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises