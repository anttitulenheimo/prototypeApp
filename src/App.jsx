import React, { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx"
import Battery from "./components/Battery.jsx"
import CircularProgressWithLabel from "./components/CircularProgressWithLabel.jsx"

function App() {
  const DURATION = 5

  const [count, setCount] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [timeLeft, setTimeLeft] = useState(DURATION)
  const [isEmptying, setIsEmptying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [batteryLevel, setBatteryLevel] = useState(85)
  const [isCharging, setIsCharging] = useState(false)
  const [isFull, setIsFull] = useState(false)
  const [name, setName] = useState("Oma ansa")

  // For timer
  useEffect(() => {
    if (!isEmptying) return

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          setIsEmptying(false)
          setShowAlert(true)
          setProgress(0)
          return DURATION
        }
        return prev - 1
      })

      setProgress(prev => prev + 100 / DURATION)

    }, 1000)

    return () => clearInterval(interval)
  }, [isEmptying])

  const buttonHandler = () => {
    setCount(prev => prev + 1)
    setShowAlert(false)
    setIsEmptying(true)
    setTimeLeft(DURATION)
    setProgress(0)
  }

  const warningComponent = () => (
    <Alert severity="warning">
      Säiliö tyhjentyy
    </Alert>
  )

  return (
    <>
      <ResponsiveAppBar />

      <Box sx={{ overflowY: 'auto', p: 2 }}>
        <Box
          sx={{
            backgroundColor: 'grey.200',
            borderRadius: 4,
            p: 2,
            mb: 2
          }}
        >
          <Typography>{name}</Typography>
          <Battery level={batteryLevel} charging={isCharging} />

        <Button
          variant="contained"
          fullWidth
          onClick={buttonHandler}
          disabled={isEmptying}
        >
          Tyhjennä
        </Button>


          {isEmptying && (
            <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
              {warningComponent()}
              <Box display="flex" justifyContent="center" mt={2}>
                <CircularProgressWithLabel
                  value={progress}
                  timeLeft={timeLeft}
                />
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
        </Box>

        <Box
          sx={{
            backgroundColor: 'grey.300',
            borderRadius: 4,
            p: 2
          }}
        >
          Toka osio
        </Box>
      </Box>
    </>
  )
}

export default App
