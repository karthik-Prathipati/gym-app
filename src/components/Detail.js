import React from 'react'
import { Typography, Box, Stack } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png'
import equipmentImage from '../assets/icons/equipment.png'
import targetImage from '../assets/icons/target.png'

export default function Detail({ exerciseDetail }) {

    const { bodyPart, gifUrl, name, equipment, target } = exerciseDetail

    return (
        <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, alignItems: 'center',p:'20px' }} >
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack sx={{ gap:{lg:'35px' , xs:'20px' }}} >
                <Typography variant='h3' >
                    {name}
                </Typography>
                <Typography variant='h6' >
                    Exercises keep you strong.
                    {` `}{name}{` `} is one of the best exercises to target your {target}.
                    It'll help improve your mood and keep you in good shape.
                </Typography>
            </Stack>

        </Stack>
    )
}

