import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import CircularProgressWithLabel from './CircularProgressWithLabel'
import Battery from './Battery'


const Home = ({
  batteryLevel, isCharging, isFull, containerIsFull,
  buttonHandler, isEmptying, warningComponent, progress,
  showAlert, count, mockButtonHandler
})  => {
  return (
    <Box sx={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 56px)',
      padding: 2
    }}>
      <Battery level={batteryLevel} charging={isCharging} />

      {isFull && containerIsFull()}

      <Button
        variant="contained"
        onClick={buttonHandler}
        disabled={isEmptying}
      >
       Tyhjennä
      </Button>

      {isEmptying && (
        <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
          {warningComponent()}
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgressWithLabel value={progress} />
          </Box>
        </Stack>
      )}

      {showAlert && !isEmptying && (
        <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
          <Alert severity="success">
            Säiliö tyhjennetty onnistuneesti
          </Alert>

          <Alert severity="info">
            Säiliö tyhjennetty {count} kertaa
          </Alert>
        </Stack>
      )}

      <Button variant="outlined" onClick={mockButtonHandler}>Make it full</Button>
    </Box>
  )
}

export default Home