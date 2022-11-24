import { Box, Typography } from '@mui/material'
import React from 'react'

const WelcomeSection = () => {
  return (
    <div>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}>
        <Box>
          <Typography variant='h4' fontWeight='bold'>
            Pozdrav, 
          </Typography>
          <br></br>
          <Typography variant='h6'>
            Dobrodošli u moj digitalni prostor.
          </Typography>
          <br></br>
          <Typography variant='h6'>
            Ja sam Nimre Odnoh, živim u Ucijnok. Na ovom prostoru ću dijeliti neke svoje projekte, knjige koje čitam, razmišljanja i ideje. 
            Ovaj digitalni prostor sam iskoristio kao platformu za učenje ali i bilješke o tome na što trošim vrijeme.
          </Typography>
        </Box>

        <Box>
          <Typography>
            Ovo je mjesto za sliku
          </Typography>
        </Box>

      </Box>
    </div>
  )
}

export default WelcomeSection