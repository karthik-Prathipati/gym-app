import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

function BodyPart({ item, bodyPart }) {
    return (
        <Stack
            className='bodyPart-card'
            alignItems='center'
            justifyContent='center'
            type='button'
            sx={
                {
                    borderTop: bodyPart === item ? '4px solid #FF2625' : " ",
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '280px',
                    cursor: 'pointer',
                    gap: '47px'
                }
            }
            onClick={setBodyPart(item)}
        >
            <img src={Icon} width='40px' height='40px' />
            <Typography fontSize='24px' fontWeight="bold" color="#3A1212" textTransform='capitalize' >{item}</Typography>
        </Stack>
    )
}

export default BodyPart