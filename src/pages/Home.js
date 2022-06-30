import { Box } from '@mui/material'
import React ,{useState} from 'react'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [excercises, setExcercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('');
  return (
    <Box>
      <HeroBanner />
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExcercises={setExcercises} />
      <Exercises />
    </Box>
  )
}

export default Home