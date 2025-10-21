import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const Info = () => {
  return (
    <Box sx={{ p: 3, minHeight: 'calc(100vh - 56px)' }}>
      <Typography variant="h4">Info</Typography>
      <Typography paragraph>
        Hello
      </Typography>
        <p>Testi</p>
    </Box>
  )
}

export default Info