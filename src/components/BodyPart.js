import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function BodyPart({ item, bodyPart,setBodyPart }) {
    return (
        <Stack
            className='bodyPart-card'
            alignItems='center'
            justifyContent='center'
            type='button'
            sx={
                {
                    borderTop: (bodyPart === item) ? '4px solid #FF2625' : 'none',
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '280px',
                    cursor: 'pointer',
                    gap: '47px'
                }
            }
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({ top: 1800, left: 100, behaviour: 'smooth' })
            }
            }
        >
            <img src={Icon} width='40px' height='40px' alt='body part icon' />
            <Typography fontSize='24px' fontWeight="bold" color="#3A1212" textTransform='capitalize' >{item}</Typography>
        </Stack >
    )
}

export default BodyPart