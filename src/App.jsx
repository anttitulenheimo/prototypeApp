import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// Loading screen
function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function App() {
  const [count, setCount] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const [isEmptying, setIsEmptying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Timer effect
    let interval = null;
    if (isEmptying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
        setProgress(prevProgress => prevProgress + 100/15);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsEmptying(false);
      setShowAlert(true);
      setTimeLeft(15);
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [isEmptying, timeLeft]);

  const buttonHandler = () => {
    setCount(count + 1)
    setShowAlert(false)
    setIsEmptying(true)
    setTimeLeft(15)
    setProgress(0)
  }

  const warningComponent = () => {
    return (
      <Alert severity="warning">
        Säiliö tyhjentyy
      </Alert>
    )
  }

  return (
    <div>
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
    </div>
  )
}

export default App
