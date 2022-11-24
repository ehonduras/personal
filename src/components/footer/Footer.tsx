import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
      width: '80%',
      position: 'absolute',
      bottom: '1%',
      border: '2px solid red',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    }}>
      Test
      Twitter
      Facebook
    </Box>
  )
}

export default Footer