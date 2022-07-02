import React from 'react'
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png'
import equipmentImage from '../assets/icons/equipment.png'
import targetImage from '../assets/icons/target.png'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Detail({ exerciseDetail }) {

    const { gifUrl, name, target } = exerciseDetail

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: "Eat Sleep"
        },
        {
            icon: targetImage,
            name: "Exercise"
        },
        {
            icon: equipmentImage,
            name: "Repeat"
        }
    ]

    return (
        <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, alignItems: 'center', p: '20px' }} >
            <img className='detail-image' src={gifUrl} alt={name} loading='lazy' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }} >
                <Typography variant='h4' textTransform='capitalize'>
                    {name}
                </Typography>
                <Typography variant='h6' >
                    Exercises keep you strong.
                    {` `}{name}{` `} is one of the best exercises to target your {target}.
                    It'll help improve your mood and keep you in good shape.
                </Typography>
                {extraDetail.map((detail) => (
                    <Stack key={detail.name} direction='row' alignItems='center' gap='24px' >
                        <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '80px', height: '80px' }} >
                            <img src={detail.icon} alt='bodyPart' style={{ width: '40px', height: '40px' }} />
                        </Button>
                        <Typography variant='h6' textTransform='capitalize' color='error'>{detail.name}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

